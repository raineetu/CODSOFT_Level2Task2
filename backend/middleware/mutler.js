import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('C:/Users/DELL/Desktop/Level2 JobPost/backend/middleware'); 

const uploadDir = path.join(baseDir, 'uploads');


if (uploadDir.startsWith("C:\\")) {
  // console.log('Fixed path:', uploadDir);
} else {
  // console.log('Path is not correctly resolved:', uploadDir);
}
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); 
  // console.log('Uploads directory created!');
} else {
  // console.log('Uploads directory already exists!');
}
import multer from 'multer';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};
export const upload = multer({ storage, fileFilter });
