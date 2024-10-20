import express from "express";
import { connectDB } from "./DB/connectDB.js";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); //for parsing incoming cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on the port ${PORT}`);
});
