import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from '../screens/Welcome';
import Post from '../components/Post';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const BackgroundImg = styled.div`
    background-image: url('https://external-preview.redd.it/uhq5zTcMPM3tOW_fbUz4PayDt_5pkEXdyXXoRWs3XOg.jpg?auto=webp&s=e06461124c1ccfdba7e9ece763b644ff68eeb06b');
    background-size: cover;
    position: fixed;
    width: 100%;
    height: 100%;
`


const AppRouter = () => (
    <Router>
        <BackgroundImg>
            <Background />
            <Navbar />
            <Switch>
                <Route path="/" component={Welcome} exact={true} />
                <Route path="/clips" component={Post} />
            </Switch>
        </BackgroundImg>
    </Router>
)

export default AppRouter;