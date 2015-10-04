var Sealious = require("sealious");

module.exports = new Sealious.ChipTypes.ResourceType({
	name: "article",
	fields: [
		{name: "language", type: "language", required: true},
		{name: "title", type: "text", required: true},
		{name: "content", type: "markdown-text"},
		{name: "preview", type: "text"}
	]
});