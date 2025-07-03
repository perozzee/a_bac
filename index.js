import express from "express";
import { port } from "./src/config/env.js";

const app = express();

app.use(express.json());

app.listen(port, () => {
  console.log('Server is running on port 3009');
});