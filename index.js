var Sealious = require("sealious");
var requireDir = require("require-dir");


Sealious.init();

requireDir("./field-types");
requireDir("./resource-types");


Sealious.ChipManager.get_chip("channel", "rest").set_url_base("/api/v1");
Sealious.start();