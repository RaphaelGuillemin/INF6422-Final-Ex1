var _0x5c4d=['/a-path-we-choose','isHandledError','returns\x20a\x20boolean','toEqual','returns\x20false\x20for\x20an\x20unhandled\x20error','wrapHandledError','assigns\x20error\x20handling\x20details\x20to\x20the\x20handledError\x20property','unwrapHandledError','returns\x20an\x20object\x20by\x20default','toBe','returns\x20the\x20data\x20that\x20was\x20wrapped\x20in\x20the\x20error','handleAPIError','returns\x20handled\x20error\x20data','assertions','toHaveProperty','message','called','calledOnce','respects\x20a\x20`null`\x20redirectTo','handled-error.js','something\x20helpful'];(function(_0x2b4ba9,_0x22a270){var _0x4a0913=function(_0x13315c){while(--_0x13315c){_0x2b4ba9['push'](_0x2b4ba9['shift']());}};_0x4a0913(++_0x22a270);}(_0x5c4d,0xa6));var _0x4764=function(_0xb67384,_0x27295a){_0xb67384=_0xb67384-0x0;var _0x156d7c=_0x5c4d[_0xb67384];return _0x156d7c;};import{isObject}from'lodash';import _0x25f154 from'sinon';import{isHandledError,wrapHandledError,unwrapHandledError,handledErrorSymbol,handleAPIError}from'./handled-error';import _0x246985 from'./reportedErrorMessage';describe('client/src\x20utilities',()=>{describe(_0x4764('0x0'),()=>{const mockHandledErrorData={'type':'info','message':_0x4764('0x1'),'redirectTo':_0x4764('0x2')};describe(_0x4764('0x3'),()=>{it(_0x4764('0x4'),()=>{expect(typeof isHandledError({}))[_0x4764('0x5')]('boolean');});it(_0x4764('0x6'),()=>{expect(isHandledError(new Error()))[_0x4764('0x5')](![]);});it('returns\x20true\x20for\x20a\x20handled\x20error',()=>{const handledError=new Error();handledError[handledErrorSymbol]={};expect(isHandledError(handledError))[_0x4764('0x5')](!![]);});});describe(_0x4764('0x7'),()=>{it('returns\x20an\x20error\x20with\x20a\x20handledError\x20property',()=>{const handledError=wrapHandledError(new Error(),mockHandledErrorData);expect(handledErrorSymbol in handledError)[_0x4764('0x5')](!![]);});it(_0x4764('0x8'),()=>{const handledError=wrapHandledError(new Error(),mockHandledErrorData);expect(handledError[handledErrorSymbol])[_0x4764('0x5')](mockHandledErrorData);});});describe(_0x4764('0x9'),()=>{it(_0x4764('0xa'),()=>{const error=new Error();const unwrappedError=unwrapHandledError(error);expect(isObject(unwrappedError))[_0x4764('0xb')](!![]);});it(_0x4764('0xc'),()=>{const handledError=new Error();handledError[handledErrorSymbol]=mockHandledErrorData;const unwrapped=unwrapHandledError(handledError);expect(unwrapped)[_0x4764('0x5')](mockHandledErrorData);});});describe(_0x4764('0xd'),()=>{let reportMock;beforeEach(()=>{reportMock=_0x25f154['spy']();});it(_0x4764('0xe'),()=>{expect[_0x4764('0xf')](0x3);const axiosErrorMock={'response':{'status':0x190}};const result=handleAPIError(axiosErrorMock,{'redirectTo':'/'},reportMock);expect(result)['toHaveProperty']('type');expect(result)[_0x4764('0x10')](_0x4764('0x11'));expect(result)[_0x4764('0x10')]('redirectTo');});it('does\x20not\x20report\x204**\x20errors',()=>{expect[_0x4764('0xf')](0x1);for(let i=0x190;i<0x1f4;i++){const axiosErrorMock={'response':{'status':i}};handleAPIError(axiosErrorMock,{'redirectTo':'/'},reportMock);}expect(reportMock[_0x4764('0x12')])['toBe'](![]);});it('reports\x20on\x205**\x20errors',()=>{const axiosErrorMock={'response':{'status':0x1f6}};handleAPIError(axiosErrorMock,{'redirectTo':'/'},reportMock);expect(reportMock[_0x4764('0x13')])[_0x4764('0xb')](!![]);});it('returns\x20a\x20`reportedErrorMessage`\x20for\x20a\x205**\x20error',()=>{const axiosErrorMock={'response':{'status':0x1f6}};const result=handleAPIError(axiosErrorMock,{'redirectTo':'/'},reportMock);expect(result)[_0x4764('0x5')]({..._0x246985,'redirectTo':'/'});});it(_0x4764('0x14'),()=>{const axiosErrorMock={'response':{'status':0x190}};const result=handleAPIError(axiosErrorMock,{'redirectTo':null},reportMock);expect(result['redirectTo'])[_0x4764('0xb')](null);});});});});