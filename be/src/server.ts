import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});