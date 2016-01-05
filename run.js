var config = require("./config");
var proc = require('child_process')




module.exports = function () {
    var child = proc.spawn(config.electron_path, ["."], { stdio: 'inherit' })
    child.on('close', function (code) {
        process.exit(code)
    })
}