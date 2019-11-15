const express = require("express");
const path = require("path");

const app = express();

// Body parser middleware 
app.use(express.json());
const videoRouter = require("./routes/api/videos");

// Let's use a port... 
// Look in the environment settings
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.json({
        msg: "You can perform these requests from this API: GET/videos ---> response = json, array of nextVideo objects || GET/videos/:id ---> response = json, object of detailed information corresponding to the :id"
    });
})

app.use("/videos", videoRouter);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
})