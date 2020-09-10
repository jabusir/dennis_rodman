import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
`
const IconContainer = styled.div`

`

const IconImg = styled.img`

`
const IconTxt = styled.div`

`

const StyledLink = styled(Link)`

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
                <StyledLink>
                    <IconImg src="/icons/folder.png" alt="folder" />
                    <IconTxt>Clips</IconTxt>
                </StyledLink>
            </IconContainer>

            <IconContainer>
                <a to="imranpotato.com" target="_blank">
                    <IconImg src="/icons/potato.png" alt="potato" height="32px" width="32px" />
                    <IconTxt>Potato</IconTxt>
                </a>
            </IconContainer>

            <IconContainer>
                <StyledLink>
                    <IconImg />
                    <IconTxt></IconTxt>
                </StyledLink>
            </IconContainer>

        </NavbarContainer>
    );
}

export default Navbar;