import multer from "multer";
import ErrorHandler from "../utils/utility-class.js";

const storage = multer.diskStorage({
  destination(req, file, callback) {
    // callback(error, destination)
    callback(null, "uploads");
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.split(" ").join("");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtention = filename.split(".").pop();
    cb(null, filename.split(".")[0] + "-" + uniqueSuffix + "." + fileExtention);
  },
});

export const singleUpload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new ErrorHandler("only image files are allowed", 400), false);
      return;
    }
  },
}).single("photo");
