import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://imabhi:loveanjali@cluster0.2uce9kq.mongodb.net/?retryWrites=true&w=majority";
