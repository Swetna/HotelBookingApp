import UserModel from "../models/UserModel.js"

// export const createUser = async(req,res,next) =>{
//     const newUser = new UserModel(req.body)
//     try{
//         const savedUser = await newUser.save();
//         res.status(500).json(savedUser);

//     }catch(err){
//         next(err);
//     }
// }

export const updateUser = async(req,res,next) =>{
     
    try{
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, {$set : req.body},{new: true});
        res.status(200).json(updateUser);

    }catch(err){
        next(err);
    }
}

export const deleteUser = async(req,res,next) =>{
    
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Successfully deleted user.");

    }catch(err){
        next(err)
    }
}

export const getUser = async(req,res,next) =>{
    try{
        
        const userVal = await UserModel.findById(req.params.id);
        res.status(200).json(userVal);

    }catch(err){
        next(err)
    }
}

export const getAllUsers = async(req,res,next) =>{
    try{
        const AllUsers = await UserModel.find();
        res.status(200).json(AllUsers);

    }catch(err){
        next(err);
    }
}