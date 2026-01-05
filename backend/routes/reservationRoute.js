import express from "express";
// import {sendReservation} from "../controller/reservation.js"

import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// Sample reservation route

router.post("/send", sendReservation);

export default router;
