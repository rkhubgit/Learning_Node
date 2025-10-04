const path  = require('path');
// console.log(path);

// const pathDirName =  path.dirname('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
// console.log('dirname', pathDirName); //from path module
// console.log(__dirname); //from globals


// const pathFileNameWithExt = path.basename('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
// console.log('filename', pathFileNameWithExt);
// console.log(__filename);


// const pathFileName = path.basename('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js', '.js');
// console.log('filename', pathFileName);


// const pathExtName = path.extname('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
// console.log(pathExtName);

// two types
// absolute path
// relative path

// css
// absolute --> takes always root as ref
// relative --> which is dependent on something

// let a = 10; //absolute val
// let b = a+10; // relative value

// const joinedPath = path.join('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js', 'D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Globals\global.js');
// console.log('JoinPath is ',joinedPath);

// const joinedPath2 = path.join('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js', '../', 'D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Globals\global.js' );
// console.log(joinedPath2);

// const parsePath = path.parse('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Globals\global.js');
// console.log(parsePath);

// const formatPath = path.format(parsePath);
// console.log(formatPath);


// const relativePath = path.relative('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js');
// console.log(relativePath);


// const isAbsoulte =  path.isAbsolute('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js`');
// console.log(isAbsoulte);


// Learning start from here 

// for Checking the what wil be return the path 
const pth = require('path')
// console.log(pth);

//  for checking the directory of the file
// const pathDirName = pth.dirname('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js')
// console.log(pathDirName) // o/p => D

// for checking the filename 
// const pathFileNameWithExt = pth.basename("D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js")
// console.log('path name extension is ',pathFileNameWithExt) // o/p =>  ROHIT KUMAR DATABACKENDNode-BasicPathpath.js

// for checking the file extension 
// const pathExtName = pth.extname ("D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js");
// console.log(pathExtName) // o/p => .js


//  To Join two paths into one path
// const joinedPath = pth.join('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js',  'D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Globals\global.js' );
// console.log(joinedPath)

// convert the pathe into an object
// const parsePath = pth.parse('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Globals\global.js');
// console.log(parsePath)

// convert path object to string 
// const formatPath = pth.format(parsePath)
// console.log(formatPath)

// checking the path is relative or not 
// const relativePath = pth.relative('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Globals\global.js', 'D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js');
// console.log('Relative path is ', relativePath)

// checking the path is absolute or not 
// const isAbsolute = path.isAbsolute('D:\ROHIT KUMAR DATA\BACKEND\Node-Basic\Path\path.js');
// console.log(isAbsolute)