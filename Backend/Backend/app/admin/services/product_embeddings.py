from sentence_transformers import SentenceTransformer

import os
import threading
import pandas as pd
import numpy as np

# Constants
PICKLE_PATH = "static/product_embeddings.pkl"
EMBEDDING_DIMENSION = 384  # Dimension of the embeddings from the model

_lock = threading.Lock()
product_embeddings = None  # Global in-memory DataFrame
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

def load_product_embeddings():
    global product_embeddings
    if os.path.exists(PICKLE_PATH):
        product_embeddings = pd.read_pickle(PICKLE_PATH)
    else:
        product_embeddings = pd.DataFrame()

def get_product_embeddings():
    with _lock:
        return product_embeddings.copy()

def update_product_embeddings(csv_path: str):
    """Reads a CSV, generates embeddings, updates and saves the product DataFrame."""
    df = pd.read_csv(csv_path)
    df.columns = df.columns.str.strip()
    df.fillna("", inplace=True)

    # Validate required columns
    required_cols = ["Title", "Category", "Description"]
    for col in required_cols:
        if col not in df.columns:
            raise ValueError(f"Missing column: {col}")

    # Create feature string and embedding
    df["feature_string"] = df["Title"] + " " + df["Category"] + " " + df["Description"]
    df["embedding"] = df["feature_string"].apply(
        lambda x: model.encode(x, convert_to_numpy=True) if x.strip() else np.zeros(EMBEDDING_DIMENSION)
    )

    # Save to pickle safely
    temp_path = f"{PICKLE_PATH}.tmp"
    df.to_pickle(temp_path)
    os.replace(temp_path, PICKLE_PATH)

    # Update global variable
    with _lock:
        global product_embeddings
        product_embeddings = df
