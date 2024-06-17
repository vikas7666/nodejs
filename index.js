// const app = require('./app')
// // const fs  =  require('fs')

// const gz = require('fs').writeFileSync;

// // console.log(app.z())  // I am clling from app

// let arr = [1,4,6,8,9,12,15];

// let result = arr.filter((item) =>{  // filter 
//     return item === 4;
// })
// console.log(result)  // global module 

// // fs.writeFileSync("hello.txt", "code step by tep") // non global module

// console.log(__dirname)  //  D:\leaning\node
// console.log(__filename) // D:\leaning\node\index.js

// // other way while importing file

// gz('zyz.txt','hello')


const { color, log, red, green, cyan, cyanBright, black } = require('console-log-colors');

console.log(black('This is a green string!'));
