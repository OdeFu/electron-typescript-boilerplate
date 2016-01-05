var download = require('electron-download')
var os = require("os");
var config = require("./config")
var path = require("path")
var extract = require('extract-zip')
download(config, function (err, zipPath) {
     extract(zipPath, {dir: config.dirname}, function(){ console.log ("zip success")})
})