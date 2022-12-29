const express = require("express");
// const ProductModel = require("../Models/ProductModel");
const ProductController = require("../Controllers/ProductController");

let router = express.Router();

router.post("/addNewProduct", ProductController.AddNewProduct);

router.get("/allProducts", ProductController.GetAllProducts);

router.delete("/deteleProduct/:id", ProductController.DeleteProduct);

router.put("/updateProduct/:id", ProductController.UpdateProduct);

// router.get("/product/:id", ProductController.ViewGeneralCampaigns);

module.exports = router;
