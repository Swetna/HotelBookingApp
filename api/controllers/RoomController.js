import Room from "../models/RoomModel.js"
import Hotel from "../models/HotelModel.js"
import {createError} from "../utils/error.js"
import RoomModel from "../models/RoomModel.js";

export const createRoom =  async (req,res,next) =>{

    const hotelid = req.params.hotelid;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelid, {$push : {rooms: savedRoom._id}});
        }
        catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}

export const updateRoom = async(req,res,next) =>{
     
    try{
        const updateRoom = await RoomModel.findByIdAndUpdate(req.params.id, {$set : req.body},{new: true});
        res.status(200).json(updateRoom);

    }catch(err){
        next(err);
    }
}

export const deleteRoom = async(req,res,next) =>{
    const hotelid = req.params.hotelid;
    try{
        await RoomModel.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelid, {$pull : {rooms: req.params._id}});
        }
        catch(err){
            next(err);
        }
        res.status(200).json("Successfully deleted room.");

    }catch(err){
        next(err)
    }
}

export const getRoom = async(req,res,next) =>{
    try{
        
        const RoomVal = await RoomModel.findById(req.params.id);
        res.status(200).json(RoomVal);

    }catch(err){
        next(err)
    }
}

export const getAllRooms = async(req,res,next) =>{
    try{
        const AllRooms = await RoomModel.find();
        res.status(200).json(AllRooms);

    }catch(err){
        next(err);
    }
}