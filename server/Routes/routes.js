import express from "express";
import { getProductById, getProducts } from "../Controller/productcontroller.js";
import { userLogin, userSignUp } from "../Controller/UserController.js";
const router =express.Router();

router.post("/signup" , userSignUp)
router.post("/userlogin" , userLogin)


router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;