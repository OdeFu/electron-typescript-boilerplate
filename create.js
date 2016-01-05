var config = require("./config");
var async = require("async");
var electron_download = require('electron-download')
var os = require("os");
var path = require("path")
var extract = require('extract-zip');
var fs = require("fs")

module.exports = function (opt) {
    var project_dir = opt.project_dir;
    fs.mkdirSync(project_dir);
}

function load(callback) {
    npm.load(null, callback)
}

function init(callback) {
    npm.commands.init([""], callback);
}

function download(callback) {
    electron_download(config, function () {
        unzip(callback)
    });
}

function unzip(callback) {
    if (!fs.existsSync(config.dirname)) {
        extract(config.filename, { dir: config.dirname }, callback)
    }
    else {
        callback();
    }
}

var tasks = [
    download,
    unzip,
    load,
    init
]

async.series(tasks, function (error) {
    if (error) {
        throw error;
    }
})
