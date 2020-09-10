import React, { useState } from 'react';
import styled from 'styled-components';

import "98.css";
import "./Welcome.css"

const BackgroundImage = styled.div`
    background-image: url('https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: -1;
`

const Baby = styled.img`
    position: fixed;
    right: 0;
    top: 0;
`

const Kozzi = styled.img`
    position: fixed;
    right: 121px;
    top: 68px;
`

const Welcome = (props) => {

    const [ayo, setAyo] = useState(false)

    return (
        <div>
            <Baby src="/baby.png" height="300" />
            <Kozzi src="/kozzi.png" />
            <div className="banner">
                <div className="rainbow-text">
                    Welcome idiot
                </div>
            </div>
            <div style={{ width: '350px' }} className="window ayo-window">
                <div className="title-bar">
                    <div className="title-bar-text">AYO WINDOW</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button onClick={() => setAyo(false)} aria-label="Close" />
                    </div>
                </div>
                <div className="desc-text">Do not click this window unless you're sus</div>
                <div className="window-body ayo-view">
                    {ayo ? (<ul className="tree-view">
                        <img className="ayo-content" src="https://cdn.discordapp.com/attachments/600808673475952673/753493175003250699/image0.gif" alt="ayo" />
                        <br></br>
                        ayyyooo
                    </ul>) : (<button onClick={() => setAyo(true)}>Go</button>)}
                </div>
            </div>
        </div>
    )
}
export default Welcome;