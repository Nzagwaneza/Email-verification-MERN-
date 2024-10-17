import express from "express";
import { connectDB } from "./DB/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world 125!");
});

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on the port 3000");
});
