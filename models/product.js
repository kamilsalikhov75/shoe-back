import mongoose from 'mongoose';

const SizeSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const ProductSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sizes: {
      type: Array(SizeSchema),
      default: [],
    },
    gender: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model('Product', ProductSchema);
