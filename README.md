# Distpicker

项目来源于：https://github.com/fengyuanchen/distpicker

但是由于其地址是死的，需要经常更新地址重新编译，因此重新 fork 并新增了 ajaxUrl 的配置，用于可以通过 ajax 读取后台数据库的地址，用于渲染。

> A simple jQuery plugin for picking provinces, cities and districts of China.

- [Website](https://fengyuanchen.github.io/distpicker)

> 请注意以下市/县并未设置下一级的区/乡/镇：济源市、潜江市、神农架林区、天门市、仙桃市、东莞市、中山市、东沙群岛、白沙黎族自治县、保亭黎族苗族自治县、昌江黎族自治县、澄迈县、儋州市、定安县、东方市、乐东黎族自治县、临高县、陵水黎族自治县、琼海市、琼中黎族苗族自治县、屯昌县、万宁市、文昌市、五指山市、嘉峪关市、阿拉尔市、北屯市、可克达拉市、昆玉市、石河子市、双河市、铁门关市、图木舒克市、五家渠市。

## Table of contents

- [Main](#main)
- [Getting started](#getting-started)
- [Options](#options)
- [Methods](#methods)
- [No conflict](#no-conflict)
- [Browser support](#browser-support)
- [License](#license)

## Main

```text
dist/
├── distpicker.js        (UMD)
├── distpicker.min.js    (UMD, compressed)
├── distpicker.common.js (CommonJS, default)
└── distpicker.esm.js    (ES Module)
```

## Getting started

### Install

```shell
npm install distpicker
```

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<script src="/path/to/distpicker.js"></script>
```

Create HTML elements:

```html
<div><!-- container -->
  <select></select><!-- province -->
  <select></select><!-- city -->
  <select></select><!-- district -->
</div>
```

### Usage

#### Initialize with `data-toggle="distpicker"` attribute

Basic

```html
<div data-toggle="distpicker">
  <select></select>
  <select></select>
  <select></select>
</div>
```

Custom placeholders

```html
<div data-toggle="distpicker">
  <select data-province="---- 选择省 ----"></select>
  <select data-city="---- 选择市 ----"></select>
  <select data-district="---- 选择区 ----"></select>
</div>
```

Custom districts

```html
<div data-toggle="distpicker">
  <select data-province="浙江省"></select>
  <select data-city="杭州市"></select>
  <select data-district="西湖区"></select>
</div>
```

#### Initialize with `$.fn.distpicker` method

Basic

```js
$('#target').distpicker();
```

Custom placeholders

```js
$('#target').distpicker({
  province: '---- 所在省 ----',
  city: '---- 所在市 ----',
  district: '---- 所在区 ----'
});
```

Custom districts

```js
$('#target').distpicker({
  province: '浙江省',
  city: '杭州市',
  district: '西湖区'
});
```

支持 自定义 Url 读取配置

```js
$('#target').distpicker({
  province: '浙江省',
  city: '杭州市',
  district: '西湖区',
  ajaxUrl: 'http://localhost:8801/commons/dist',
});
```
要求后台返回 Map 数据，例如：

```json
{
    110000: '北京市',
    120000: '天津市',
    130000: '河北省',
    140000: '山西省',
    150000: '内蒙古自治区',
    210000: '辽宁省',
    220000: '吉林省',
    230000: '黑龙江省',
    310000: '上海市',
    320000: '江苏省',
    330000: '浙江省',
    340000: '安徽省',
    350000: '福建省',
    360000: '江西省',
    370000: '山东省',
    410000: '河南省',
    420000: '湖北省',
    430000: '湖南省',
    440000: '广东省',
    450000: '广西壮族自治区',
    460000: '海南省',
    500000: '重庆市',
    510000: '四川省',
    520000: '贵州省',
    530000: '云南省',
    540000: '西藏自治区',
    610000: '陕西省',
    620000: '甘肃省',
    630000: '青海省',
    640000: '宁夏回族自治区',
    650000: '新疆维吾尔自治区',
    710000: '台湾省',
    810000: '香港特别行政区',
    820000: '澳门特别行政区',
}
```


[⬆ back to top](#table-of-contents)

## Options

- Change the default options with `$().distpicker(options)`.
- Change the global default options with `$.fn.distpicker.setDefaults(options)`.

Also supports to set the options by `data-*` attributes:

```html
<div data-toggle="distpicker" data-autoselect="3" data-province="浙江省">...</div>
```

### autoselect

- Type: `Number`
- Options:
  - `0`: Disable autoselect.
  - `1`: Autoselect province only.
  - `2`: Autoselect province and city only.
  - `3`: Autoselect all (province, city and district).
- Default: `0`

Selects the districts automatically.

### placeholder

- Type: `Boolean`
- Default: `true`

Show placeholder (with an `<option>` element).

### valueType

- Type: `String`
- Options:
  - `'name'`: administrative division name.
  - `'code'`: administrative division code.
- Default: `'name'`

Defines the value type of the `<select>` element.

Note that this option in `data-*` attribute should be `data-value-type`:

```html
<div data-toggle="distpicker" data-value-type="code">...</div>
```

### province

- Type: `String`
- Default: `—— 省 ——`

Defines the initial value of province `<select>`. If it is a valid province, it will be selected. If not, it will be used as a placeholder.

### city

- Type: `String`
- Default: `—— 市 ——`

Defines the initial value of city `<select>`. If it is a valid city under the selected province, it will be selected. If not, it will be used as a placeholder.

### district

- Type: `String`
- Default: `—— 区 ——`

Defines the initial value of district `<select>`. If it is a valid district under the selected city, it will be selected. If not, it will be used as a placeholder.

[⬆ back to top](#table-of-contents)

## Methods

### getDistricts([districtCode])

- **districtCode** (optional):
  - Type: `Number`
  - The district code of target country, province or city.
  - If not present, will return all the districts.

- (return value):
  - Type: `Object`

Get districts data.

```js
$().distpicker('getDistricts'); // 中国
$().distpicker('getDistricts', 330000); // 浙江省
$().distpicker('getDistricts', 330100); // 杭州市
```

### reset([deep])

- **deep** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Reset the selects to default states (Undo selected).

Reset the selects to the initial states (Undo changed).

```js
$().distpicker('reset');
$().distpicker('reset', true);
```

### destroy()

Destroy the distpicker instance, but keep the selected districts.

If you want to remove the selected districts, you can call `reset` method first and then call this method.

[⬆ back to top](#table-of-contents)

## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.distpicker.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="distpicker.js"></script>
<script>
  $.fn.distpicker.noConflict();
  // Code that uses other plugin's "$().distpicker" can follow here.
</script>
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

As a jQuery plugin, you also need to see the [jQuery Browser Support](https://jquery.com/browser-support/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)

[⬆ back to top](#table-of-contents)
