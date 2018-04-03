var boxNames= [];

var line = "------------";

var _space = function(){
  var ret = ''
  for(var i=0;i<boxNames.length;++i){
    ret += '    ';
  }
  return ret;
}
var console_log = console.log;
var _box = function(str){
  console_log(_space() + str)
}

var _beginBox = function(boxName = ""){
  _box(`${line} ${boxName} Begin ${line}\n`);
  boxNames.push(boxName)
}

var _endBox = function(){
  var boxName = boxNames.splice(boxNames.length-1)
  _box(`${line} ${boxName} End ${line}\n`);
}

var _scriptBox = function(func){
  var str = func.toString().replace('function (){','');
  str = str.substring(0,str.length-1);
  var lines = str.split('\r\n');
  lines.map((line)=>_box(line.replace("  ","")))
}

var _resultBox = function(func){
  console.log = _box;
  func();
  console.log = console_log;
}


exports.beginBox = _beginBox;

exports.endBox = _endBox;

exports.scriptBox = _scriptBox;

exports.resultBox = _resultBox;
