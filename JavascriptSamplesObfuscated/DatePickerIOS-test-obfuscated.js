var _0x3871=['reloadReactNative','<DatePickerIOS>','<DatePickerIOS>\x20Select\x20dates\x20and\x20times\x20using\x20the\x20native\x20UIDatePicker.','Should\x20change\x20indicator\x20with\x20datetime\x20picker','Date\x20and\x20time\x20picker','date-and-time','type','date-indicator','time-indicator','toBeVisible','Dec\x204','setColumnToValue','12/4/2005','toHaveText','4:10\x20AM','Should\x20change\x20indicator\x20with\x20date-only\x20picker','Date\x20only\x20picker','date-only','withAncestor','2006','11/3/2006','../e2e-helpers','DatePickerIOS'];(function(_0x79c0b8,_0x5ea762){var _0x1f1bb2=function(_0x3adfaf){while(--_0x3adfaf){_0x79c0b8['push'](_0x79c0b8['shift']());}};_0x1f1bb2(++_0x5ea762);}(_0x3871,0x140));var _0x4d20=function(_0x77c8b2,_0x779dcd){_0x77c8b2=_0x77c8b2-0x0;var _0x509a54=_0x3871[_0x77c8b2];return _0x509a54;};const {openComponentWithLabel,openExampleWithTitle}=require(_0x4d20('0x0'));describe(_0x4d20('0x1'),()=>{beforeAll(async()=>{await device[_0x4d20('0x2')]();await openComponentWithLabel(_0x4d20('0x3'),_0x4d20('0x4'));});it(_0x4d20('0x5'),async()=>{await openExampleWithTitle(_0x4d20('0x6'));const _0x4332ea=_0x4d20('0x7');const _0x259cef=await element(by[_0x4d20('0x8')]('UIPickerView')['withAncestor'](by['id'](_0x4332ea)));const _0x1a8482=await element(by['id'](_0x4d20('0x9')));const _0x41673e=await element(by['id'](_0x4d20('0xa')));await expect(_0x259cef)[_0x4d20('0xb')]();await expect(_0x1a8482)[_0x4d20('0xb')]();await expect(_0x41673e)[_0x4d20('0xb')]();await _0x259cef['setColumnToValue'](0x0,_0x4d20('0xc'));await _0x259cef[_0x4d20('0xd')](0x1,'4');await _0x259cef[_0x4d20('0xd')](0x2,'10');await _0x259cef[_0x4d20('0xd')](0x3,'AM');await expect(_0x1a8482)['toHaveText'](_0x4d20('0xe'));await expect(_0x41673e)[_0x4d20('0xf')](_0x4d20('0x10'));});it(_0x4d20('0x11'),async()=>{await openExampleWithTitle(_0x4d20('0x12'));const _0xd4f9e6=_0x4d20('0x13');const _0x33ac59=await element(by[_0x4d20('0x8')]('UIPickerView')[_0x4d20('0x14')](by['id'](_0xd4f9e6)));const _0x134c0b=await element(by['id'](_0x4d20('0x9')));await expect(_0x33ac59)[_0x4d20('0xb')]();await expect(_0x134c0b)[_0x4d20('0xb')]();await _0x33ac59['setColumnToValue'](0x0,'November');await _0x33ac59[_0x4d20('0xd')](0x1,'3');await _0x33ac59['setColumnToValue'](0x2,_0x4d20('0x15'));await expect(_0x134c0b)[_0x4d20('0xf')](_0x4d20('0x16'));});});