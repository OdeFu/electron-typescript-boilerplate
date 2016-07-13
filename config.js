var os = require("os");
var homepath = require("home-path");
var path = require("path");
var argv = require('yargs').argv;

var config = {
  version: argv.version || '1.2.6',
  arch: os.arch(),
  platform: os.platform(),
  cache: path.join(homepath(), "./.electron"),
  symbols: false
};

var electron_paths = {
  darwin: 'Electron.app/Contents/MacOS/Electron',
  freebsd: 'electron',
  linux: 'electron',
  win32: 'electron.exe'
};

var dirname = 'electron-v' + config.version + '-' + config.platform + '-' + config.arch +
  (config.symbols ? '-symbols' : '');
var filename = dirname + '.zip';
config.dirname = path.join(config.cache, dirname);
config.filename = path.join(config.cache, filename);
config.electron_path = path.join(config.cache, dirname, electron_paths[config.platform]);

module.exports = config;




