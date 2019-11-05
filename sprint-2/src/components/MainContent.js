/// *** React Imports
// import React, {Component} from 'react'; 
// import axios from 'axios'; 
// import {Switch, Router, Link} from 'react-router-dom'; 
// import MainVideo from "./MainVideo"; 
// import VideoInfo from "./VideoInfo"; 
// import Comments from "./Comments"; 
// import NextVideos from "./NextVideos"; 

/// *** Axios Variables
// const api = "https://project-2-api.herokuapp.com/"; 
// const apiKey = "?api_key=c129ab41-3ffe-42dd-9724-711939cd4ab0"; 


export default class MainContent extends Component {  
    componentDidMount() {
        axios.get(api + "videos" + apiKey)
            .then(resp => {
                this.setState({nextVids:resp.data}); 
            })
        axios.get(api + "videos/1af0jruup5gu" + apiKey) 
            .then(resp => {
                this.setState({mainVideo:resp.data}); 
            })
    }

    state = {
        nextVids: [], 
        mainVideo: {}
    }

    render() {        
        return (
            <main>
                <MainVideo main={this.state.mainVideo} />
                <div className="main__text-wrapper">
                    <div className="main__video-specific-wrapper">
                        <VideoInfo data={this.state.mainVideo} />
                        <Comments data={this.state.mainVideo} />
                    </div>
                    <NextVideos list={this.state.nextVids} main={this.state.mainVideo} />
                </div>
            </main>
        );
    }
}