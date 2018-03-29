import RGB from './RGB'

const relations = [
  ['v','t','p'],
  ['q','v','p'],
  ['p','v','t'],
  ['p','q','v'],
  ['t','p','v'],
  ['v','p','q'],
];

export default class HSV {

  constructor(h=0,s=0,b=0){
    this._cursor = 0;
    this.setH(h);
    this.setS(s);
    this.setB(b);
  }

  getH(){
    return this.h;
  }

  setH(value){
    this.h = Math.min(360,Math.max(0,value));
    this._cursor = Math.floor(this.h / 60) % 6;
  }

  getS(){
    return this.s;
  }

  setS(value){
    this.s = Math.min(1,Math.max(0,value));
  }

  getB(){
    return this.b;
  }

  setB(value){
    this.b = Math.min(1,Math.max(0,value));
  }

  getV(){
    return this.getB();
  }

  setV(value){
    return this.setB(value);
  }

  copy(){
    return new HSV(this.h,this.s,this.b)
  }

  toString(){
    return 'hsb('+this.h+','+this.s+','+this.b+')'
  }

  stripSB(){
    return new HSV(this.h,1,1);
  }

  toRGB() {
    var pool = this._getPool();
    return new RGB(
      255 * pool[ relations[this._cursor][0]],
      255 * pool[ relations[this._cursor][1]],
      255 * pool[ relations[this._cursor][2]]
    );
  }

  _getPool(){
    var f = (this.h / 60) - this._cursor;
    return {
      f: f,
      p: this.b * (1 - this.s),
      q: this.b * (1 - f * this.s),
      t: this.b * (1 - (1 - f) * this.s),
      v: this.b
    };
  }
}
