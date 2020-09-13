import React from 'react';
import styled from 'styled-components';
import "98.css";


const Background = styled.div`
    background-image: url('https://cdn.discordapp.com/attachments/705279132388556912/753892867113615380/poopy.png');
    background-repeat: repeat;
    background-position: fixed;
    z-index: -1;
    height: 100vh;
    width: 100%;
    position: fixed;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100vh;

`

const StyledImg = styled.img`

`

const Icons = styled.div`
    display: flex;
`

const About = () => {
    return (
        <Container>
            <Background></Background>
            <div className="window about-window" >
                <div className="title-bar">
                    <div className="title-bar-text">About - (formerly Gurbriel)</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <div className="window-body">
                    <ul className="tree-view">
                        <Icons>
                            <li className="icons">
                                <a href="https://instagram.com/gabethedumbidiot">
                                    <StyledImg src="/icons/insta.png" height="32px" width="32px" />
                                </a>
                                <a href="https://twitter.com/gabedumbidiot">
                                    <StyledImg src="/icons/twitter.png" height="32px" width="32px" />
                                </a>
                                <a href="https://soundcloud.com">
                                    <StyledImg src="/icons/cheifkeef.png" height="32px" width="32px" />
                                </a>
                            </li>
                        </Icons>
                    </ul>
                </div>
            </div >
        </Container>
    )
}

export default About;