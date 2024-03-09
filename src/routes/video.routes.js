import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
} from "../controllers/video.controller.js"

const router = Router();
router.use(verifyJWT);


router.route("/").get(getAllVideos)
  .post(
    upload.fields([
      { name: "videoFile", maxCount: 1 },
      { name: "thumbnail", maxCount: 1 },
    ]),
    publishAVideo
  );

  router.route("/:videoId")
  .get(getVideoById)
  .delete(deleteVideo)
  .patch(upload.single("thumbnail"), updateVideo)

// @desc    Toggle video publication status
// @route   PUT /api/videos/:id/publish
// @access  Private
router.put('/toggle/publish/:videoId').patch(togglePublishStatus);

export default router;