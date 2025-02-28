import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);

// Start server
export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
