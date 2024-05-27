const express = require("express");
const router = express.Router();
const Product = require("../models/productModel.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

// create product
router.post("/", verifyTokenAndAdmin, async (request, response) => {
    const newProduct = new Product(request.body);

    try {
        const savedProduct = await newProduct.save();
        response.status(200).json(savedProduct);
    } catch (error) {
        response.status(500).json(error);
    }
})

// update product
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(request.params.id, {
          $set: request.body,
      }, {new: true});
      response.status(200).json(updatedProduct);
    } catch (error) {
      response.status(500).json(error);
    }
})

// delete product
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      await Product.findByIdAndDelete(request.params.id);
      response.status(200).json("Product has been deleted");
    } catch (error) {
      response.status(500).json(error); 
    }
})

// get product
router.get("/find/:id", async (request, response) => {
    try {
      const product = await Product.findById(request.params.id);
      response.status(200).json(product);
      console.log("Success");
    } catch (error) {
      response.status(500).json(error);
    }
})

// get all products
router.get("/", async (request, response) => {
    // newly created product
    const qNew = request.query.new;
    const qCategory = request.query.category;
    try {
       let products;

       if ( qNew )
       {
        products = await Product.find().sort({ createdAt: -1}).limit(1);
       }
       else if ( qCategory )
       {
        products = await Product.find({categories: { $in: [qCategory]}});
       }
       else
       {
        products = await Product.find();
       }
       response.status(200).json(products);
    } catch (error) {
      response.status(500).json(error);
    }
})

// partial products
// partial search
router.get("/partial/:searchQuery", async (request, response) => {
  const query = request.params.searchQuery;
  const searchRegex = new RegExp(query, 'i');
  try {
    const products = await Product.find({ title: searchRegex });
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json(error);
  }
})

module.exports = router;