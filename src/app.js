import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./config/routes";
import PageWrapper from "./pages";

const App = () => (
    <Router>
        {routes.map((route, index) => {
            const { path, ...restRouteProps } = route;
            const key = `routes-${index}`;

            return (
                <Route path={path} key={key}>
                    <PageWrapper route={{ ...restRouteProps }} />
                </Route>
            );
        })}
    </Router>
);

export default hot(App);
