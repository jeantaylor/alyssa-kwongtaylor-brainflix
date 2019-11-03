import React from 'react'; 
import mohanMuruge from "../assets/Images/Mohan-muruge.jpg"; 
import deleteIcon from "../assets/Icons/SVG/icons8-trash.svg"; 
import likeIcon from "../assets/Icons/PNG/icons8-facebook-like-24.png"; 

export default function Comments(props) {
    function liveTimestamp(epochTime) {
        let msToday = Date.now(); 
        let msDiff = msToday - epochTime; 
        let daysAgo = Math.floor(msDiff / 8.64e+7); 
        let timesText = daysAgo === 1 ? 'day' : 'days'; 
        let dynamicTimestamp = daysAgo === 0 ? 'today' : `${daysAgo} ${timesText} ago`; 
        return dynamicTimestamp; 
    }

    const thread = props.data.comments.map((comment, index) => {
        return (
                <div key={index} className="conversation__comment">
                <div className="conversation__avatar-wrapper">
                    <img className="conversation__avatar" alt="" />
                </div>
                    <div className="conversation__comment-text">
                        <div className="conversation__comment-id">
                            <div className="conversation__comment-name">{comment.name}</div>
                            <div className="conversation__comment-date">{liveTimestamp(comment.timestamp)}</div>
                        </div>
                    <div className="conversation__comment-msg">{comment.msg}</div>
                    <div className="conversation__comment-tools">
                        <button className="conversation__tool-icon delete" id="9a353dc5-6316-41ab-a1ea-c90f75b8be85">
                            <img src={deleteIcon} alt="Delete icon" />
                        </button>
                        <div className="conversation__likes">
                            <button className="conversation__tool-icon like" id="9a353dc5-6316-41ab-a1ea-c90f75b8be85">
                                <img src={likeIcon} alt="Like icon" />
                            </button>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>           
        );
    })

    return (
        <section className="conversation">
            <h2 className="conversation__header">3 Comments</h2>
            <div className="conversation__wrapper">
                <div className="conversation__form">
                    <form className="conversation__input" id="conversation__input">
                        <div className="conversation__avatar-wrapper">
                            <img name ="avatar" className="conversation__avatar" src={mohanMuruge} alt="Upload an Avatar here for your comments!" />
                        </div>
                        <div className="conversation__field-wrapper">
                            <label className ="conversation__field-header" htmlFor="msg">Join the conversation</label>   
                            <div className="conversation__field">
                                <textarea className="conversation__fill" id="msg" name="comment" placeholder="That was most easily the most spectacular BMX moment ever"></textarea>
                                <button type="submit" className="conversation__cta" disabled>Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="conversation__thread">{thread}</div>
            </div>
        </section>
    )
}