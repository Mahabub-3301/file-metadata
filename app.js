const express = require('express');

const router = express.Router();

const mutter = require('multer');

const upload = mutter({ dest: "uploads/" });


router.post('/api/fileanalyse', upload.single('upfile'), (req,res)=>{
    if(!req.file) return res.status(400).json({ error: "No file uploaded" });

    

    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });

});

module.exports = router;