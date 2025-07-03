import express from "express";
import { verify } from "jsonwebtoken";

const router = express.Router();

router.get("/:id", verifyToken, viewProject);

router.put("/:id", verifyToken, updateProject);

export default router;