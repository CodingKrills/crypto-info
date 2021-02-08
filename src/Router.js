import React from 'react'

import Header from "./components/Header";

import Home from "./screens/Home";
import About from "./screens/About";
import SingleCrypto from "./screens/SingleCrypto";



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
                        <Route path="/:id" component={SingleCrypto} exact />
                        <Route path="/about" component={About} exact />
                        <Route path="/" component={Home} exact />
                    </Switch>
                </div>
            </>
        </div>
    )
}

export default Router
