import express from "express";
import { port } from "./src/config/env.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();

app.use(express.json());

 //routes
app.use("/api/projects", projectRoutes);

//error middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server is running on port 3009');
});