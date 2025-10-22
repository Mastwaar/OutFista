# from fastapi import APIRouter

# router = APIRouter()

# @router.get("/")
# def get_alerts():
#     return {"Welcome to Visual Search API!"}


# -------------------------------------------------------

from fastapi import APIRouter, File, UploadFile
from scipy.spatial.distance import cosine
import numpy as np
from admin.services.product_features import extract_image_features, get_image_features_db

router = APIRouter()

@router.post("/internal/search/image/")
async def search_similar_image(file: UploadFile = File(...), top_k: int = 5):
    contents = await file.read()

    # Save temp image to read with PIL
    temp_path = "static/temp_query.jpg"
    with open(temp_path, "wb") as f:
        f.write(contents)

    query_feat = extract_image_features(temp_path)
    if query_feat is None:
        return {"results": [], "message": "Failed to extract features."}

    features_db = get_image_features_db()
    if not features_db:
        return {"results": [], "message": "No product features loaded."}

    similarities = []
    for product_id, stored_feat in features_db.items():
        sim = 1 - cosine(query_feat, stored_feat)
        similarities.append((product_id, float(sim)))  # 👈 convert to float

    top = sorted(similarities, key=lambda x: x[1], reverse=True)[:top_k]

    # Optional cleanup
    try:
        os.remove(temp_path)
    except Exception:
        pass

    return {
        "results": [
            {"product_id": str(pid), "score": round(float(score), 4)}  # 👈 ensure score is float
            for pid, score in top
        ],
        "message": "Success"
    }