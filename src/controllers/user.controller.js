import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res)=>{
    console.log('user eamil : ' , req.email)

    const {username, email, password, fullName} = req.body;
    if ([username, email, password, fullName].some((fields)=> fields.trim() === '')) {
        throw new ApiError(400, "Please fill all the fields")
    }

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })
    if (existedUser) {
        throw new ApiError( 401 , "User already exists in the database !");
    }


    const avatarLocalPath = req.files.avatar ? req.files.avatar?.[0]?.path : req.files.avatar.path;  // for multer middleware to save file in server local directory

    if (!avatarLocalPath) {
        throw new ApiError(400, "local path file not provided");
    }else{
        throw new ApiResponse( 200, "avatar local path uploaded ")
    }

    



    
})

export {registerUser}