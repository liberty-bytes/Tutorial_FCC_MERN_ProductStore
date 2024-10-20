// const express = require('express'); // OLD WAY CommonJS, NEWER WAY is Module
import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", function (req, res) {
  res.send("Server is ready");
});
app.get("/products", (req, res) => {});

console.log("LOG: ", process.env.MONGO_URI);

app.listen(5000, () => {
  connectToDatabase();
  console.log(`Server started on http://localhost:5000`);
});
