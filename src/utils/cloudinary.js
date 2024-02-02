import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
const uploadOnCloudinary = async (localFilePath) => {
  try {
      if (!localFilePath) return null;

      const response = await cloudinary.uploader.upload(localFilePath, {
          resource_type: "auto"
      });

      console.log("-----------------------------------");
      console.log("full response : ", response);
      console.log("-----------------------------------");
      // file has been uploaded successfully
      console.log("file is uploaded successfully : ", response.url);
      return response;
  } catch (error) {
      console.error("upload error: ", error);

      // Handle specific error scenarios
      if (error.message.includes("your custom error message")) {
          // Handle specific error condition
      } else {
          // Handle other error conditions
      }

      // Delete the local file
      fs.unlinkSync(localFilePath);
      return null;
  }
};

export {uploadOnCloudinary};