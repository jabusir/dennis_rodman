import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from '../screens/Welcome';
import Post from '../components/Post';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import About from '../screens/About';


const AppRouter = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" component={Welcome} exact={true} />
            <Route path="/clips" component={Post} />
            <Route path="/about" component={About} />
        </Switch>
    </Router>
)

export default AppRouter;