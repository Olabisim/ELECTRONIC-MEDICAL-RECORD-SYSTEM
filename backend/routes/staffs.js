import express from "express";
const router = express.Router();

import {} from "../controllers/staff.js";
import { staffSignup } from "../controllers/authentication.js";

router.post("/signup", staffSignup);

export default router;
