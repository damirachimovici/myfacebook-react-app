import React from "react";
import Post from './Post'
import Posting from "./Posting";
import Stories from './Stories'
import "./Feed.css"

function Feed () {
    return(
        <div className="feed">
            <Stories/>
            <Posting/>
            <Post
                profilePic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/27/15/tom-sodoge-59546-0.jpg"
                message="Nice shitposting bruh"
                timestamp="timestamp"
                username="Jack Lumberjack"
                image="https://pbs.twimg.com/profile_images/1269386493409230848/YiZwmcBS.jpg"
            />
        </div>
    )
}

export default Feed