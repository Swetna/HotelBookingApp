
import express from "express";
import UserModel from "../models/UserModel.js";
// import { createError } from "../utils/error.js";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/UserController.js";
import { verifyToken, verifyUser , verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkAuthentication",verifyToken,(req,res,next)=>{
    res.send("Hello you are logged in.")
})

router.get("/checkUser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello you are logged in and can delete your account.")
})

router.get("/checkAdmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hello you are the Admin and can delete your account.")
})

// UPDATE
router.put("/:id", verifyUser,updateUser) ;

// DELETE
router.delete("/:id",verifyUser, deleteUser);
    // res.send("This is hotel endpoint");

 


// GET
router.get("/:id",verifyUser, getUser) ;
    // res.send("This is hotel endpoint");

    


// GET ALL
router.get("/",verifyAdmin, getAllUsers); 



export default router
