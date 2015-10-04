var React = require("react");
var Router = require("react-router");
var Sealhub = require("./app.jsx");
var trim = require("trim-html");

var ArticleListElement = React.createClass({
	render: function() {
		var article = this.props.article.body;
		var content = trim(article.content.html, {limit: 100});

		function createMarkup() { 
			return {
				__html: content.html
			}; 
		};

		return (
			<div className="ArticleListElement">
				<span>ArticleListElement</span>
				<h1>{article.title}</h1>
				<div dangerouslySetInnerHTML={createMarkup()} />
			</div>
		);
	}
});

module.exports = ArticleListElement;