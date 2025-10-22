from fastapi import APIRouter, Query
from admin.services.product_embeddings import get_product_embeddings, model
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

router = APIRouter()

@router.get("/internal/products/")
def read_products():
    df = get_product_embeddings()
    return df.head(10).to_dict(orient="records")

@router.post("/internal/text/search/")
def search_products(prompt: str = Query(..., description="Search query"), top_k: int = 5):
    df = get_product_embeddings()

    if df.empty or "embedding" not in df.columns:
        return {"results": [], "message": "No product data loaded."}

    # Encode the prompt
    query_embedding = model.encode(prompt, convert_to_numpy=True).reshape(1, -1)

    # Create an array from the embeddings column
    embeddings_matrix = np.stack(df["embedding"].values)

    # Compute cosine similarity
    similarities = cosine_similarity(query_embedding, embeddings_matrix)[0]

    # Get top_k indices
    top_indices = similarities.argsort()[-top_k:][::-1]

    # Fetch top_k rows
    top_results = df.iloc[top_indices].copy()
    top_results["score"] = similarities[top_indices]

    # Remove embeddings from the output
    top_results.drop(columns=["embedding"], inplace=True)

    return top_results.to_dict(orient="records")
