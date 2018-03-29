import RGB from './RGB'

import { floor_clamp, num_to_hex } from './Utils'

export default class RGBA extends RGB{

  constructor(r=0,g=0,b=0,a=255){
    super(r,g,b)
    this.setA(a);
  }

  getA(){
    return this.a;
  }

  setA(value){
    this.a =  floor_clamp(value,0,255);
  }

  setRGB(rgb){
    this.setR(rgb.r);
    this.setG(rgb.g);
    this.setB(rgb.b);
  }

  copy(){
    return new RGBA(this.r,this.g,this.b,this.a);
  }

  toString(){
    return 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')';
  }

  toHex(){
    return super.toHex() + num_to_hex(this.a);
  }

  static fromHex(str){
    if(!(/^#[0-9a-fA-F]{8}$/).test(str)){
      return null
    }
    var r = parseInt(str.substring(1,3), 16)
    var g = parseInt(str.substring(3,5), 16)
    var b = parseInt(str.substring(5,7), 16)
    var a = parseInt(str.substring(7,9), 16)
    return new RGBA(r,g,b,a);
  }

  static fromRGB(rgb,a=255){
    return new RGBA(rgb.r,rgb.g,rgb.b,a);
  }

}
RGBA.White = new RGBA(255,255,255,255)
RGBA.WhiteT = new RGBA(255,255,255,0)
RGBA.Black = new RGBA(0,0,0,255)
RGBA.BlackT = new RGBA(0,0,0,0)
