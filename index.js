var Sealious = require("sealious");
var requireDir = require("require-dir");


Sealious.init();

requireDir("./field-types");
requireDir("./resource-types");


Sealious.start();