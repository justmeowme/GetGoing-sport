import React from "react";
import {MemoryRouter, Switch, Route} from "react-router-dom";

import MastHead from "./MastHead";
import Home from "./Home";
import Fitness from "./Fitness";
import Sports from "./Sports";
import Events from "./Events"
import Lessons from "./Lessons";
import Register from "./Register";
import Login from "./Login";
import "./App.css";

const App = () => (
    <MemoryRouter>
        <MastHead/>
        <Switch>
            <Route path="/fitness">
                <Fitness/>
            </Route>
            <Route path="/events">
                <Events/>
            </Route>
            <Route path="/lessons">
                <Lessons/>
            </Route>
            <Route path="/sports">
                <Sports/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/" exact={true}>
                <Home/>
            </Route>
        </Switch>
    </MemoryRouter>
);

export default App;
