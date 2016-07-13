#!/usr/bin/env node

var argv = require('yargs').argv;

var commandStr = "./" + argv._[0];
var command = require(commandStr);
command(argv);
