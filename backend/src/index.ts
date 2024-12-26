import express from "express";
import dotenv from "dotenv";
import router from "./router";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

const PORT = process.env.PORT || 5000;

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(notFound);
