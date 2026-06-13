import { createProduct,getProducts,deleteProduct, updateProduct, getProductsById } from "../controllers/productController.js";
import express from 'express'

const productRouter = express.Router()

productRouter.get("/",getProducts)
productRouter.post("/",createProduct)
productRouter.put("/:productId",updateProduct)
productRouter.delete("/:productId",deleteProduct)
productRouter.get("/:productId",getProductsById)


export default productRouter