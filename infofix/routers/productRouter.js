import { createProduct,getProducts,deleteProduct, updateProduct } from "../controllers/productController.js";
import express from 'express'

const productRouter = express.Router()

productRouter.get("/",getProducts)
productRouter.post("/",createProduct)
productRouter.put("/:productId",updateProduct)
productRouter.delete("/:productId",deleteProduct)


export default productRouter