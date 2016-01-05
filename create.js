var JSZip = require("jszip");
var zip = new JSZip();
var config = require("./config");
var async = require("async");


var fs = require("fs")

module.exports = function (opt) {

    var project_dir = opt.project_dir;
    fs.mkdirSync(project_dir);


}
var npm = require("npm");

function load(callback) {
    npm.load(null, callback)
}

function init(callback) {
    npm.commands.init([""], callback);
}

async.series([load, init], function (error) {

    if (error) {
        throw error;
    }

})
