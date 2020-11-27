import React, { useState } from 'react'
import { Avatar } from "@material-ui/core";
import "./Posting.css"
import db from '../firebase'
import firebase from "firebase";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./StateProvider";

function Posting() {

    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = e => {
        e.preventDefault()                 //it prevents default behavior from happening (refreshing in our case)


        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");
    }

    return(
        <div className="posting">
            <div className="posting-top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}        //changing the value inside the input with the one initialized from the keyboard
                        className="posting-input"
                        type="text"
                        placeholder={`What s on your mind, ${user.displayName}?`}
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