import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import statsRouter from "./routes/admin.js";
import adminRouter from "./routes/userCrud.js";
import dotenv from "dotenv";
import helmet from 'helmet';
import  multer from "multer";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from "url";



// Configureations

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use('assets', express.static(path.join(__dirname,'public/assets')))
  routes
app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/tour", tourRouter);
app.use("/stats", statsRouter);
app.use("/admin", adminRouter);
app.get("/", (req, res) => {
  res.send("Welcome to Hustles kenya API");
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
