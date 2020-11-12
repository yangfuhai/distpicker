// eslint-disable-next-line no-undef
$(() => {
  // 'use strict';

  // eslint-disable-next-line no-undef
  const $distpicker = $('#distpicker');

  $distpicker.distpicker({
    province: '福建省',
    city: '厦门市',
    district: '思明区',
    // ajaxUrl: 'http://localhost:8801/commons/dist',
  });

  $('#reset').click(() => {
    $distpicker.distpicker('reset');
  });

  $('#reset-deep').click(() => {
    $distpicker.distpicker('reset', true);
  });

  $('#destroy').click(() => {
    $distpicker.distpicker('destroy');
  });

  $('#distpicker1').distpicker();

  $('#distpicker2').distpicker({
    province: '---- 所在省 ----',
    city: '---- 所在市 ----',
    district: '---- 所在区 ----',
  });

  // eslint-disable-next-line no-undef
  $('#distpicker3').distpicker({
    province: '浙江省',
    city: '杭州市',
    district: '西湖区',
  });

  // eslint-disable-next-line no-undef
  $('[data-toggle="tooltip"]').tooltip();

  // eslint-disable-next-line no-undef
  hljs.initHighlightingOnLoad();
});
