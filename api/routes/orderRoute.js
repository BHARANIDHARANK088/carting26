const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken.js");

// create order
router.post("/", verifyToken, async (request, response) => {
    const newOrder = new Order(request.body);

    try {
        const savedOrder = await newOrder.save();
        response.status(200).json(savedOrder);
    } catch (error) {
        response.status(500).json(error);
    }
})

// update order
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(request.params.id, {
          $set: request.body,
      }, {new: true});
      response.status(200).json(updatedOrder);
    } catch (error) {
      response.status(500).json(error);
    }
})

// delete order
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      await Order.findByIdAndDelete(request.params.id);
      response.status(200).json("Order has been deleted");
    } catch (error) {
      response.status(500).json(error); 
    }
})

// get user orders
router.get("/find/:userId", verifyTokenAndAuthorization, async (request, response) => {
    try {
      const orders = await Order.find({userId: request.params.userId});
      response.status(200).json(orders);
      console.log("Success");
    } catch (error) {
      response.status(500).json(error);
    }
})

// get all orders
router.get("/", verifyTokenAndAdmin, async (request, response) => {
    try {
      const orders = await Order.find();
      response.status(200).json(orders);
      console.log("Success");
    } catch (error) {
      response.status(500).json(error);
    }
})

// get monthly income
router.get("/income", verifyToken,async (request, response) => { 
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth =  new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
              $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
              }
           },
           {
             $group: {
              _id: "$month",
               total: { $sum: "$sales" },
             }
           }
        ])
        response.status(200).json(income);
    } catch (error) {
        response.status(500).json(error);
    }
})

module.exports = router;