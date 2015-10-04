var Sealhub = require("./app.jsx");
var React = require("react");
var Router = require("react-router");

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
	<Route path="/" handler={Sealhub.App}>
		<DefaultRoute name="article-list" handler={Sealhub.ArticleList}/>
		<Route name="other-view"/>
	</Route>
);

module.exports = routes;