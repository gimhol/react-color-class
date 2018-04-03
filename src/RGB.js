import HSV from './HSV'
import { floor_clamp, num_to_hex } from './Utils'

export default class RGB {

  constructor(r=0,g=0,b=0){
    this.setR(r);
    this.setG(g);
    this.setB(b);
  }

  getR(){
    return this.r;
  }

  setR(value){
    this.r = floor_clamp(value,0,255);
  }

  getG(){
    return this.g;
  }

  setG(value){
    this.g = floor_clamp(value,0,255);
  }

  getB(){
    return this.b;
  }

  setB(value){
    this.b = floor_clamp(value,0,255);
  }

  copy(){
    return new RGB(this.getR(),this.getG(),this.getB());
  }

  toString(){
    return 'rgb('+this.getR()+','+this.getG()+','+this.getB()+')';
  }

  toHex(){
    return '#'+num_to_hex(this.r)+num_to_hex(this.g)+num_to_hex(this.b);
  }

  toHSV(hues){
    var rgb = [
      this.getR(),
      this.getG(),
      this.getB()
    ]
    rgb.sort(function sortNumber(a,b){
      return a - b
    });
    var max = rgb[2];
    var min = rgb[0];
    var ret = new HSV(
      0,
      max === 0 ? 0 : (max - min) / max,
      max / 255,
    );
    var rgbR = this.getR();
    var rgbG = this.getG();
    var rgbB = this.getB();
    if(max === min){ //lost rgb
      ret.setH(hues);
    }
    else if (max === rgbR && rgbG >= rgbB) {
        ret.setH((rgbG - rgbB) * 60 / (max - min) + 0);
    }
    else if (max === rgbR && rgbG < rgbB) {
        ret.setH((rgbG - rgbB) * 60 / (max - min) + 360);
    }
    else if (max === rgbG) {
        ret.setH((rgbB - rgbR) * 60 / (max - min) + 120);
    }
    else if (max === rgbB) {
        ret.setH((rgbR - rgbG) * 60 / (max - min) + 240);
    }
    return ret;
  }

  static fromHex(str){
    if(!(/^#[0-9a-fA-F]{6}$/).test(str)){
      return null
    }
    var r = parseInt(str.substring(1,3), 16)
    var g = parseInt(str.substring(3,5), 16)
    var b = parseInt(str.substring(5,7), 16)
    return new RGB(r,g,b);
  }
}
RGB.White = new RGB(255,255,255)
RGB.Black = new RGB(0,0,0)
