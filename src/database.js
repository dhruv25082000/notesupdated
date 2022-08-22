import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://imabhi:loveanjali@cluster0.2uce9kq.mongodb.net/?retryWrites=true&w=majority");
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
};
