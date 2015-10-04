var Sealious = require("sealious");
var marky = require("marky-markdown")

var field_type_markdown_text = new Sealious.ChipTypes.FieldType({
	name: "markdown-text",
	extends: "text",
	decode: function(context, params, value_in_database) {
		var html = marky(value_in_database, {sanitize: true}).html()

		return {
			html: html,
			md: value_in_database
		}
	}
});