var config = require("./config");
var async = require("async");
var electron_download = require('electron-download');
var path = require("path");
var extract = require('extract-zip');
var fs = require("fs");
var npm = require("npm");
var fsutil = require("./file-util");

module.exports = function () {
  var tasks = [
    download,
    unzip,
    createTemplate,
    load,
    init
  ];
  async.series(tasks, function (error) {
    if (error) {
      throw error;
    }
  })
};

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

function createTemplate(callback) {

  var currentDirFiles = fs.readdirSync(process.cwd())
  if (currentDirFiles.length > 0) {
    throw new Error("current dir must be empty :" + currentDirFiles);
  }

  var dir = ".";
  var templateDir = path.join(__dirname, "template");
  fsutil.copy(templateDir, dir);
  callback();

}

