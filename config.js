var os = require("os");
var homepath = require("home-path");
var path = require("path");
var config = {
    version: '0.34.5',
    arch: os.arch(),
    platform: os.platform(),
    mirror: 'https://npm.taobao.org/mirrors/electron/',
    cache:path.join(homepath(),"./.electron"),
    symbols: false
}


var electron_paths = {
  darwin: 'Electron.app/Contents/MacOS/Electron',
  freebsd: 'electron',
  linux: 'electron',
  win32: 'electron.exe'
}


var dirname = 'electron-v' + config.version + '-' + config.platform + '-' + config.arch + (config.symbols ? '-symbols' : '');
var filename = dirname + '.zip';
config.dirname = path.join(config.cache,dirname);
config.filename = path.join(config.cache,filename);
config.electron_path =  path.join(config.cache,dirname,electron_paths[config.platform]);
module.exports = config;




