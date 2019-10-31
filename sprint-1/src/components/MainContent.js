/// *** React Imports
import React from 'react'; 
import MainVideo from "./MainVideo"; 
import VideoInfo from "./VideoInfo"; 
import Comments from "./Comments"; 
import SuggestedVideos from "./SuggestedVideos"; 

/// *** Image Imports 
import vid0 from "../assets/Images/video-list-0.jpg"; 
import vid1 from "../assets/Images/video-list-1.jpg"; 
import vid2 from "../assets/Images/video-list-2.jpg"; 
import vid3 from "../assets/Images/video-list-3.jpg"; 
import vid4 from "../assets/Images/video-list-4.jpg"; 
import vid5 from "../assets/Images/video-list-5.jpg"; 
import vid6 from "../assets/Images/video-list-6.jpg"; 
import vid7 from "../assets/Images/video-list-7.jpg"; 
import vid8 from "../assets/Images/video-list-8.jpg"; 


export default function MainContent() {  
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

    const suggested = [
        {id: "0", 
        title: "BMX Rampage: 2018 Highlights", 
        channel: "Red Cow", 
        image: vid0}, 

        {id: "1", 
        title: "Become A Travel Pro In One Easy Lesson", 
        channel: "Todd Welch", 
        image: vid1},

        {id: "2", 
        title: "Les Houches The Hidden Gem Of The...", 
        channel: "Cornelia Blair", 
        image: vid2},  

        {id: "3", 
        title: "Travel Health Useful Medical Information...", 
        channel: "Glen Harper", 
        image: vid3}, 

        {id: "4", 
        title: "Cheap Airline Tickets Great Ways To Save", 
        channel: "Emily Harper", 
        image: vid4}, 

        {id: "5", 
        title: "Take A Romantic Break In A Boutique Hotel", 
        channel: "Ethan Owen", 
        image: vid5}, 

        {id: "6", 
        title: "Choose The Perfect Accommodations", 
        channel: "Lydia Perez", 
        image: vid6}, 

        {id: "7", 
        title: "Cruising Destination Ideas", 
        channel: "Timothy Austin", 
        image: vid7}, 

        {id: "8", 
        title: "Train Travel On Track For Safety", 
        channel: "Scotty Crammer", 
        image: vid8}, 
    ];

    return (
        <main>
            <MainVideo />
            <div className="main__text-wrapper">
                <div className="main__video-specific-wrapper">
                    <VideoInfo data={mainVideo} />
                    <Comments data={mainVideo} />
                </div>
                <SuggestedVideos data={suggested} />
            </div>
        </main>
  );
}