import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

router.get("/upload/single", single, async (req, res) => {
    try {
        if(req.file){
            const result = await handleUpload(req.file.path);         
            res.json({ message: 'File uploaded successfully', result });
        } else {
            res.status(400).json({ message: 'No file uploaded' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error uploading file' });
      }
});
router.get("/upload/multiple", multiple, async(req, res) => {
    try {
        const fileUrls: any = req.files;
        if(req.files){
          const result = fileUrls.map((file: {path: string}) => 
            handleUpload(file.path)
        );        
        
        res.json({ message: 'Files uploaded successfully', result });
        }else {
            res.status(400).json({ message: 'No file uploaded' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error uploading files' });
      }
});

module.exports =  router;
