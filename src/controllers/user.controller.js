import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res)=>{
    const { username, fullName, password, email } = req.body;
    console.log("email : " + email);
  
    if (
      [username, fullName, password, email].some((field) => field?.trim() === "")
    ) {
      throw new ApiError(400, "please fill in all fields : ");
    }
  
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
  
    if (existingUser) {
      throw new ApiError(409, "User with email or username already exists");
    }
  
    console.log("req . files ", req.files);
//   const avatarLocalPath = req.files ? req.files.avatar?.[0]?.path : req.files.avatar?.path;
    const avatarLocalPath = req.files?.avatar?.[0]?.path;

    
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required @localpath ");
    }
    
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0]?.path;
    }


    
})

export {registerUser}