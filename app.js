const express = require('express');

const router = express.Router();

const mutter = require('multer');

const upload = mutter({ dest: "uploads/" });


router.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
    if(!req.file) return res.status(400).json({ error: "No file uploaded" });

    const { originalname, mimetype, size } = req.file;

    res.json({
        name: originalname,
        type: mimetype,
        size: size,
    })
});

module.exports = router;