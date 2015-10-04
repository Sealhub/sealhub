var Sealious = require("sealious");

var field_type_language = new Sealious.ChipTypes.FieldType({
	name: "language",
	is_proper_value: function(accept, reject, context, params, new_value) {
		var langs = ['pl', 'en'];
		new_value = new_value.toLowerCase();

		if (langs.indexOf(new_value) > -1) {
			accept();
		} else {
			reject(new_value +"isn't right value for language");
		}
	},
	encode: function(context, params, value_in_code) {
		value_in_code = value_in_code.toLowerCase();
		return value_in_code;
	}
});