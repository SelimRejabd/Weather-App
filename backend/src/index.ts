import express from "express";
import dotenv from "dotenv";
import router from "./router";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import mongoose from "mongoose";
import { Server } from "http";
import cookieParser from "cookie-parser";
const cors = require("cors");

dotenv.config();

const app = express();

app.enable("trust proxy");
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));

const PORT = process.env.PORT || 5000;

app.use("/api/v1", router);

app.use(globalErrorHandler);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

let server: Server;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);

    server = app.listen(PORT, () => {
      console.log(`App listening on  ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
app.use(notFound);
