var _0x31d7=['./utils','Please\x20provide\x20a\x20language','stringify','./build/curriculum-','getChallengesForLang'];(function(_0x2e921d,_0x32b5a2){var _0x1c9f28=function(_0x112554){while(--_0x112554){_0x2e921d['push'](_0x2e921d['shift']());}};_0x1c9f28(++_0x32b5a2);}(_0x31d7,0xe1));var _0xf600=function(_0x22b848,_0x518f11){_0x22b848=_0x22b848-0x0;var _0xc937fa=_0x31d7[_0x22b848];return _0xc937fa;};const invariant=require('invariant');const {supportedLangs}=require(_0xf600('0x0'));function validateLang(_0x2619e7){invariant(_0x2619e7,_0xf600('0x1'));invariant(supportedLangs['includes'](_0x2619e7),_0x2619e7+'\x20is\x20not\x20supported\x0a\x0a\x20\x20Supported\x20languages:\x20'+JSON[_0xf600('0x2')](supportedLangs,null,0x2)+'\x0a\x0a\x20\x20');}function getCurriculum(_0x11a894){validateLang(_0x11a894);const _0x13cc7c=require(_0xf600('0x3')+_0x11a894+'.json');return _0x13cc7c;}exports[_0xf600('0x4')]=getCurriculum;