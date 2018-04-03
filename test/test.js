var { RGB, RGBA, HSV } = require('../index')
var { beginBox, scriptBox, resultBox, endBox } = require('./utils')

var testScript = function(){
  var colorRGB = new RGB(255,0,0);
  console.log(colorRGB);

  colorRGB.setR(255.9);
  colorRGB.setG(100.5);
  colorRGB.setB(100.4);
  console.log(colorRGB);

  console.log(colorRGB.toHex());
  console.log(" ");

  colorRGB = RGB.fromHex('#10FF22')
  console.log(colorRGB);
  console.log(colorRGB.toHex());

  console.log(colorRGB.toHSV());

  var colorRGBA = new RGBA(255,0,0,255);
  console.log(colorRGBA);
  console.log(colorRGBA.toString());
  console.log(" ");

  colorRGBA = RGBA.fromHex('#1022FFF0')
  console.log(colorRGBA.toHex());

  var colorHSV = new HSV(0,1,1);
  console.log(colorHSV);
  console.log(colorHSV.toString());
  console.log(colorHSV.toRGB());
}

beginBox("Test");
{
  beginBox("Script");
  {
    scriptBox(testScript);
  }
  endBox();

  beginBox("Result");
  {
    resultBox(testScript);
  }
  endBox();
}
endBox();
