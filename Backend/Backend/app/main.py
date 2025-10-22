from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api import admin
from api.internal import text_search as internal_text_search
from api.internal import visual_search as internal_visual_search

from api.v1 import text_search as v1_text_search
from api.v1 import visual_search as v1_visual_search

from admin.services.product_embeddings import load_product_embeddings
from admin.services.product_features import load_image_features

app = FastAPI(title="AI Fashion Backend Server")

# ✅ Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "*",  # Allow all origins for dev. Change to your domains in prod.
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Load product data
load_product_embeddings()
load_image_features()

# ✅ Register routes
app.include_router(admin.router, prefix="/admin", tags=["Admin"])
app.include_router(internal_text_search.router, prefix="/internal/text", tags=["Text Search"])
app.include_router(internal_visual_search.router, prefix="/internal/visual", tags=["Visual Search"])

# Optional public API
# app.include_router(v1_text_search.router, prefix="/api/v1/text", tags=["text-search"])
# app.include_router(v1_visual_search.router, prefix="/api/v1/visual", tags=["visual-search"])

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Fashion Backend Server!"}
