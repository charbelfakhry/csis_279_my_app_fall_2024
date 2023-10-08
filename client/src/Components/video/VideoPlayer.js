import React from "react";

const VideoPlayer = () => {

    // path, name and type should be stored in the db.
    const videoURL = 'assets/videos/video.mp4';

    return (
    <>
        <h3>Video player</h3>
        <video controls>
            <source src={videoURL} type="video/mp4" />
        </video>
    </>
    )

}

export default VideoPlayer;