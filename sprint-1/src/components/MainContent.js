import React from 'react'; 
import MainVideo from "./MainVideo"; 
import VideoInfo from "./VideoInfo"; 
import Comments from "./Comments"; 

export default function MainContent(props) {
    const data = props.data;  

    return (
        <main>
            <MainVideo />
            <VideoInfo data={data}/>
            <Comments data={data}/>
        </main>
  );
}