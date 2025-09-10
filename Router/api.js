const express = require("express");
const router = express.Router();
const CategoryController = require("../http/controllers/CategoryController");
const BrandController = require("../http/controllers/BrandController");
const ProductController = require("../http/controllers/ProductController");

//category

router.post("/category/create",CategoryController.create);

router.get("/category/list",CategoryController.list);

router.put("/category/update/:category_id",CategoryController.update);

router.delete("/category/delete/:category_id",CategoryController.delete);


  //brand
router.post("/brand/create",BrandController.create);

router.get("/brand/list",BrandController.list);

router.put("/brand/update/:_id",BrandController.update);

router.delete("/brand/delete/:category_id",BrandController.delete);

// products

router.post("/product/create",ProductController.create);


router.get("/product/list",ProductController.list);

router.put("/product/update/:_id",ProductController.update);

router.delete("/product/delete/:category_id",ProductController.delete);
  module.exports = router;