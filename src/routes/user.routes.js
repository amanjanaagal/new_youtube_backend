import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const Route = Router();

Route.post("/register", registerUser);

export default Route;