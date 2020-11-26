import React, { useState } from 'react'
import { Avatar } from "@material-ui/core";
import "./Posting.css"

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Posting() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = e => {
        e.preventDefault()                 //it prevents default behavior from happening (refreshing in our case)
    }
    return(
        <div className="posting">
            <div className="posting-top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}        //changing the value inside the input with the one initialized from the keyboard
                        className="posting-input"
                        type="text"
                        placeholder={'What s on your mind?'}
                        />
                    <input
                        placeholder="image URL (Optional"
                        onChange={e => setImageUrl(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="posting-bottom">
                <div className="posting-option">
                    <VideocamIcon style={{ color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="posting-option">
                    <PhotoLibraryIcon style={{ color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="posting-option">
                    <InsertEmoticonIcon style={{ color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}


export default Posting