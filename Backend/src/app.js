import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

/* -------------------- Middleware -------------------- */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- Routes -------------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Chattrix Backend Running 🚀",
  });
});

/* -------------------- 404 Handler -------------------- */

app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

export default app;