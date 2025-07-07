import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env";

const user = {
    id: 2,
    name: "John",
    role: "admin",
    department: "IT",
    accessLevel: 4
};

const token = jwt.sign(user, jwtSecret, {expiresIn: "1hr"});
console.log(`JWT token for ${user.role} : ${token}`);