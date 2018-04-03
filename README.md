# react-color-class
一系列颜色类型，能方便的对颜色进行处理、以及互相转换。目前RGB、RGBA、HSV。

# 安装使用
安装
```
npm install react-color-class --save
```
使用
```js
import { RGB, RGBA, HSV } from 'react-color-class';
new RGB(255,255,255);
new RGBA(255,255,255,255);
new HSV(1,0,0);
// 更多的，看下面详情
```

## 构建、测试
构建
```
npm install
```
```
npm run build
```
测试（构建后）
```
npm test
```

# 详情

## HSV
HSV(HSB)颜色类。
[什么是HSB](https://baike.baidu.com/item/hsb/10338413)

### 定义与使用 | Definition & Usage

```js
var colorHSV = new HSV(0,1,1); // Red;
```

### 对象属性 | Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| h| 色调(0-360)。|
| s| 饱和度(0-1)。|
| b| 明亮度(0-1)。|

### 对象方法 | Methods

| 方法名 Method | 描述 Descrition|
| --------| -----|
| getH | 获取色调。 |
| setH | 设置色调0-360)。 |
| getS | 获取饱和度。 |
| setS | 设置饱和度(0-1)。 |
| getB | 获取明亮度。 |
| setB | 设置明亮度(0-1)。 |
| getV | 同getB。 |
| setV | 同setB。 |
| copy | 返回一份拷贝。|
| toString| 返回字符串。|
| stripSB | 返回一个抛弃饱和度和明亮度的拷贝。|
| toRGB | 返回一个RGB格式的颜色。 |

## RGB
RGB颜色类。

### 定义与使用 | Definition & Usage

```js
var colorRGB = new RGB(255,255,255); // White;
```
### 静态属性 | Static Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| White| 白色。|
| Black| 黑色。|

### 对象属性 | Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| r| 红色值(0-255)。|
| g| 绿色值(0-255)。|
| b| 蓝色值(0-255)。|

### 对象方法 | Methods

| 方法名 Method | 描述 Descrition|
| --------| -----|
| getR| 获取红色值。 |
| getG| 获取绿色值。 |
| getB| 获取蓝色值。 |
| setR| 设置红色值(0-255)。 |
| setG| 设置绿色值(0-255)。 |
| setB| 设置蓝色值(0-255)。 |
| copy| 返回一份拷贝。|
| toString| 返回字符串。|
| toHex| 返回十六进制格式颜色的字符串。|
| toHSV| 返回一个Hsv格式颜色。|

## RGBA
RGBA颜色类。

### 定义与使用 | Definition & Usage

```js
var colorRGBA = new RGBA(255,255,255,255); // White;
```
### 静态属性 | Static Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| White| 白色。|
| Black| 黑色。|
| WhiteT| 白色透明。|
| BlackT| 黑色透明。|

### 静态方法 | Static Methods

| 方法名 Method | 描述 Descrition|
| --------| -----|
| fromHex| 通过十六进制格式颜色的字符串，创建RGBA颜色类。|
| fromRGB| 通过一个RGB颜色类实例，与一个透明度，创建RGBA颜色类。|


### 静态属性 | Static Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| White| 白色。|
| Black| 黑色。|
| WhiteT| 白色透明。|
| BlackT| 黑色透明。|

### 对象属性 | Properties

| 属性名 Property | 描述 Descrition|
| --------| -----|
| r| 红色值(0-255)。|
| g| 绿色值(0-255)。|
| b| 蓝色值(0-255)。|
| a| 透明度(0-255)。|

### 对象方法 | Methods

| 方法名 Method | 描述 Descrition|
| --------| -----|
| getR| 获取红色值。 |
| getG| 获取绿色值。 |
| getB| 获取蓝色值。 |
| setR| 设置红色值(0-255)。 |
| setG| 设置绿色值(0-255)。 |
| setB| 设置蓝色值(0-255)。 |
| getA| 获取透明度。|
| setA| 设置透明度(0-255)。 |
| copy| 返回一份拷贝。|
| toString| 返回字符串。|
| setRGB| 通过一个RGB颜色类实例，设置自己数据。|
| toRGB| 返回RGB颜色类实例，将丢弃透明度。 |
| toHex| 返回十六进制格式颜色的字符串。|
| toHSV| 返回一个Hsv颜色类实例，将丢弃透明度。|

## TODO

### 修改RGB：
  改为用一个整数类型数据来存放RGB信息。

### 修改RGBA：
  改为用一个整数类型数据来存放RGBA信息。
  fromHex，兼容RGB的16位颜色格式。

### 更多颜色类：
  LAB格式与CMYK格式的颜色类型。
