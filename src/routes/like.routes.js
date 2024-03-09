import { Router } from "express";
import {
  getLikedVideos,
  toggleCommentLike,
  toggleVideoLike,
  toggleTweetLike,
} from "../controllers/like.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router.route("/toogle/v/:videoId").post(toggleVideoLike);

router.route("/toogle/c/:commentId").post(toggleCommentLike);

router.route("/toogle/t/:tweetId").post(toggleTweetLike);

router.route("/videos").get(getLikedVideos);

export default router;
