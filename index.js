var Sealious = require("sealious");
var requireDir = require("require-dir");
var path = require("path");

Sealious.init();

requireDir("./field-types");
requireDir("./resource-types");


Sealious.ChipManager.get_chip("channel", "rest").set_url_base("/api/v1");
Sealious.ChipManager.get_chip("channel", "www_server").static_route(path.resolve( __dirname, "./app/public"), "");
Sealious.start();