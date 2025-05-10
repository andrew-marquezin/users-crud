import mongoose from "mongoose";
import { config } from "../config/config";

export async function connectDB() {
  try {
    await mongoose.connect(config.mongoURL);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}