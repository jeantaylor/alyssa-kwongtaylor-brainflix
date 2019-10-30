import React from 'react'; 
// import axios from 'axios'; 
import MainVideo from "./MainVideo"; 
import VideoInfo from "./VideoInfo"; 
import Comments from "./Comments"; 

export default function MainContent() {  
    /// Axios not used in this sprint. Commented out, but kept in for later reference for now.
    // const projectKey = "?api_key=2bb7dd6d-ca82-47b6-9411-0b448a4f3395"; 
    // const commentData = 
    //     Axios.get("https://project-1-api.herokuapp.com/comments" + projectKey) 
    //         .then((resp) => {
    //             return resp.data; 
    //         })

    const commentData = [
        {name: "Micheal Lyons", 
        timestamp: "12/18/2018", 
        msg: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        }, 
  
        {name: "Gary Wong", 
        timestamp: "12/18/2018", 
        msg: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself."
        }, 
  
        {name: "Theodore Duncan", 
        timestamp: "12/18/2018", 
        msg: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favourite ever!"
        }
    ]
  
    const mainVideo = {
        id: "redCowBMX", 
        image: "../assets/Images/video-list-0.jpg",
        clip: "../assets/Video/BrainStation-Sample-Video.mp4",
        duration: "00:00:20", 
        title: "BMX Rampage 2018 Highlights", 
        channel: "Red Cow", 
        timestamp: "12/18/2018", // Actual ms epoch --> 1545120000000
        views: "1,001,023", 
        likes: "110,985",
        description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title", 
        comments: commentData, 
    };

    return (
        <main>
            <MainVideo />
            <VideoInfo data={mainVideo}/>
            <Comments data={mainVideo}/>
        </main>
  );
}