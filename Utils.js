export const clamp = function(value,min,max){
  return Math.min(max,Math.max(min,value))
}
export const floor_clamp = function(value,min,max){
  return Math.floor(clamp(value,min,max))
}
export const num_to_hex = function(value){
  var ret = '0'
  if(value < 16){
    ret += value.toString(16);
  }else{
    ret = value.toString(16)
  }
  return ret;
}
