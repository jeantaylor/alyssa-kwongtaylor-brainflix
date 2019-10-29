import React from 'react';
import Axios from 'axios'; 
import Header from "./components/Header"; 
import video from "./assets/Video/BrainStation-Sample-Video.mp4"; 
import MainVideo from "./components/MainVideo"; 
import VideoDesc from "./components/VideoDesc"; 


function App() {
    const projectKey = "?api_key=2bb7dd6d-ca82-47b6-9411-0b448a4f3395"; 
    const commentData = 
        Axios.get("https://project-1-api.herokuapp.com/comments" + projectKey) 
            .then((resp) => {
                return resp.data; 
            })

    const mainVideo = {
      id: "redCowBMX", 
      image: "../assets/Images/video-list-0.jpg",
      clip: {video}, 
      duration: "00:00:20", 
      title: "BMX Rampage 2018 Highlights", 
      channel: "Red Cow", 
      timestamp: 1545120000000, 
      views: "1,001,023", 
      likes: "110,985",
      description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title", 
      comments: commentData, 
  };

  return (
    <div className="App">
      <Header />
      <MainVideo video={mainVideo}/>
      <VideoDesc video={mainVideo}/>
    </div>
  );
}

export default App;
