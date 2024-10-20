// const express = require('express'); // OLD WAY CommonJS, NEWER WAY is Module
import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.js";
import Product from "./databaseModels/product.model.js";

dotenv.config();

const app = express();

app.get("/", function (req, res) {
  res.send("Server is ready");
});
app.get("/products", (req, res) => {});

app.post("/products", async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields." });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

console.log("LOG: ", process.env.MONGO_URI);

app.listen(5000, () => {
  connectToDatabase();
  console.log(`Server started on http://localhost:5000`);
});
