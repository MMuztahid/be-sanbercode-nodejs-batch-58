import express from "express";
const dotenv = require('dotenv');

dotenv.config();

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";
const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
  try {
      if(!req.file){
        return res.status(400).json({ message: 'No file uploaded' });
      }
      const result = handleUpload(req.file.path);         
          res.send(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error uploading file' });
    }
});
router.post("/upload/multiple", multiple, async(req, res) => {
  const fileUrls : any = req.files;
  if (fileUrls) {
    const result = fileUrls.map((file: {path : string}) => 
      handleUpload(file.path)
    );
    res.send(result);
  } else {
    res.status(400).json({ error: 'Failed to upload files' });
  }
});

module.exports =  router;
