var _0x36f2=['notDeepEqual_objectOnly','notDeepEqual_mixed','parse','stringify','start','fill','deepEqual_primitiveOnly','map','str_','slice','floor','w00t','Unsupported\x20method\x20\x22','../common.js','assert','createBenchmark','deepEqual_objectOnly','notDeepEqual_primitiveOnly'];(function(_0x535dad,_0xd34153){var _0x29ca1d=function(_0x24dbcd){while(--_0x24dbcd){_0x535dad['push'](_0x535dad['shift']());}};_0x29ca1d(++_0xd34153);}(_0x36f2,0x199));var _0x2a08=function(_0x226f7a,_0x798cd7){_0x226f7a=_0x226f7a-0x0;var _0x4f5599=_0x36f2[_0x226f7a];return _0x4f5599;};'use strict';const common=require(_0x2a08('0x0'));const {deepEqual,deepStrictEqual,notDeepEqual,notDeepStrictEqual}=require(_0x2a08('0x1'));const bench=common[_0x2a08('0x2')](main,{'n':[0x1f4],'len':[0x1f4],'strict':[0x0,0x1],'method':['deepEqual_primitiveOnly',_0x2a08('0x3'),'deepEqual_mixed',_0x2a08('0x4'),_0x2a08('0x5'),_0x2a08('0x6')]});function benchmark(_0x58538f,_0x1648cc,_0x1d1873,_0x1f04c2){const _0x228d3d=new Set(_0x1d1873);const _0x55c009=JSON[_0x2a08('0x7')](JSON[_0x2a08('0x8')](_0x1f04c2?_0x1f04c2:_0x1d1873));const _0x42e820=new Set(_0x55c009);bench[_0x2a08('0x9')]();for(var _0x83130f=0x0;_0x83130f<_0x1648cc;++_0x83130f){_0x58538f(_0x228d3d,_0x42e820);}bench['end'](_0x1648cc);}function main({n,len,method,strict}){const _0x15908f=Array(len)[_0x2a08('0xa')](0x1);var _0x54a85,_0x151e29;switch(method){case'':case _0x2a08('0xb'):_0x54a85=_0x15908f[_0x2a08('0xc')]((_0xf2fefd,_0x3bb953)=>_0x2a08('0xd')+_0x3bb953);benchmark(strict?deepStrictEqual:deepEqual,n,_0x54a85);break;case _0x2a08('0x3'):_0x54a85=_0x15908f['map']((_0x26cab3,_0x43cdc7)=>['str_'+_0x43cdc7,null]);benchmark(strict?deepStrictEqual:deepEqual,n,_0x54a85);break;case'deepEqual_mixed':_0x54a85=_0x15908f[_0x2a08('0xc')]((_0x299946,_0x56418b)=>{return _0x56418b%0x2?['str_'+_0x56418b,null]:'str_'+_0x56418b;});benchmark(strict?deepStrictEqual:deepEqual,n,_0x54a85);break;case _0x2a08('0x4'):_0x54a85=_0x15908f[_0x2a08('0xc')]((_0x38691a,_0x1c3f64)=>_0x2a08('0xd')+_0x1c3f64);_0x151e29=_0x54a85[_0x2a08('0xe')](0x0);_0x151e29[Math[_0x2a08('0xf')](len/0x2)]='w00t';benchmark(strict?notDeepStrictEqual:notDeepEqual,n,_0x54a85,_0x151e29);break;case _0x2a08('0x5'):_0x54a85=_0x15908f[_0x2a08('0xc')]((_0x397f82,_0xe48672)=>[_0x2a08('0xd')+_0xe48672,null]);_0x151e29=_0x54a85[_0x2a08('0xe')](0x0);_0x151e29[Math[_0x2a08('0xf')](len/0x2)]=[_0x2a08('0x10')];benchmark(strict?notDeepStrictEqual:notDeepEqual,n,_0x54a85,_0x151e29);break;case _0x2a08('0x6'):_0x54a85=_0x15908f[_0x2a08('0xc')]((_0x137b8e,_0x1ec1f3)=>{return _0x1ec1f3%0x2?[_0x2a08('0xd')+_0x1ec1f3,null]:_0x2a08('0xd')+_0x1ec1f3;});_0x151e29=_0x54a85[_0x2a08('0xe')]();_0x151e29[0x0]=_0x2a08('0x10');benchmark(strict?notDeepStrictEqual:notDeepEqual,n,_0x54a85,_0x151e29);break;default:throw new Error(_0x2a08('0x11')+method+'\x22');}}