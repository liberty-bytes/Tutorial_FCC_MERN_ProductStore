import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      requried: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt fields on each document
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
