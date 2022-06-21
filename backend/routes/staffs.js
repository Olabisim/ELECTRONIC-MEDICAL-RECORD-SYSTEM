import express from "express";
const router = express.Router();

import { getMe } from "../controllers/staff.js";
import {
  staffSignup,
  staffLogin,
  protectStaff,
} from "../controllers/authentication.js";

router.post("/signup", staffSignup);
router.post("/login", staffLogin);
router.get("/", protectStaff, getMe);

export default router;
