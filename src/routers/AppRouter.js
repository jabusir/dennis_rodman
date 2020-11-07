import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from '../screens/Welcome';
import Navbar from '../components/Navbar';
import About from '../screens/About';
import Archive from '../screens/Archive';


const AppRouter = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" component={Welcome} exact={true} />
            <Route path="/archive" component={Archive} />
            <Route path="/about" component={About} />
        </Switch>
    </Router>
)

export default AppRouter;