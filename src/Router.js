import React from 'react'

import Header from "./components/Header";

import Home from "./screens/Home";
import About from "./screens/About";


import {
    Switch,
    Route
} from "react-router-dom";


const Router = () => {
    return (
        <div>
            <>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} exact />
                    </Switch>
                </div>
            </>
        </div>
    )
}

export default Router
