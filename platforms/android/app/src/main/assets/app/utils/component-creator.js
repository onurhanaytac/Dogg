/*
 * to create folders and component files under the pages
 * run this with -- node component-creator.js path/to/filename
*/

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

console.log("************************************ NATIVESCRIPT EASY COMPONENT FILES CREATOR ************************************");

var createPath = path.join(__dirname, "../pages");
var dir = _.compact(process.argv[2].split("/"));

if (dir[0] === ".") {
	dir = dir.slice(1, dir.length);
}


_.each(dir, url => {
	createPath = path.join(createPath, url);
	if (!fs.existsSync(createPath)){
	  fs.mkdirSync(createPath);
		console.log(createPath, " path created!")
	}
});

var componentFiles = [
	".css",
	".android.css",
	".component.ts",
	".html",
	".ios.css"
]

_.each(componentFiles, filename => {
	var _path = path.join(createPath, dir[dir.length - 1] + filename);

	if (!fs.existsSync(_path)){
	  fs.writeFileSync(_path);
		console.log(_path, " file created!")
	}
});
