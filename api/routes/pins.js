import express from "express";
import Pin from "../models/Pin.js";
import { 
    createPin,
    getPins
} from "../controllers/pin.js"; 
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();



//CREATE
router.post("/", verifyUser, createPin);


//GET ALL PINS 
router.get("/", verifyUser, getPins);


export default router;