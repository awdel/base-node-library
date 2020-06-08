import './sass/styles.scss';

class MyLib {}
MyLib.prototype.myFunc = require('./js/scripts');

global.MyLib = new MyLib();
