import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import pool from "./configs/db.js";
import schoolRoutes from "./routes/school.routes.js";
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database connected successfully");
    connection.release();
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
})();

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use("/api", schoolRoutes);

export default app;
