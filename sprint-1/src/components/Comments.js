import React from 'react'; 
import MohanMuruge from "../assets/Images/Mohan-muruge.jpg"; 

export default function Comments() {
    return (
        <section className="conversation">
            <h1 className="conversation__header">Join the Conversation</h1>
            <div className="conversation__wrapper">
                <div className="conversation__form">
                    <form className="conversation__input" id="conversation__input">
                        <div className="conversation__avatar-wrapper">
                            <img name ="avatar" className="conversation__avatar" src={MohanMuruge} alt="Upload an Avatar here for your comments!" />
                        </div>
                        <div className="conversation__field-wrapper">
                            <div className="conversation__field">
                                <label className ="conversation__field-header" htmlFor="name">Name</label>
                                <input className="conversation__fill" type="text" id="name" name="name" placeholder="Mohan Muruge"></input> 
                            </div>
                            <div className="conversation__field">
                                <label className ="conversation__field-header" htmlFor="msg">Comment</label>
                                <textarea className="conversation__fill" id="msg" name="comment" rows="6" placeholder="Add a new comment"></textarea>
                            </div>
                            <button type="submit" className="conversation__cta">Comment</button>
                        </div>
                    </form>
                </div>
                <div className="conversation__thread"></div>
            </div>
        </section>
    )
}