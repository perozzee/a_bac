import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";

const user = {
    id: 1,
    name: "Paul",
    role: "manager",
    department: "IT",
    accessLevel: 4
};

const token = jwt.sign(user, jwtSecret, {expiresIn: "1hr"});
console.log(`JWT token for ${user.role} : ${token}`);