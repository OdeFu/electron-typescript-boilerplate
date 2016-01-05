#!/usr/bin/env node
var commandStr = "./" + process.argv[2];
var command = require(commandStr);
command();