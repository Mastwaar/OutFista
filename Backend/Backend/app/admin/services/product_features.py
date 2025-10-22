import os
import pickle
import threading
import pandas as pd
import torch
import numpy as np
from PIL import Image
from torchvision import models, transforms

# Constants
IMAGE_FEATURES_PATH = "static/product_image_features.pkl"

_lock = threading.Lock()
image_features_db = None  # Global in-memory dict

# Load ResNet50 model (excluding final classification layer)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
_resnet_model = models.resnet50(weights=models.ResNet50_Weights.IMAGENET1K_V1)
_resnet_model = torch.nn.Sequential(*list(_resnet_model.children())[:-1])  # remove FC layer
_resnet_model = _resnet_model.to(device)
_resnet_model.eval()

_transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])


def extract_image_features(image_path: str) -> np.ndarray:
    """Extract features using ResNet."""
    try:
        image = Image.open(image_path).convert("RGB")
        image_tensor = _transform(image).unsqueeze(0).to(device)
        with torch.no_grad():
            features = _resnet_model(image_tensor)
        return features.squeeze().cpu().numpy()
    except Exception as e:
        print(f"Error loading image: {e}")
        return None


def update_image_features_from_csv(csv_path: str, image_col: str = "ImageURL", id_col: str = "ProductID"):
    """Reads CSV with image URLs/paths, extracts features, and updates the global features DB."""
    df = pd.read_csv(csv_path)
    df.fillna("", inplace=True)

    if image_col not in df.columns or id_col not in df.columns:
        raise ValueError("CSV must contain columns 'ImageURL' and 'ProductID'.")

    features = {}
    for _, row in df.iterrows():
        image_path = row[image_col]
        product_id = row[id_col]

        if not os.path.exists(image_path):
            print(f"Skipping: {image_path} not found.")
            continue

        feature_vector = extract_image_features(image_path)
        if feature_vector is not None:
            features[product_id] = feature_vector

    # Save atomically
    tmp_path = IMAGE_FEATURES_PATH + ".tmp"
    with open(tmp_path, "wb") as f:
        pickle.dump(features, f)
    os.replace(tmp_path, IMAGE_FEATURES_PATH)

    # Update global state
    with _lock:
        global image_features_db
        image_features_db = features


def load_image_features():
    global image_features_db
    if os.path.exists(IMAGE_FEATURES_PATH):
        with open(IMAGE_FEATURES_PATH, "rb") as f:
            image_features_db = pickle.load(f)
    else:
        image_features_db = {}


def get_image_features_db():
    with _lock:
        return image_features_db.copy()
