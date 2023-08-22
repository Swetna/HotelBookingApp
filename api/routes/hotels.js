import express from "express";
import HotelModel from "../models/HotelModel.js";
// import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/HotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();



// CREATE
router.post("/", verifyAdmin, createHotel); 

   

// UPDATE
router.put("/:id", verifyAdmin,updateHotel) ;

// DELETE
router.delete("/:id", verifyAdmin,deleteHotel);
    // res.send("This is hotel endpoint");

 


// GET
router.get("/:id", getHotel) ;
    // res.send("This is hotel endpoint");

    


// GET ALL
router.get("/",  getAllHotel); 



export default router
