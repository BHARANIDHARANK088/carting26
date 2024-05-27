const express = require("express");
const router = express.Router();
const Cart = require("../models/cartModel.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

// create product
router.post("/", verifyToken, async (request, response) => {
    const newCart = new Cart(request.body);

    try {
        const savedCart = await newCart.save();
        response.status(200).json(savedCart);
    } catch (error) {
        response.status(500).json(error);
    }
})

// update cart
router.put("/:id", verifyTokenAndAuthorization, async (request, response) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(request.params.id, {
          $set: request.body,
      }, {new: true});
      response.status(200).json(updatedCart);
    } catch (error) {
      response.status(500).json(error);
    }
})

// delete cart
router.delete("/:id", verifyTokenAndAuthorization, async (request, response) => {
    try {
      await Cart.findByIdAndDelete(request.params.id);
      response.status(200).json("Cart has been deleted");
    } catch (error) {
      response.status(500).json(error); 
    }
})

// get user cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (request, response) => {
    try {
      const cart = await Cart.findOne({userId: request.params.userId});
      response.status(200).json(cart);
      console.log("Success");
    } catch (error) {
      response.status(500).json(error);
    }
})

// get all
router.get("/", verifyTokenAndAdmin, async (request, response) => {
    try {
        const carts = await Cart.find();
        response.status(200).json(carts);
    } catch (error) {
        response.status(500).json(error);
    }
})

module.exports = router;