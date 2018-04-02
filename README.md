# react-color-class
rgb rgba hsv
## RGB
以RGB格式存放颜色数据。

### 定义与使用 | Definition & Usage
```js
var colorRGB = new RGB(255,255,255); // White;
colorRGB.setR(0);
colorRGB.setG(0);
colorRGB.setB(0);
var hexStr = colorRGB.toString(); // hexStr = '#000000'
var colorRGB2 = colorRGB.copy(); // Black
var colorHSV = colorRGB.toHSV; // Read 'HSV' 
```
### 对象属性 | Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| r| 红色值(0-255)|
| g| 绿色值(0-255)|
| b| 蓝色值(0-255)|

### 对象方法 | Methods

| 方法名 Method | 描述 Descrition|
| --------| -----|
| getR| 获取红色值 |
| getG| 获取绿色值 |
| getB| 获取蓝色值 |
| setR| 设置红色值(0-255) |
| setG| 设置绿色值(0-255) |
| setB| 设置蓝色值(0-255) |
| copy| 返回一份拷贝|
| toString| 返回字符串|
| toHex| 返回十六进制格式颜色的字符串|
| toHSV| 返回一个Hsv格式颜色|
