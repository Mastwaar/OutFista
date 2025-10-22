# from fastapi import APIRouter

# router = APIRouter()

# @router.get("/")
# def get_alerts():
#     return {"Welcome to Admin API!"}

# -------------------------------------------------------------
from fastapi import APIRouter, UploadFile, File
import shutil
from admin.services.product_embeddings import update_product_embeddings

router = APIRouter()
UPLOAD_TMP_PATH = "static/uploaded_temp.csv"

@router.post("/admin/upload-csv/")
async def upload_csv(file: UploadFile = File(...)):
    with open(UPLOAD_TMP_PATH, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    update_product_embeddings(UPLOAD_TMP_PATH)
    return {"message": "Embeddings updated and in-memory dataframe refreshed."}