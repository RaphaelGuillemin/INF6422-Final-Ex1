var _0x13ce=['replace','eep','eepStrict','includes','not','start','assert','Uint8Array','Float32Array','Float64Array','Uint8ClampedArray','notDeepEqual','deepEqual','floor'];(function(_0x1b4e9a,_0x1ad6b6){var _0x3a23a9=function(_0x1a0bd8){while(--_0x1a0bd8){_0x1b4e9a['push'](_0x1b4e9a['shift']());}};_0x3a23a9(++_0x1ad6b6);}(_0x13ce,0x84));var _0x4151=function(_0x555d1f,_0xa83749){_0x555d1f=_0x555d1f-0x0;var _0x221a59=_0x13ce[_0x555d1f];return _0x221a59;};'use strict';const common=require('../common.js');const assert=require(_0x4151('0x0'));const bench=common['createBenchmark'](main,{'type':['Int8Array',_0x4151('0x1'),_0x4151('0x2'),_0x4151('0x3'),_0x4151('0x4')],'n':[0x1f4],'strict':[0x0,0x1],'method':['deepEqual',_0x4151('0x5')],'len':[0x64,0x1388]});function main({type,n,len,method,strict}){if(!method)method=_0x4151('0x6');const _0x838bf1=global[type];const _0x4fa4ec=new _0x838bf1(len);const _0x4fa880=new _0x838bf1(len);const _0x18e3c9=new _0x838bf1(len);const _0x17cc1c=Math[_0x4151('0x7')](len/0x2);_0x18e3c9[_0x17cc1c]=0x7b;if(strict){method=method[_0x4151('0x8')](_0x4151('0x9'),_0x4151('0xa'));}const _0x32074a=assert[method];const _0x3c8c02=method[_0x4151('0xb')](_0x4151('0xc'))?_0x18e3c9:_0x4fa880;bench[_0x4151('0xd')]();for(var _0x2f7678=0x0;_0x2f7678<n;++_0x2f7678){_0x4fa4ec[0x0]=_0x2f7678;_0x3c8c02[0x0]=_0x2f7678;_0x32074a(_0x4fa4ec,_0x3c8c02);}bench['end'](n);}