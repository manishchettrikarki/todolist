// src/index.ts
import cors from "cors";
import express from "express";
import todoRouter from "./todoRoutes";

const app = express();

//
app.use(express.json({ limit: "15mb" }));

// Enabling cors
app.use(cors());

//
const port = 3000;

app.use("/todos", todoRouter);

//
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
