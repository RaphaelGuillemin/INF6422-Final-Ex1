var _0x1341=['should\x20set\x20html','html','$digest','toEqual','<div>hello</div>','should\x20reset\x20html\x20when\x20value\x20is\x20null\x20or\x20undefined','<div\x20ng-bind-html=\x22html\x22></div>','forEach','some\x20val','ngBindHtml','ngSanitize'];(function(_0x360471,_0x1b6f48){var _0xff2d3c=function(_0x1d39f0){while(--_0x1d39f0){_0x360471['push'](_0x360471['shift']());}};_0xff2d3c(++_0x1b6f48);}(_0x1341,0x1b6));var _0x3bd3=function(_0x38d851,_0x48b902){_0x38d851=_0x38d851-0x0;var _0x2b9e92=_0x1341[_0x38d851];return _0x2b9e92;};'use strict';describe(_0x3bd3('0x0'),function(){beforeEach(module(_0x3bd3('0x1')));it(_0x3bd3('0x2'),inject(function(_0x41ab3b,_0x231a36){var _0x26f2eb=_0x231a36('<div\x20ng-bind-html=\x22html\x22></div>')(_0x41ab3b);_0x41ab3b[_0x3bd3('0x3')]='<div\x20unknown>hello</div>';_0x41ab3b[_0x3bd3('0x4')]();expect(lowercase(_0x26f2eb[_0x3bd3('0x3')]()))[_0x3bd3('0x5')](_0x3bd3('0x6'));}));it(_0x3bd3('0x7'),inject(function(_0x20a5a6,_0x48fc11){var _0x1f728e=_0x20a5a6(_0x3bd3('0x8'))(_0x48fc11);angular[_0x3bd3('0x9')]([null,undefined,''],function(_0x292176){_0x48fc11['html']=_0x3bd3('0xa');_0x48fc11[_0x3bd3('0x4')]();expect(lowercase(_0x1f728e[_0x3bd3('0x3')]()))['toEqual'](_0x3bd3('0xa'));_0x48fc11[_0x3bd3('0x3')]=_0x292176;_0x48fc11[_0x3bd3('0x4')]();expect(lowercase(_0x1f728e[_0x3bd3('0x3')]()))['toEqual']('');});}));});