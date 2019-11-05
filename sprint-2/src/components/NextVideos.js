import React from 'react'; 

export default function NextVideos({list, main}) {
    const next = list && list.map((video, index) => {
        if (video.id !== main.id) {
            return (
                <div key={index} id="{video.id}" className="nextVideos__video">
                    <img className="nextVideos__thumbnail" src={video.image} alt="Video thumbnail"/>
                    <div className="nextVideos__info">
                        <div className="nextVideos__title">{video.title}</div>
                        <div className="nextVideos__channel">{video.channel}</div>
                    </div>
                </div>
            )
        } 
        return true; 
    })
    return (
        <section className="nextVideos">
            <div className="nextVideos__header">Next Video</div>
            {next}
        </section>
    );
}