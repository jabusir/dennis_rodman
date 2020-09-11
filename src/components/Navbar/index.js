import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: space-evenly;
    z-index: 1;
    height: 300px;
    margin-left: 30px;
    top: 30px;
`

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconImg = styled.img`
margin: 0 auto;

`
const IconTxt = styled.div`
margin: 3px auto;
`

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;

`


const Navbar = () => {
    return (
        <NavbarContainer>

            <IconContainer>
                <StyledLink to="/">
                    <IconImg src="/icons/computer.png" alt="computer" />
                    <IconTxt>My Computer</IconTxt>
                </StyledLink>
            </IconContainer>

            <IconContainer>
                <StyledLink to="/clips">
                    <IconImg src="/icons/folder.png" alt="folder" />
                    <IconTxt>Clips</IconTxt>
                </StyledLink>
            </IconContainer>

            <IconContainer>
                <a href="https://imranpotato.com" target="_blank">
                    <IconImg src="/icons/potato.png" alt="potato" height="32px" width="32px" />
                    <IconTxt>Potato</IconTxt>
                </a>
            </IconContainer>

            <IconContainer>
                <a href="https://twitch.tv/gabethedumbidiot" target="_blank">
                    <IconImg src="/icons/trash.png" />
                    <IconTxt>TRASH</IconTxt>
                </a>
            </IconContainer>

        </NavbarContainer>
    );
}

export default Navbar;