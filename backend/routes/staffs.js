import express from "express";
const router = express.Router();

import {} from "../controllers/staff.js";
import { staffSignup, staffLogin } from "../controllers/authentication.js";

router.post("/signup", staffSignup);
router.post("/login", staffLogin);

export default router;
