import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`

`
const BackgroundImg = styled.div`
    background-image: url('https://external-preview.redd.it/uhq5zTcMPM3tOW_fbUz4PayDt_5pkEXdyXXoRWs3XOg.jpg?auto=webp&s=e06461124c1ccfdba7e9ece763b644ff68eeb06b');
    background-size: cover;
    position: fixed;
    z-index: 3;

`

const Background = () => {
    return (
        <BackgroundImg></BackgroundImg>
    )
}

export default Background;