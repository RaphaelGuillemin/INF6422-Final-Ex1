var _0x4437=['keys','deepEqual_Array','notDeepEqual_Array','deepEqual_Set','notDeepEqual_Set','start','end','push','pop','../common.js','assert','createBenchmark'];(function(_0x17c4c7,_0x57433c){var _0x57231b=function(_0x2aa89d){while(--_0x2aa89d){_0x17c4c7['push'](_0x17c4c7['shift']());}};_0x57231b(++_0x57433c);}(_0x4437,0x165));var _0x4e29=function(_0x507cf2,_0x174722){_0x507cf2=_0x507cf2-0x0;var _0x486c20=_0x4437[_0x507cf2];return _0x486c20;};'use strict';const common=require(_0x4e29('0x0'));const {deepEqual,deepStrictEqual,notDeepEqual,notDeepStrictEqual}=require(_0x4e29('0x1'));const primValues={'string':'a','number':0x1,'object':{0:'a'},'array':[0x1,0x2,0x3]};const bench=common[_0x4e29('0x2')](main,{'primitive':Object[_0x4e29('0x3')](primValues),'n':[0x19],'len':[0x4e20],'strict':[0x0,0x1],'method':[_0x4e29('0x4'),_0x4e29('0x5'),_0x4e29('0x6'),_0x4e29('0x7')]});function run(_0x55955e,_0x66621d,_0x1f3a4d,_0x30e0f5){bench[_0x4e29('0x8')]();for(var _0x12fd5f=0x0;_0x12fd5f<_0x66621d;++_0x12fd5f){_0x55955e(_0x1f3a4d,_0x30e0f5);}bench[_0x4e29('0x9')](_0x66621d);}function main({n,len,primitive,method,strict}){const _0x155eb5=primValues[primitive];const _0xed134d=[];const _0x134917=[];const _0x1726a3=[];for(var _0x4df556=0x0;_0x4df556<len;_0x4df556++){_0xed134d[_0x4e29('0xa')](_0x155eb5);_0x134917['push'](_0x155eb5);_0x1726a3[_0x4e29('0xa')](_0x155eb5);}_0x1726a3[_0x4e29('0xb')]();_0x1726a3['push']('b');const _0x1e5e46=new Set(_0xed134d);const _0x1ae25f=new Set(_0x134917);const _0x37391d=new Set(_0x1726a3);switch(method){case'':case _0x4e29('0x4'):run(strict?deepStrictEqual:deepEqual,n,_0xed134d,_0x134917);break;case _0x4e29('0x5'):run(strict?notDeepStrictEqual:notDeepEqual,n,_0xed134d,_0x1726a3);break;case'deepEqual_Set':run(strict?deepStrictEqual:deepEqual,n,_0x1e5e46,_0x1ae25f);break;case _0x4e29('0x7'):run(strict?notDeepStrictEqual:notDeepEqual,n,_0x1e5e46,_0x37391d);break;default:throw new Error('Unsupported\x20method\x20\x22'+method+'\x22');}}