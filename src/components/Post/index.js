import React, { useState, useEffect } from "react";
import Clip from "../Clip";
import styled from 'styled-components';

import "98.css";

const Background = styled.div`
    background-image: url('https://cdn.discordapp.com/attachments/600808673475952673/754211144696201297/image0.png');
    background-repeat: repeat;
    background-position: fixed;
    z-index: -1;
`
const ClipsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`


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

    return (
        <Background>
            <ClipsContainer>
                {clips.map((clip) => <Clip clip={clip} />)}\
            </ClipsContainer>
        </Background>
    )
};

export default Post;
