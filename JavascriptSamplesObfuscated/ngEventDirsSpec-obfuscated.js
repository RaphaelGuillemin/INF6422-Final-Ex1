var _0x3434=['<button\x20ng-click=\x22click()\x22>Click</button>','errors','should\x20not\x20stop\x20execution\x20if\x20the\x20event\x20is\x20triggered\x20in\x20a\x20watch\x20expression\x20function','event\x20directives','ngSubmit','should\x20get\x20called\x20on\x20form\x20submit','<input\x20type=\x22submit\x22\x20/>','$digest','appendChild','preventDefault','submitted','toBeUndefined','children','toEqual','should\x20expose\x20event\x20on\x20form\x20submit','formSubmission','formSubmitted','foo','document','body','focus','$apply','triggerHandler','toHaveBeenCalledOnce','should\x20call\x20the\x20listener\x20with\x20non\x20isolate\x20scopes','should\x20call\x20the\x20listener\x20with\x20isolate\x20scopes','$new','should\x20call\x20the\x20listener\x20synchronously\x20inside\x20of\x20$apply\x20if\x20outside\x20of\x20$apply','<input\x20type=\x22text\x22\x20ng-focus=\x22focus()\x22\x20ng-model=\x22value\x22>','createSpy','and','callFake','value','newValue','val','toBe','DOM\x20event\x20object','should\x20allow\x20access\x20to\x20the\x20$event\x20object','<button\x20ng-click=\x22e\x20=\x20$event\x22>BTN</button>','target','blur','call\x20the\x20listener\x20asynchronously\x20during\x20$apply','<input\x20type=\x22text\x22\x20ng-blur=\x22blur()\x22>','not','toHaveBeenCalled','<input\x20type=\x22text\x22\x20ng-blur=\x22blur()\x22\x20ng-model=\x22value\x22>','should\x20call\x20the\x20listener\x20synchronously\x20if\x20the\x20event\x20is\x20triggered\x20inside\x20of\x20a\x20digest','<button\x20type=\x22button\x22\x20ng-click=\x22click()\x22>Button</button>','$watch','click','should\x20call\x20the\x20listener\x20synchronously\x20if\x20the\x20event\x20is\x20triggered\x20outside\x20of\x20a\x20digest','throwing\x20errors\x20in\x20event\x20handlers','mode','log','assertEmpty','listener\x20error','done','logs','reset','should\x20not\x20stop\x20execution\x20if\x20the\x20event\x20is\x20triggered\x20inside\x20a\x20digest'];(function(_0x2ba76c,_0x502130){var _0x48e57e=function(_0x2f9321){while(--_0x2f9321){_0x2ba76c['push'](_0x2ba76c['shift']());}};_0x48e57e(++_0x502130);}(_0x3434,0x1e3));var _0x2195=function(_0x27fe7a,_0x2146cf){_0x27fe7a=_0x27fe7a-0x0;var _0x4eb8cd=_0x3434[_0x27fe7a];return _0x4eb8cd;};'use strict';describe(_0x2195('0x0'),function(){var _0x5572a2;afterEach(function(){dealoc(_0x5572a2);});describe(_0x2195('0x1'),function(){it(_0x2195('0x2'),inject(function(_0x12790f,_0x35c757){_0x5572a2=_0x35c757('<form\x20action=\x22/foo\x22\x20ng-submit=\x22submitted\x20=\x20true\x22>'+_0x2195('0x3')+'</form>')(_0x12790f);_0x12790f[_0x2195('0x4')]();window['document']['body'][_0x2195('0x5')](_0x5572a2[0x0]);_0x5572a2['on']('submit',function(_0x5d687f){_0x5d687f[_0x2195('0x6')]();});expect(_0x12790f[_0x2195('0x7')])[_0x2195('0x8')]();browserTrigger(_0x5572a2[_0x2195('0x9')]()[0x0]);expect(_0x12790f[_0x2195('0x7')])[_0x2195('0xa')](!![]);}));it(_0x2195('0xb'),inject(function(_0x4593ac,_0x381004){_0x4593ac[_0x2195('0xc')]=function(_0x40c1ca){if(_0x40c1ca){_0x4593ac[_0x2195('0xd')]=_0x2195('0xe');}};_0x5572a2=_0x381004('<form\x20action=\x22/foo\x22\x20ng-submit=\x22formSubmission($event)\x22>'+_0x2195('0x3')+'</form>')(_0x4593ac);_0x4593ac[_0x2195('0x4')]();window[_0x2195('0xf')][_0x2195('0x10')][_0x2195('0x5')](_0x5572a2[0x0]);_0x5572a2['on']('submit',function(_0x2d5537){_0x2d5537[_0x2195('0x6')]();});expect(_0x4593ac[_0x2195('0xd')])[_0x2195('0x8')]();browserTrigger(_0x5572a2[_0x2195('0x9')]()[0x0]);expect(_0x4593ac[_0x2195('0xd')])[_0x2195('0xa')](_0x2195('0xe'));}));});describe(_0x2195('0x11'),function(){describe('call\x20the\x20listener\x20asynchronously\x20during\x20$apply',function(){function _0x55d919(_0x34adcf){inject(function(_0x33871b){_0x5572a2=_0x33871b('<input\x20type=\x22text\x22\x20ng-focus=\x22focus()\x22>')(_0x34adcf);_0x34adcf['focus']=jasmine['createSpy'](_0x2195('0x11'));_0x34adcf[_0x2195('0x12')](function(){_0x5572a2[_0x2195('0x13')](_0x2195('0x11'));expect(_0x34adcf['focus'])['not']['toHaveBeenCalled']();});expect(_0x34adcf[_0x2195('0x11')])[_0x2195('0x14')]();});}it(_0x2195('0x15'),inject(function(_0x37da38){_0x55d919(_0x37da38['$new']());}));it(_0x2195('0x16'),inject(function(_0x546756){_0x55d919(_0x546756[_0x2195('0x17')](!![]));}));});it(_0x2195('0x18'),inject(function(_0x3bda6e,_0x3c2d84){_0x5572a2=_0x3c2d84(_0x2195('0x19'))(_0x3bda6e);_0x3bda6e[_0x2195('0x11')]=jasmine[_0x2195('0x1a')](_0x2195('0x11'))[_0x2195('0x1b')][_0x2195('0x1c')](function(){_0x3bda6e[_0x2195('0x1d')]=_0x2195('0x1e');});_0x5572a2['triggerHandler'](_0x2195('0x11'));expect(_0x3bda6e[_0x2195('0x11')])[_0x2195('0x14')]();expect(_0x5572a2[_0x2195('0x1f')]())[_0x2195('0x20')](_0x2195('0x1e'));}));});describe(_0x2195('0x21'),function(){it(_0x2195('0x22'),inject(function(_0x571a05,_0x442926){var _0x42f89e=_0x571a05['$new']();_0x5572a2=_0x442926(_0x2195('0x23'))(_0x42f89e);_0x5572a2[_0x2195('0x13')]('click');expect(_0x42f89e['e'][_0x2195('0x24')])['toBe'](_0x5572a2[0x0]);}));});describe(_0x2195('0x25'),function(){describe(_0x2195('0x26'),function(){function _0x206b0d(_0x2ccc8f){inject(function(_0x28b5ad){_0x5572a2=_0x28b5ad(_0x2195('0x27'))(_0x2ccc8f);_0x2ccc8f[_0x2195('0x25')]=jasmine[_0x2195('0x1a')](_0x2195('0x25'));_0x2ccc8f[_0x2195('0x12')](function(){_0x5572a2['triggerHandler']('blur');expect(_0x2ccc8f[_0x2195('0x25')])[_0x2195('0x28')][_0x2195('0x29')]();});expect(_0x2ccc8f['blur'])[_0x2195('0x14')]();});}it(_0x2195('0x15'),inject(function(_0x42bfc1){_0x206b0d(_0x42bfc1[_0x2195('0x17')]());}));it(_0x2195('0x16'),inject(function(_0x22be04){_0x206b0d(_0x22be04[_0x2195('0x17')](!![]));}));});it(_0x2195('0x18'),inject(function(_0x1a7b98,_0x25aace){_0x5572a2=_0x25aace(_0x2195('0x2a'))(_0x1a7b98);_0x1a7b98[_0x2195('0x25')]=jasmine[_0x2195('0x1a')](_0x2195('0x25'))[_0x2195('0x1b')]['callFake'](function(){_0x1a7b98[_0x2195('0x1d')]=_0x2195('0x1e');});_0x5572a2['triggerHandler'](_0x2195('0x25'));expect(_0x1a7b98[_0x2195('0x25')])['toHaveBeenCalledOnce']();expect(_0x5572a2[_0x2195('0x1f')]())[_0x2195('0x20')](_0x2195('0x1e'));}));});it(_0x2195('0x2b'),inject(function(_0x20a79c,_0x594a56){var _0x3b1fab;_0x5572a2=_0x594a56(_0x2195('0x2c'))(_0x20a79c);_0x20a79c[_0x2195('0x2d')](_0x2195('0x1d'),function(_0x3b3943){_0x3b1fab=_0x3b3943;});_0x20a79c['click']=jasmine[_0x2195('0x1a')](_0x2195('0x2e'))[_0x2195('0x1b')][_0x2195('0x1c')](function(){_0x20a79c['value']=_0x2195('0x1e');});_0x20a79c[_0x2195('0x12')](function(){_0x5572a2[_0x2195('0x13')]('click');});expect(_0x20a79c[_0x2195('0x2e')])['toHaveBeenCalledOnce']();expect(_0x3b1fab)[_0x2195('0xa')]('newValue');}));it(_0x2195('0x2f'),inject(function(_0x490964,_0x49be3b){var _0x480cd7;_0x5572a2=_0x49be3b('<button\x20type=\x22button\x22\x20ng-click=\x22click()\x22>Button</button>')(_0x490964);_0x490964[_0x2195('0x2d')]('value',function(_0x5ee6ee){_0x480cd7=_0x5ee6ee;});_0x490964[_0x2195('0x2e')]=jasmine[_0x2195('0x1a')](_0x2195('0x2e'))[_0x2195('0x1b')][_0x2195('0x1c')](function(){_0x490964[_0x2195('0x1d')]=_0x2195('0x1e');});_0x5572a2[_0x2195('0x13')](_0x2195('0x2e'));expect(_0x490964['click'])[_0x2195('0x14')]();expect(_0x480cd7)['toEqual']('newValue');}));describe(_0x2195('0x30'),function(){it('should\x20not\x20stop\x20execution\x20if\x20the\x20event\x20is\x20triggered\x20outside\x20a\x20digest',function(){module(function(_0x21e59c){_0x21e59c[_0x2195('0x31')](_0x2195('0x32'));});inject(function(_0x1512f3,_0x2251ca,_0x1d50dc,_0x286e23){_0x5572a2=_0x2251ca('<button\x20ng-click=\x22click()\x22>Click</button>')(_0x1512f3);expect(_0x286e23[_0x2195('0x33')]());_0x1512f3[_0x2195('0x2e')]=function(){throw new Error(_0x2195('0x34'));};_0x1512f3['do']=function(){_0x5572a2[_0x2195('0x13')](_0x2195('0x2e'));_0x286e23['log'](_0x2195('0x35'));};_0x1512f3['do']();expect(_0x1d50dc['errors'])[_0x2195('0xa')]([Error(_0x2195('0x34'))]);expect(_0x286e23['log'][_0x2195('0x36')])[_0x2195('0xa')]([['done']]);_0x286e23[_0x2195('0x37')]();});});it(_0x2195('0x38'),function(){module(function(_0x274200){_0x274200[_0x2195('0x31')](_0x2195('0x32'));});inject(function(_0x3fe436,_0x1e9c72,_0x107120,_0x3ad026){_0x5572a2=_0x1e9c72(_0x2195('0x39'))(_0x3fe436);expect(_0x3ad026[_0x2195('0x33')]());_0x3fe436['click']=function(){throw new Error(_0x2195('0x34'));};_0x3fe436['do']=function(){_0x5572a2[_0x2195('0x13')](_0x2195('0x2e'));_0x3ad026['log'](_0x2195('0x35'));};_0x3fe436[_0x2195('0x12')](function(){_0x3fe436['do']();});expect(_0x107120[_0x2195('0x3a')])['toEqual']([Error('listener\x20error')]);expect(_0x3ad026['log']['logs'])[_0x2195('0xa')]([[_0x2195('0x35')]]);_0x3ad026['reset']();});});it(_0x2195('0x3b'),function(){module(function(_0x17cf92){_0x17cf92['mode'](_0x2195('0x32'));});inject(function(_0x6ed879,_0x5ef70b,_0x8bb6c8,_0x4a1f47){_0x5572a2=_0x5ef70b(_0x2195('0x39'))(_0x6ed879);_0x6ed879['click']=function(){throw new Error(_0x2195('0x34'));};_0x6ed879[_0x2195('0x2d')](function(){_0x5572a2[_0x2195('0x13')](_0x2195('0x2e'));_0x4a1f47[_0x2195('0x32')](_0x2195('0x35'));});_0x6ed879[_0x2195('0x4')]();expect(_0x8bb6c8[_0x2195('0x3a')])['toEqual']([Error(_0x2195('0x34')),Error(_0x2195('0x34'))]);expect(_0x4a1f47[_0x2195('0x32')][_0x2195('0x36')])[_0x2195('0xa')]([[_0x2195('0x35')],[_0x2195('0x35')]]);_0x4a1f47[_0x2195('0x37')]();});});});});