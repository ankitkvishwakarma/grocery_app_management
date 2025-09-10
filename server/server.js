import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from "./routes/authRoutes.js";
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// ✅ MongoDB Connection — with error handling
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB Connected");
} catch (err) {
  console.error("❌ MongoDB Connection Error:", err);
  // If MongoDB connection fails, throw error to stop app
  throw new Error("Failed to connect to MongoDB");
}

// ✅ Local dev only
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running locally on http://localhost:${PORT}`);
  });
}

export default app;
