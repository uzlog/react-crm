import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ReactQueryConfigProvider, queryCache } from "react-query";
import routes from "./config/routes";
import PageWrapper from "./pages";
import GlobalStyles from "./styles";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const queryConfig = {
    suspense: true
};

const App = () => (
    <Router>
        <ReactQueryConfigProvider config={queryConfig}>
            <ErrorBoundary>
                {routes.map((route, index) => {
                    const { path, ...restRouteProps } = route;
                    const key = `routes-${index}`;

                    return (
                        <Route path={path} key={key} exact={!!route.exact}>
                            <PageWrapper route={{ ...restRouteProps }} />
                        </Route>
                    );
                })}
            </ErrorBoundary>
        </ReactQueryConfigProvider>
        <GlobalStyles />
    </Router>
);

export default hot(App);
