import React, { useState, useEffect } from "react";
import "98.css";
import Clip from "../Clip";

const Post = () => {
    const [clips, setClips] = useState([])

    useEffect(() => {
        fetch('https://api.twitch.tv/kraken/clips/top?channel=gabethedumbidiot', {
            'headers': {
                'Client-ID': 'dxwhexpbvj2553nw528vsz63lx1cfg',
                'Accept': 'application/vnd.twitchtv.v5+json'
            }
        })
            .then((res) => res.json())
            .then((res) => setClips(res.clips))
    })

    return (clips.map((clip) => <Clip clip={clip} />))
};

export default Post;
