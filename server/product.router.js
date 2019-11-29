const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r])
});

router.get("/similar/:productId", async (req, res)=>{
  const id = req.params.productId;
  const mongoId = new mongoose.Types.ObjectId(id)
  const product = await Product.findOne({ id:mongoId});
  const brand = product.title.split{" "}[0];
  const similarItems = await Product.find({ "title" : { $regex: /brand/, $options: "i"}});
  res.status(200).send(similarItems);
});

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

//https://stackoverflow.com/questions/38497650/how-to-find-items-using-regex-in-mongoose

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
