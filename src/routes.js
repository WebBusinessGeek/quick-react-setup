var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createBrowserHistory = require("history/lib/createBrowserHistory");

/*Pages*/
var helloPage = require("./pages/hello");
var notFoundPage = require("./pages/notFound");
var loginPage = require("./pages/login");

/*Routes*/
var routes = (
    <Router history={createBrowserHistory()}>
        <Route name="hello" path="/" component={helloPage} />
        <Route name="login" path="/login" component={loginPage} />
        <Route name="notFound" path="/*" component={notFoundPage} />
    </Router>
);

module.exports = routes;