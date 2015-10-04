var React = require("react");
var Router = require("react-router");
var Sealhub = require("./app.jsx");

var Store = require("../stores/store.js");

var ArticleList = React.createClass({
	mixins: [Router.State],
	getInitialState: function() {
		return {
			articles: []
		};
	},
	componentDidMount: function() {
		var self = this;
		Store.getAllArticles()
			.then(function(response){
				self.setState({
					articles : response
				})
			})	
	},
	cli: function(){
		console.log(this.state.articles)
	},
	render: function() {
		var list_elements = this.state.articles.map(function(article){
			return (
				<Sealhub.ArticleListElement key={article.id} article={article}/>
			)
		})

		return (
			<div className="ArticlesList">
				<span>ArticlesList</span>	
				{list_elements}				
			</div>
		);
	}
});

module.exports = ArticleList;