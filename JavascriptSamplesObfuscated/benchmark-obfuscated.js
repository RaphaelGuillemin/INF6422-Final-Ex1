var _0x3ca2=['exit','test','benchmark\x20file\x20not\x20running\x20exactly\x20one\x20configuration\x20in\x20test:\x20','exports','assert','child_process','path','join','benchmark','run.js','length','push','--set','assign','env','inherit','pipe','ipc','stdout','setEncoding','utf8','data'];(function(_0x4e0d71,_0x4c301b){var _0x28491f=function(_0x3f1d8c){while(--_0x3f1d8c){_0x4e0d71['push'](_0x4e0d71['shift']());}};_0x28491f(++_0x4c301b);}(_0x3ca2,0xf6));var _0x5ba1=function(_0x238a70,_0x27d0a2){_0x238a70=_0x238a70-0x0;var _0x48f790=_0x3ca2[_0x238a70];return _0x48f790;};/* eslint-disable node-core/required-modules */
'use strict';const assert=require(_0x5ba1('0x0'));const fork=require(_0x5ba1('0x1'))['fork'];const path=require(_0x5ba1('0x2'));const runjs=path[_0x5ba1('0x3')](__dirname,'..','..',_0x5ba1('0x4'),_0x5ba1('0x5'));function runBenchmark(_0x2a4972,_0x12f718,_0x31d52e){const _0x5543b3=[];for(let _0x3d2c0e=0x0;_0x3d2c0e<_0x12f718[_0x5ba1('0x6')];_0x3d2c0e++){_0x5543b3[_0x5ba1('0x7')](_0x5ba1('0x8'));_0x5543b3['push'](_0x12f718[_0x3d2c0e]);}_0x5543b3[_0x5ba1('0x7')](_0x2a4972);const _0x1530b1=Object[_0x5ba1('0x9')]({},process[_0x5ba1('0xa')],_0x31d52e);const _0x53e962=fork(runjs,_0x5543b3,{'env':_0x1530b1,'stdio':[_0x5ba1('0xb'),_0x5ba1('0xc'),'inherit',_0x5ba1('0xd')]});_0x53e962[_0x5ba1('0xe')][_0x5ba1('0xf')](_0x5ba1('0x10'));let _0x45c60a='';_0x53e962[_0x5ba1('0xe')]['on'](_0x5ba1('0x11'),_0x41ae79=>{_0x45c60a+=_0x41ae79;});_0x53e962['on'](_0x5ba1('0x12'),(_0x58e728,_0x54a555)=>{assert['strictEqual'](_0x58e728,0x0);assert['strictEqual'](_0x54a555,null);assert['ok'](/^(?:\n.+?\n.+?\n)+$/[_0x5ba1('0x13')](_0x45c60a),_0x5ba1('0x14')+_0x45c60a);});}module[_0x5ba1('0x15')]=runBenchmark;