var _0x400c=['../common.js','createBenchmark','abcd','repeat','match','alloc','base64','start'];(function(_0x5eb054,_0xa8d3dc){var _0x448a7d=function(_0x462bd5){while(--_0x462bd5){_0x5eb054['push'](_0x5eb054['shift']());}};_0x448a7d(++_0xa8d3dc);}(_0x400c,0xb8));var _0x1517=function(_0x20ef39,_0x296105){_0x20ef39=_0x20ef39-0x0;var _0x1e59a1=_0x400c[_0x20ef39];return _0x1e59a1;};'use strict';const common=require(_0x1517('0x0'));const bench=common[_0x1517('0x1')](main,{'charsPerLine':[0x4c],'linesCount':[0x8<<0x10],'n':[0x20]});function main({charsPerLine,linesCount,n}){const _0x5c1b33=charsPerLine*linesCount/0x4*0x3;const _0x4fd4d7=_0x1517('0x2')[_0x1517('0x3')](charsPerLine/0x4)+'\x0a';const _0x2875a5=_0x4fd4d7[_0x1517('0x3')](linesCount);_0x2875a5[_0x1517('0x4')](/./);const _0x629ca2=Buffer[_0x1517('0x5')](_0x5c1b33,_0x4fd4d7,_0x1517('0x6'));bench[_0x1517('0x7')]();for(var _0x51d240=0x0;_0x51d240<n;_0x51d240++){_0x629ca2['base64Write'](_0x2875a5,0x0,_0x5c1b33);}bench['end'](n);}