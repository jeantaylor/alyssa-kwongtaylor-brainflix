const express = require("express");
const router = express.Router();
const cors = require("cors");
const nextVidsData = __dirname + "/../../model/nextVids.json";
const mainVideoData = __dirname + "/../../model/mainVideo.json";
const helper = require("../../helper/helper");

let nextVids = require(nextVidsData);
let mainVids = require(mainVideoData); 

router.use(cors());

router.post("/", (req, res) => {
    const postDate = Date.now().toString(); 

    const newVideo = {
        id: helper.getNewId(),
        title: req.body.title,
        channel: "Mohan Murr",
        image: req.body.image
    }

    const newVideoDetails = {
        id: helper.getNewId(),
        title: req.body.title,
        channel: "Mohan Murr",
        image: req.body.image, 
        description: req.body.description, 
        views: "0", 
        likes: "0", 
        duration: "0", 
        video: "", 
        timestamp: {postDate}, 
        comments: []
    }

    if (!newVideoDetails.title || !newVideoDetails.channel || !newVideoDetails.image || !newVideoDetails.description) {
        return res.status(400).json({
            errorMsg: "Please provide all required info to upload a video."
        });
    }
    nextVids.push(newVideo);
    mainVids.push(newVideoDetails);

    helper.writeJSONFile(nextVidsData, nextVids);
    helper.writeJSONFile(mainVideoData, mainVids);

    res.status(201).json({msg: "Upload successful."}); 
});

module.exports = router; 