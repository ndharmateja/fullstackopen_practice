import express from "express";
import diariesRouter from "./routes/diaries";
import morgan from "morgan";
import { errorHandler } from "./middleware.ts/error_handler";

// Create express app and mw
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.get("/ping", (_req, res) => res.send("pong"));
app.use("/api/diaries", diariesRouter);

// mw
app.use(errorHandler);

// Start listening
const PORT = 3003;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
