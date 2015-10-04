var Sealhub = {};

var React = require("react");
var Router = require("react-router");

var Store = require("../stores/store.js");

module.exports = Sealhub;
Sealhub.ArticleListElement = require("./article-list-element.jsx");
Sealhub.ArticleList = require("./article-list.jsx");


Sealhub.App = React.createClass({
	mixins: [Router.State, Router.Navigation],
	render: function() {
		return (
			<div className="app">
				<span>App</span>
				<Router.RouteHandler/>
			</div>
		);
	}
});
