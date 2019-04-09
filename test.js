// var Hexo = require('hexo');
const fs = require('fs')

const log = console.log;

const content = fs.readFileSync('./css3背景新增属性.md').toString()
log(content.replace(/---[\s|\S]*?---[\n]*/g, ''));
log(content.trim());

