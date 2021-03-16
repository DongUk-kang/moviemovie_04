import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Movie from "../Screens/Movie"
import Tv from "../Screens/Tv"
import Search from "../Screens/Search"
import Header from "./Header";

// export default () => (
const Routing = () => (
    <Router>

        <>
            <Header />
            <Switch>
                <Route path={"/"} exact component={Movie} />
                <Route path={"/tv"} exact component={Tv} />
                <Route path={"/search"} exact component={Search} />
                <Redirect from={"*"} to={"/"} />

            </Switch>
        </>
    </Router>
)

export default Routing;
