import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/RoomController.js";

const router = express.Router();

// router.get("/",(req,res) =>{
//     res.send("This is room endpoint");
// }
// )


// CREATE
router.post("/:hotelid", verifyAdmin, createRoom); 

   

// UPDATE
router.put("/:id", verifyAdmin,updateRoom) ;

// DELETE
router.delete("/:id/:hotelid", verifyAdmin,deleteRoom);
    // res.send("This is hotel endpoint");

 


// GET
router.get("/:id", getRoom) ;
    // res.send("This is hotel endpoint");

    


router.get("/",  getAllRooms); 



export default router
