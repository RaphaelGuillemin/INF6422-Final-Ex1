var _0x2721=['length','allocUnsafe','write','base64','start','base64Write','end','assert','../common.js','abcd','repeat','match'];(function(_0x39990d,_0x22cb69){var _0x50620d=function(_0x1859d5){while(--_0x1859d5){_0x39990d['push'](_0x39990d['shift']());}};_0x50620d(++_0x22cb69);}(_0x2721,0x8b));var _0x5524=function(_0x5cc1e1,_0x2157f6){_0x5cc1e1=_0x5cc1e1-0x0;var _0x46ee12=_0x2721[_0x5cc1e1];return _0x46ee12;};'use strict';const assert=require(_0x5524('0x0'));const common=require(_0x5524('0x1'));const bench=common['createBenchmark'](main,{'n':[0x20],'size':[0x8<<0x14]});function main({n,size}){const _0x4a83be=_0x5524('0x2')[_0x5524('0x3')](size);_0x4a83be[_0x5524('0x4')](/./);assert['strictEqual'](_0x4a83be[_0x5524('0x5')]%0x4,0x0);const _0x3e7024=Buffer[_0x5524('0x6')](_0x4a83be['length']/0x4*0x3);_0x3e7024[_0x5524('0x7')](_0x4a83be,0x0,_0x4a83be[_0x5524('0x5')],_0x5524('0x8'));bench[_0x5524('0x9')]();for(var _0x36b186=0x0;_0x36b186<n;_0x36b186+=0x1)_0x3e7024[_0x5524('0xa')](_0x4a83be,0x0,_0x4a83be[_0x5524('0x5')]);bench[_0x5524('0xb')](n);}