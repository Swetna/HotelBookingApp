import HotelModel from "../models/HotelModel.js"

export const createHotel = async(req,res,next) =>{
    const newHotel = new HotelModel(req.body)
    try{
        const savedHotel = await newHotel.save();
        res.status(500).json(savedHotel);

    }catch(err){
        next(err);
    }
}

export const updateHotel = async(req,res,next) =>{
     
    try{
        const updateHotel = await HotelModel.findByIdAndUpdate(req.params.id, {$set : req.body},{new: true});
        res.status(200).json(updateHotel);

    }catch(err){
        next(err);
    }
}

export const deleteHotel = async(req,res,next) =>{
    
    try{
        await HotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Successfully deleted hotel.");

    }catch(err){
        next(err)
    }
}

export const getHotel = async(req,res,next) =>{
    try{
        
        const hotelVal = await HotelModel.findById(req.params.id);
        res.status(200).json(hotelVal);

    }catch(err){
        next(err)
    }
}

export const getAllHotel = async(req,res,next) =>{
    try{
        const AllHotels = await HotelModel.find();
        res.status(200).json(AllHotels);

    }catch(err){
        next(err);
    }
}