/*
脚本名称: 小小优趣
脚本功能：解锁VIP
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2023-01-29
问题反馈：QQ+55749353
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', mvhfd = '__0xf434b',  __0xf434b=['I8OYw7rCmi5+w6LDmWw=','S2kZGy7CtCE=','wqPDoVwi','wpPDlh3DrE0=','O8OWH8Ksw40=','w7fCjcKk','wqA/SA==','54uA5p6Z5Y6q776wHsOD5L+I5a+r5p675b6456mB776I6L+16K+u5pWV5oyR5oip5Lq455uL5baF5L6s','wp3DjCHDq03Cq8OYLcOVwqs7DFLCpDHCiQ==','LMKaw7dsUxJow5cvYUjDv8ONXQN9ej8nw7pbLcO2wo93w6nCrHXDsHjCpcKDXUZTZF5OwoNdbV/CrBPCo1PDp1jCucOgasOIE8KBwq3CjmfCp0kWFng=','w454w7xl','JcOIw7jCljA=','SCFYcgA=','wrrCmR3CncOC','CMOmw5JSwp0=','w4XDgWgvEg==','wpgawp/ClcOk','wobCnQ7CmsO8','w7jCpwhGw4Y=','w5jChgtlw4w=','S0nCg8KIw50=','wrsBaEbCqg==','wrLDmMKLHw==','wrXCoMOTwrXCow==','F8OQHsKIw40=','wp42wqHCpg==','w6HDgH4AGQ==','BcOpw54qIA==','w7tAw5ECeQ==','HH5PFcOz','w5jCo8KpJMKg','KXB2M8Or','U0jCnMKAw6o=','PU1YVMOn','w4dhw4fClcKn','wqrClsOOw7fCjA==','w6wUe8KkDA==','JcK0dhDDkA==','J1B9CMOk','Vzx9diw=','woDDlW7CsWY=','wrPCgsO+woHCuw==','ZMOCw4Ypw7k=','wpkIVUbDkw==','worCnMOowoTCpQ==','wrUUbQ==','w7DCisKS','woPCicOcwqfCow==','wqwlfEbCpQ==','wpnCnDvCq2Q=','w5fDukIILQ==','wrTCn8OuwrDCog==','wrTDh10=','OsOpw5MUHQ==','P1pvNsOy','cVjCncOiw7U=','E8Orw4I=','w6TDkTI=','W1PChcORTw==','QHXCj8KEw7c=','w4bCksKwQsO1','fz1nJ8Ok','XnQ5Kic=','wo0ZwqTCo8O3','d8OBw6kRw6o=','J8OQw6nCkyc=','EU1vEsOk','HMOVHg==','AcOVw5s=','wojDjT3DoVfCpQ==','w4tzw7t2wqPCkQ==','YksfGRc=','wozDv8K8CkE=','GsO6KsKhw6I=','BcKOcwzDpQ==','UEfCucKlw7E=','Lhka','eEsf','w54vw6DCrsKzwqByRVI9U1Yr','BGBtecOP','wprCrDXCscOh','w5XCqyFEw5A=','wqkkQnLDow==','w5hdeBB4','w4hCegpjRFU=','K2DCiMKPcw==','E1JxDcOywq7Dug==','woUvR0HDtw==','w5LCj8KfD8KBwrfCrw==','OXPCiMKO','fMKjwpIcaFLDpA==','NsK/QATDuMOeCycz','Z27CoMK4w7d/w7U=','fsOLw58=','wqh4wrDDih5ZBA==','w7TCtgV5w4Q=','LX3ClMKTbhbCpg==','wqTCgCHCvA==','wo/CowvCq8Oq','w75Fw7Qwag==','d0rChSjDow==','wq7CpsO5wr3Ctg==','bRxbMsOk','HGvDsDIt','wp3CqDfCsEU=','w705XsK4Kw==','VMOtw6Yww4I=','w6DCn8KZb8Oq','w7LCqg9uw5M=','wq1AwpPDnRc=','w49gRw1P','AmvDsCgRw5DDjg7Cu3nCokLCisOUWUo=','GsKLw4XDlH4gwqPCiThOE1DDgzHCoMO4FytXVMOgwqMLw6jClcOcasKfwqnCq0rCnMK3ScOiwrLDjcOWw6FRw59hQ8K2bMOiOMOrccKyGljDvRN9w4sdw7bDusKvw5I6','AsO8w6pJ','w5dgw70oUg==','w7nCvRd5w5c=','fsOzw59jwrE=','w5rClcKJEsKv','O8Oywo7Dqm8=','woHCjsO4wrjCvw==','w4/Cs2lI','w5zDszXDqhY=','wpcdYnDCnQ==','wpnCqC/ChcOv','w4ZPw5tcwoI=','w5bDt8KkEA0=','wqDCgcOTw4bCvw==','w6dkw5o7VQ==','O8KiQgXDrcOYEQ==','J8KoSATDpg==','wo3CkSvDjV7CgCnDoQnCgsKfPQLCmCPCjsKrOnsiw4Y/CkQNwqTDncK1wqTCrBLDuMO7wrkvw6HDrMKuZcKRasOeLsOjUi5Kw7BXwrTCiAvCusKlwo5Tw7bDiTvCqcKgw5/ChsKbw5csw7B7KUx/wpVPI0cOZSzCuX7DhC01w7DCocKGw5rCisKawqU8w4XDscOQw5FPwpZZw6rDm8Ogw6UDPsKXwoPCikBlf2Q4ZcKWwpAMw7PChsKmw7nDv8OWVMOpOGrCh8KjMGVZw54ZwpbCksOHw5J8w50Ld8OwcRjCqBlWLsKze1HDsMKow7wmw65KbW/CskEUw5/CgmZNfig+wprCnWc=','R8OXw51kw77Ck1xMwpDCuw==','asONw5l5w7PCqlJIwpHDr0/Dkh1ywrrCm8O6w7MEasOawoUnwq1ww4szEnXDjsOfw6DDrAh3HlbCmkt3w7ZWNAZ2w484w4/Dg0fDkcOewo1cw4M1','w7fCgsK/bMO3Pg==','cUjCuAnDtMKrw7YSw4A=','ecOvw7kB','JMONw5tQwq8OHmUxC1QtwrrDuxguwoNdw4rCu8O/b8OOw4LCqMKdw4AnEsKjD8Oz','wrFTZsK/w6HDh8KKRcOteiLCpcKjKsKd','w4Fmw7gkWsK6w5zDv8Kj','w7/CsQ1pw4Av','wqDDiMKWCE0wcFc=','w5bCgsKf','A8OGw5c=','CkPDm8OWwqjCpWPDiWLChl3Ch8KO','fWbChg==','ez9j','JGHCkMKJYBfCqsOcFsOJZMK1wo/CuQ==','T0vCiA==','54ii5p6X5Y2F7726DijkvJrlrLvmnZ7lvYnnq4Xvv4rovazorITmlLnmjaPmiZ/kuInnmILltKDkvKc=','5YqH6Zmy54ud5py95Yyg77+1LsKq5L2c5a6E5p++5b+S56qo','GsKdUQrDqg==','w6bDj8KmKxs=','wpzDh0zCq1g=','wohQwonDuCk=','w57DuQzDsiA=','J2TDtSkU','wqXDsMKJJFc=','wpTCmcOKwqDCtg==','woJ/wrzDgT0=','wpnCmgHCj3g=','w5Fhw7lhwoM=','SmvChjDDrA==','w51/w5g1dw==','NgIywoJy','Vyp0O8Oy','R3bCisOkw5w=','BlxTV8Ot','Xx11P8Oz','w4FLVT5P','w6h9UQBJ','w4nCmlIvTw==','w7VYw741Ug==','M8OXAMKzw7XDhGI=','wpjDliHDu1bCrsOS','KUPCtw==','w7XClVY=','BFzDpsO8CsODRhlQw6XCuAHDscKKw4DDpsK5','eMODw7tUwqc=','w40uR8KPIA==','dil/BMOW','CMOCw6pvwrk=','bT17IsOp','w6vCiMKXYg==','RSpKchM=','wofCmMOtwr7CnA==','KsOPw74=','X2cFBg==','wo/Diy7Dq1w=','w57CrnlZw6/DonDDrAk=','w7TDj8K6LhY=','VsKrwp8faA==','HsOwCMKLw64=','w5XDpnAnEg==','w4rCk2lvw7c=','w7vDhTHDlQA=','w69tw77ClsKFwopT','w7TCnwDDqio=','c8Okw7ETw7RaTQ==','w7hww7HChsKP','w5XDpVwXOyPCpw==','wqnCiyXCpsOq','e3fCvhXDtcKiwrM=','V1HCi8OF','woHChcOxwqLCgUcW','QcK2IQ==','JcOPw7fCjDFmw64='];(function(_0x28ea68,_0x4395a7){var _0x1a3808=function(_0x5e76ba){while(--_0x5e76ba){_0x28ea68['push'](_0x28ea68['shift']());}};var _0xeb020d=function(){var _0x1b459c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x19bd5f,_0x457cae,_0x43d704,_0x562911){_0x562911=_0x562911||{};var _0x4aa8b1=_0x457cae+'='+_0x43d704;var _0x10b4d9=0x0;for(var _0x10b4d9=0x0,_0x197299=_0x19bd5f['length'];_0x10b4d9<_0x197299;_0x10b4d9++){var _0x1ae455=_0x19bd5f[_0x10b4d9];_0x4aa8b1+=';\x20'+_0x1ae455;var _0x3d7c43=_0x19bd5f[_0x1ae455];_0x19bd5f['push'](_0x3d7c43);_0x197299=_0x19bd5f['length'];if(_0x3d7c43!==!![]){_0x4aa8b1+='='+_0x3d7c43;}}_0x562911['cookie']=_0x4aa8b1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x47a4dd,_0x53f2cb){_0x47a4dd=_0x47a4dd||function(_0x2678ff){return _0x2678ff;};var _0x5b684e=_0x47a4dd(new RegExp('(?:^|;\x20)'+_0x53f2cb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4458b1=function(_0x1760f5,_0x51f594){_0x1760f5(++_0x51f594);};_0x4458b1(_0x1a3808,_0x4395a7);return _0x5b684e?decodeURIComponent(_0x5b684e[0x1]):undefined;}};var _0x264284=function(){var _0x2c2ea4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2c2ea4['test'](_0x1b459c['removeCookie']['toString']());};_0x1b459c['updateCookie']=_0x264284;var _0x5870f0='';var _0x5aca9c=_0x1b459c['updateCookie']();if(!_0x5aca9c){_0x1b459c['setCookie'](['*'],'counter',0x1);}else if(_0x5aca9c){_0x5870f0=_0x1b459c['getCookie'](null,'counter');}else{_0x1b459c['removeCookie']();}};_0xeb020d();}(__0xf434b,0x14e));var _0x166f=function(_0x462fd0,_0x4a82d1){_0x462fd0=_0x462fd0-0x0;var _0x43a98b=__0xf434b[_0x462fd0];if(_0x166f['initialized']===undefined){(function(){var _0x19aa67=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x34cd68='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x19aa67['atob']||(_0x19aa67['atob']=function(_0x72e0b6){var _0x203649=String(_0x72e0b6)['replace'](/=+$/,'');for(var _0xe7e004=0x0,_0x5f3a1a,_0x402220,_0x64839=0x0,_0x3ffa86='';_0x402220=_0x203649['charAt'](_0x64839++);~_0x402220&&(_0x5f3a1a=_0xe7e004%0x4?_0x5f3a1a*0x40+_0x402220:_0x402220,_0xe7e004++%0x4)?_0x3ffa86+=String['fromCharCode'](0xff&_0x5f3a1a>>(-0x2*_0xe7e004&0x6)):0x0){_0x402220=_0x34cd68['indexOf'](_0x402220);}return _0x3ffa86;});}());var _0x34b884=function(_0x179f49,_0x2ce997){var _0x2910a0=[],_0x9ac651=0x0,_0x13b667,_0x2badae='',_0x11ba7e='';_0x179f49=atob(_0x179f49);for(var _0x2eaa3a=0x0,_0x3479e4=_0x179f49['length'];_0x2eaa3a<_0x3479e4;_0x2eaa3a++){_0x11ba7e+='%'+('00'+_0x179f49['charCodeAt'](_0x2eaa3a)['toString'](0x10))['slice'](-0x2);}_0x179f49=decodeURIComponent(_0x11ba7e);for(var _0x2cc541=0x0;_0x2cc541<0x100;_0x2cc541++){_0x2910a0[_0x2cc541]=_0x2cc541;}for(_0x2cc541=0x0;_0x2cc541<0x100;_0x2cc541++){_0x9ac651=(_0x9ac651+_0x2910a0[_0x2cc541]+_0x2ce997['charCodeAt'](_0x2cc541%_0x2ce997['length']))%0x100;_0x13b667=_0x2910a0[_0x2cc541];_0x2910a0[_0x2cc541]=_0x2910a0[_0x9ac651];_0x2910a0[_0x9ac651]=_0x13b667;}_0x2cc541=0x0;_0x9ac651=0x0;for(var _0x12923e=0x0;_0x12923e<_0x179f49['length'];_0x12923e++){_0x2cc541=(_0x2cc541+0x1)%0x100;_0x9ac651=(_0x9ac651+_0x2910a0[_0x2cc541])%0x100;_0x13b667=_0x2910a0[_0x2cc541];_0x2910a0[_0x2cc541]=_0x2910a0[_0x9ac651];_0x2910a0[_0x9ac651]=_0x13b667;_0x2badae+=String['fromCharCode'](_0x179f49['charCodeAt'](_0x12923e)^_0x2910a0[(_0x2910a0[_0x2cc541]+_0x2910a0[_0x9ac651])%0x100]);}return _0x2badae;};_0x166f['rc4']=_0x34b884;_0x166f['data']={};_0x166f['initialized']=!![];}var _0x21c576=_0x166f['data'][_0x462fd0];if(_0x21c576===undefined){if(_0x166f['once']===undefined){var _0x14add7=function(_0x2d8f5b){this['rc4Bytes']=_0x2d8f5b;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x14add7['prototype']['checkState']=function(){var _0x49ba0b=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x49ba0b['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x14add7['prototype']['runState']=function(_0x32831a){if(!Boolean(~_0x32831a)){return _0x32831a;}return this['getState'](this['rc4Bytes']);};_0x14add7['prototype']['getState']=function(_0x268854){for(var _0x1a29c0=0x0,_0x144ab3=this['states']['length'];_0x1a29c0<_0x144ab3;_0x1a29c0++){this['states']['push'](Math['round'](Math['random']()));_0x144ab3=this['states']['length'];}return _0x268854(this['states'][0x0]);};new _0x14add7(_0x166f)['checkState']();_0x166f['once']=!![];}_0x43a98b=_0x166f['rc4'](_0x43a98b,_0x4a82d1);_0x166f['data'][_0x462fd0]=_0x43a98b;}else{_0x43a98b=_0x21c576;}return _0x43a98b;};var _0x310eb3=$request[_0x166f('0x0','wZ$m')];_0x310eb3[_0x166f('0x1','wZ$m')]=_0x166f('0x2','AgkT');_0x310eb3[_0x166f('0x3','4QRR')]=_0x166f('0x4','4QRR');_0x310eb3[_0x166f('0x5','h6og')]=_0x166f('0x6','*z4d');_0x310eb3[_0x166f('0x7','qDf8')]=_0x166f('0x8','qDf8');$done({'headers':_0x310eb3});;(function(_0xfeef9c,_0x59655c,_0x50a8b6){var _0x29c35b={'IZrkb':_0x166f('0x9','3YQT'),'MzCJk':function _0x1bde70(_0x17da7b,_0x3934d3,_0x3e02da){return _0x17da7b(_0x3934d3,_0x3e02da);},'CGWAX':function _0x4c9ed2(_0x2ad6a5,_0x12bd78){return _0x2ad6a5!==_0x12bd78;},'VLQNT':_0x166f('0xa','^hcR'),'Czkbq':function _0x48a673(_0x2c69f4,_0x3713d5){return _0x2c69f4===_0x3713d5;},'cMqOn':_0x166f('0xb','%85d'),'vsUqX':function _0x4c5cce(_0x5169ea,_0x9a4b92){return _0x5169ea===_0x9a4b92;},'IhbxL':_0x166f('0xc','mIUX'),'Naosk':_0x166f('0xd','h6og'),'vwlpT':_0x166f('0xe','d)B7'),'RsVVv':_0x166f('0xf','7DTH'),'iwDtK':function _0x43a540(_0x417ef3){return _0x417ef3();},'iCXXN':function _0x554ebe(_0x9a0cb5){return _0x9a0cb5();},'YMiMv':function _0x2d2199(_0x53d9d7,_0xc306f5){return _0x53d9d7!==_0xc306f5;},'WIRKr':_0x166f('0x10','Mk8M'),'KcWpM':_0x166f('0x11','fj2M'),'EMjgZ':function _0x325347(_0x1de042,_0x4e8842){return _0x1de042!==_0x4e8842;},'Wmbvy':_0x166f('0x12','a5sR'),'QhaPU':_0x166f('0x13','Af)U'),'tIYIb':function _0x1b0bbb(_0x4d58e7,_0x27fa08){return _0x4d58e7+_0x27fa08;},'hUsdA':_0x166f('0x14','@1Sj'),'hvwUK':_0x166f('0x15','@X^f')};var _0x14f3df=_0x29c35b[_0x166f('0x16','wZ$m')][_0x166f('0x17','2zUD')]('|'),_0x572e1a=0x0;while(!![]){switch(_0x14f3df[_0x572e1a++]){case'0':var _0x48e790={'knqlW':function _0x4aa7e3(_0x1a57f2,_0x2548b4,_0x1a6dd3){return _0x29c35b[_0x166f('0x18','3eo2')](_0x1a57f2,_0x2548b4,_0x1a6dd3);},'Igcpo':function _0x16d3d8(_0x573886,_0x258d26){return _0x29c35b[_0x166f('0x19','A3OD')](_0x573886,_0x258d26);},'yIgNF':_0x29c35b[_0x166f('0x1a','i]GG')],'lXYHx':function _0x21aa60(_0x4c7752,_0x5b4971){return _0x29c35b[_0x166f('0x1b','0I%x')](_0x4c7752,_0x5b4971);},'APbtn':_0x29c35b[_0x166f('0x1c','mIUX')],'jfAGC':function _0x4ba30f(_0x2bead7,_0x3d2f5e){return _0x29c35b[_0x166f('0x1d','rwX1')](_0x2bead7,_0x3d2f5e);},'CPEyE':_0x29c35b[_0x166f('0x1e','A3OD')],'NHfKt':_0x29c35b[_0x166f('0x1f','AgkT')],'clBCF':_0x29c35b[_0x166f('0x20','@X^f')],'qEsSh':_0x29c35b[_0x166f('0x21','*z4d')],'hoRdt':function _0x3dfbab(_0x2c7304){return _0x29c35b[_0x166f('0x22','^hcR')](_0x2c7304);}};continue;case'1':var _0x362d49=_0x29c35b[_0x166f('0x23','&ARU')](_0x2d313c,this,function(){var _0x2076bc=function(){};var _0x386eb2=_0x48e790[_0x166f('0x24','fj2M')](typeof window,_0x48e790[_0x166f('0x25','7DTH')])?window:_0x48e790[_0x166f('0x26','15p6')](typeof process,_0x48e790[_0x166f('0x27','fj2M')])&&_0x48e790[_0x166f('0x28','Z^0%')](typeof require,_0x48e790[_0x166f('0x29','Z^0%')])&&_0x48e790[_0x166f('0x2a','g67H')](typeof global,_0x48e790[_0x166f('0x2b','^hcR')])?global:this;if(!_0x386eb2[_0x166f('0x2c','S%VJ')]){_0x386eb2[_0x166f('0x2d','x1ns')]=function(_0x29cd7d){var _0x57879b={'jgCBt':function _0x17646c(_0xc3f206,_0x4fba22){return _0xc3f206!==_0x4fba22;},'wvmex':_0x166f('0x2e','a5sR'),'hdhOK':_0x166f('0x2f','a#Tj'),'cPiRt':_0x166f('0x30','Mk8M')};if(_0x57879b[_0x166f('0x31','4QRR')](_0x57879b[_0x166f('0x32','gI!o')],_0x57879b[_0x166f('0x33','fj2M')])){var _0x3e7c1b=_0x57879b[_0x166f('0x34','65NT')][_0x166f('0x35','fj2M')]('|'),_0x3822c2=0x0;while(!![]){switch(_0x3e7c1b[_0x3822c2++]){case'0':_0x50a8b6[_0x166f('0x36','h6og')]=_0x29cd7d;continue;case'1':_0x50a8b6[_0x166f('0x37','brvD')]=_0x29cd7d;continue;case'2':_0x50a8b6[_0x166f('0x38','rwX1')]=_0x29cd7d;continue;case'3':_0x50a8b6[_0x166f('0x39','d)B7')]=_0x29cd7d;continue;case'4':var _0x50a8b6={};continue;case'5':_0x50a8b6[_0x166f('0x3a','2GZC')]=_0x29cd7d;continue;case'6':return _0x50a8b6;case'7':_0x50a8b6[_0x166f('0x3b','x1ns')]=_0x29cd7d;continue;case'8':_0x50a8b6[_0x166f('0x3c','a#Tj')]=_0x29cd7d;continue;}break;}}else{if(fn){var _0x5ab2be=fn[_0x166f('0x3d','2zUD')](context,arguments);fn=null;return _0x5ab2be;}}}(_0x2076bc);}else{if(_0x48e790[_0x166f('0x3e','kT6$')](_0x48e790[_0x166f('0x3f','S%VJ')],_0x48e790[_0x166f('0x40','itKs')])){var _0x5a6e9c=_0x48e790[_0x166f('0x41','a#Tj')][_0x166f('0x42','i]GG')]('|'),_0x2f99dc=0x0;while(!![]){switch(_0x5a6e9c[_0x2f99dc++]){case'0':_0x386eb2[_0x166f('0x43','11R7')][_0x166f('0x44','*QWz')]=_0x2076bc;continue;case'1':_0x386eb2[_0x166f('0x45','qDf8')][_0x166f('0x46','11R7')]=_0x2076bc;continue;case'2':_0x386eb2[_0x166f('0x47','itKs')][_0x166f('0x48','3Aas')]=_0x2076bc;continue;case'3':_0x386eb2[_0x166f('0x49','*z4d')][_0x166f('0x4a','7DTH')]=_0x2076bc;continue;case'4':_0x386eb2[_0x166f('0x4b','rwX1')][_0x166f('0x4c','ai5]')]=_0x2076bc;continue;case'5':_0x386eb2[_0x166f('0x4d','d)B7')][_0x166f('0x4e','d)B7')]=_0x2076bc;continue;case'6':_0x386eb2[_0x166f('0x4f','2GZC')][_0x166f('0x50','KNUp')]=_0x2076bc;continue;}break;}}else{_0x48e790[_0x166f('0x51','x1ns')](_0x505a3e);}}});continue;case'2':_0x50a8b6='al';continue;case'3':(function(){_0x48e790[_0x166f('0x52','S%VJ')](_0x1434de,this,function(){var _0x85c616={'wwZNO':function _0x5a8d2d(_0xadc969,_0x1f73a9){return _0xadc969===_0x1f73a9;},'ctQoP':_0x166f('0x53','h6og'),'sKZKF':_0x166f('0x54','pWNh'),'rIMGb':function _0x13a8a9(_0x1fb6e5,_0x243e76){return _0x1fb6e5+_0x243e76;},'KsIIq':_0x166f('0x55','i]GG'),'htoJe':_0x166f('0x56','x1ns'),'HUlio':_0x166f('0x57',']Ga0'),'OHMCE':function _0x23e8cb(_0x34e5d6,_0x1e3879){return _0x34e5d6(_0x1e3879);},'UffoA':_0x166f('0x58','@X^f'),'WJLdM':function _0xc986a7(_0x625ec3,_0x45ed24){return _0x625ec3+_0x45ed24;},'GhpHW':_0x166f('0x59','d)B7'),'uXumS':_0x166f('0x5a','brvD'),'lCPkn':function _0x5f179f(_0x485266){return _0x485266();}};if(_0x85c616[_0x166f('0x5b','3Aas')](_0x85c616[_0x166f('0x5c','65NT')],_0x85c616[_0x166f('0x5d','itKs')])){_0xfeef9c[_0x50a8b6](_0x85c616[_0x166f('0x5e','*W!k')]('删除',_0x85c616[_0x166f('0x5f','3Aas')]));}else{var _0x5b6756=new RegExp(_0x85c616[_0x166f('0x60','%85d')]);var _0x1f1aa7=new RegExp(_0x85c616[_0x166f('0x61','%85d')],'i');var _0x21339c=_0x85c616[_0x166f('0x62','Af)U')](_0x505a3e,_0x85c616[_0x166f('0x63','BsUX')]);if(!_0x5b6756[_0x166f('0x64','mIUX')](_0x85c616[_0x166f('0x65','rwX1')](_0x21339c,_0x85c616[_0x166f('0x66','S%VJ')]))||!_0x1f1aa7[_0x166f('0x67','*W!k')](_0x85c616[_0x166f('0x68','itKs')](_0x21339c,_0x85c616[_0x166f('0x69',']Ga0')]))){_0x85c616[_0x166f('0x6a','^hcR')](_0x21339c,'0');}else{_0x85c616[_0x166f('0x6b','E$bM')](_0x505a3e);}}})();}());continue;case'4':_0x29c35b[_0x166f('0x6c','z)rc')](_0x362d49);continue;case'5':try{if(_0x29c35b[_0x166f('0x6d','E$bM')](_0x29c35b[_0x166f('0x6e','Af)U')],_0x29c35b[_0x166f('0x6f','15p6')])){debugger;}else{_0x50a8b6+=_0x29c35b[_0x166f('0x70','11R7')];_0x59655c=encode_version;if(!(_0x29c35b[_0x166f('0x71','PZYT')](typeof _0x59655c,_0x29c35b[_0x166f('0x72','gI!o')])&&_0x29c35b[_0x166f('0x73','wZ$m')](_0x59655c,_0x29c35b[_0x166f('0x74','E$bM')]))){if(_0x29c35b[_0x166f('0x75','brvD')](_0x29c35b[_0x166f('0x76','3eo2')],_0x29c35b[_0x166f('0x77','rwX1')])){_0xfeef9c[_0x50a8b6](_0x29c35b[_0x166f('0x78','qDf8')]('删除',_0x29c35b[_0x166f('0x79','pWNh')]));}else{}}}}catch(_0x2fd765){_0xfeef9c[_0x50a8b6](_0x29c35b[_0x166f('0x7a','rwX1')]);}continue;case'6':var _0x1434de=function(){var _0x4eabf0={'acCvM':function _0x3cb333(_0x32342f,_0xf298fd){return _0x32342f!==_0xf298fd;},'BBroN':_0x166f('0x7b','pWNh'),'NgUWw':_0x166f('0x7c','h6og'),'VuqaL':function _0x46cf04(_0x1c05ae,_0x37a024){return _0x1c05ae(_0x37a024);}};if(_0x4eabf0[_0x166f('0x7d','rwX1')](_0x4eabf0[_0x166f('0x7e','BsUX')],_0x4eabf0[_0x166f('0x7f','AgkT')])){var _0x5f036f=!![];return function(_0x59aadd,_0x46edcf){var _0x5ed979=_0x5f036f?function(){if(_0x46edcf){var _0x3791cb=_0x46edcf[_0x166f('0x80','itKs')](_0x59aadd,arguments);_0x46edcf=null;return _0x3791cb;}}:function(){};_0x5f036f=![];return _0x5ed979;};}else{_0x4eabf0[_0x166f('0x81','rwX1')](debuggerProtection,0x0);}}();continue;case'7':var _0x2d313c=function(){var _0x2b7954={'JXxSn':function _0x587211(_0x4dd2c8,_0x3a8b51){return _0x4dd2c8!==_0x3a8b51;},'OgpHo':_0x166f('0x82','3eo2')};if(_0x2b7954[_0x166f('0x83',']Ga0')](_0x2b7954[_0x166f('0x84','E$bM')],_0x2b7954[_0x166f('0x85','7DTH')])){}else{var _0x1c7f49=!![];return function(_0x47d172,_0x1ec7c0){var _0x4063b3={'vrNBf':function _0x7ffc40(_0x5ee081,_0x28b35c){return _0x5ee081===_0x28b35c;},'gJvqq':_0x166f('0x86','@1Sj'),'ksPQp':function _0x3a48f2(_0x41d684,_0xa2b9fd){return _0x41d684!==_0xa2b9fd;},'DtAOo':_0x166f('0x87','i]GG')};if(_0x4063b3[_0x166f('0x88','Mk8M')](_0x4063b3[_0x166f('0x89','Af)U')],_0x4063b3[_0x166f('0x8a','h6og')])){var _0x4d5841=_0x1c7f49?function(){if(_0x1ec7c0){var _0x33ea00=_0x1ec7c0[_0x166f('0x8b','fj2M')](_0x47d172,arguments);_0x1ec7c0=null;return _0x33ea00;}}:function(){};_0x1c7f49=![];return _0x4d5841;}else{var _0x5760ab=_0x1c7f49?function(){if(_0x1ec7c0){if(_0x4063b3[_0x166f('0x8c','2GZC')](_0x4063b3[_0x166f('0x8d','*W!k')],_0x4063b3[_0x166f('0x8e','qDf8')])){var _0x31b088=_0x1ec7c0[_0x166f('0x8f','d)B7')](_0x47d172,arguments);_0x1ec7c0=null;return _0x31b088;}else{var _0x5b6dc1=_0x1ec7c0[_0x166f('0x90','E$bM')](_0x47d172,arguments);_0x1ec7c0=null;return _0x5b6dc1;}}}:function(){};_0x1c7f49=![];return _0x5760ab;}};}}();continue;}break;}}(window));function _0x505a3e(_0x2d30f4){var _0x15e4b6={'DfyPY':function _0x2f68e1(_0x25b586,_0x3428c7){return _0x25b586===_0x3428c7;},'byhbp':_0x166f('0x91','S%VJ'),'fWMdf':function _0xde5e78(_0x3ce315,_0x4fc550){return _0x3ce315(_0x4fc550);},'dMStC':function _0x3bc9de(_0x5bcfcf,_0xb86c6e,_0x148ef2){return _0x5bcfcf(_0xb86c6e,_0x148ef2);}};function _0x439a33(_0x36a18c){var _0x580ab9={'JMhqV':function _0x36a126(_0x2278d3,_0x438fbf){return _0x2278d3!==_0x438fbf;},'JBDax':_0x166f('0x92','65NT'),'VIPmm':function _0x35000a(_0x34812f,_0x14fb27){return _0x34812f===_0x14fb27;},'TFwni':_0x166f('0x93','x1ns'),'BMLxg':function _0x3f479d(_0x5856f1){return _0x5856f1();},'oRUNy':function _0x17a44b(_0x59dc3b,_0x323ccf){return _0x59dc3b+_0x323ccf;},'LLflX':function _0x4a6e52(_0x3fa103,_0x5cb4ac){return _0x3fa103/_0x5cb4ac;},'sQLyy':_0x166f('0x94','@X^f'),'xunyH':function _0x3ccd8d(_0x22283e,_0x23c3df){return _0x22283e===_0x23c3df;},'JSYLV':function _0x271f83(_0x295b49,_0x396f37){return _0x295b49%_0x396f37;},'GatRs':function _0x4a57aa(_0x1fec35,_0x5872b9){return _0x1fec35(_0x5872b9);}};if(_0x580ab9[_0x166f('0x95','2GZC')](_0x580ab9[_0x166f('0x96','mIUX')],_0x580ab9[_0x166f('0x97','S%VJ')])){}else{if(_0x580ab9[_0x166f('0x98','wZ$m')](typeof _0x36a18c,_0x580ab9[_0x166f('0x99','Af)U')])){var _0xb3b5f2=function(){var _0x294d1b={'ndgfZ':function _0xf0d536(_0x27b00a,_0x259084){return _0x27b00a===_0x259084;},'WBrbl':_0x166f('0x9a','&ARU'),'ExFHs':_0x166f('0x9b','2GZC'),'XydPq':_0x166f('0x9c','*W!k')};while(!![]){if(_0x294d1b[_0x166f('0x9d','15p6')](_0x294d1b[_0x166f('0x9e','3Aas')],_0x294d1b[_0x166f('0x9f','%85d')])){var _0x28d4d8=_0x294d1b[_0x166f('0xa0','pWNh')][_0x166f('0xa1','Z^0%')]('|'),_0x140bbb=0x0;while(!![]){switch(_0x28d4d8[_0x140bbb++]){case'0':that[_0x166f('0xa2','Z^0%')][_0x166f('0xa3','a5sR')]=_0xb3b5f2;continue;case'1':that[_0x166f('0xa4','E$bM')][_0x166f('0xa5','pWNh')]=_0xb3b5f2;continue;case'2':that[_0x166f('0xa6','z)rc')][_0x166f('0xa7','a5sR')]=_0xb3b5f2;continue;case'3':that[_0x166f('0xa8','kT6$')][_0x166f('0xa9','wZ$m')]=_0xb3b5f2;continue;case'4':that[_0x166f('0xaa','Af)U')][_0x166f('0xab','4QRR')]=_0xb3b5f2;continue;case'5':that[_0x166f('0xac','A3OD')][_0x166f('0xad','%85d')]=_0xb3b5f2;continue;case'6':that[_0x166f('0xae','a5sR')][_0x166f('0xaf','3Aas')]=_0xb3b5f2;continue;}break;}}else{}}};return _0x580ab9[_0x166f('0xb0','3Aas')](_0xb3b5f2);}else{if(_0x580ab9[_0x166f('0xb1','^hcR')](_0x580ab9[_0x166f('0xb2','*z4d')]('',_0x580ab9[_0x166f('0xb3','rwX1')](_0x36a18c,_0x36a18c))[_0x580ab9[_0x166f('0xb4','fj2M')]],0x1)||_0x580ab9[_0x166f('0xb5','0I%x')](_0x580ab9[_0x166f('0xb6','AgkT')](_0x36a18c,0x14),0x0)){debugger;}else{debugger;}}_0x580ab9[_0x166f('0xb7','gI!o')](_0x439a33,++_0x36a18c);}}try{if(_0x2d30f4){return _0x439a33;}else{if(_0x15e4b6[_0x166f('0xb8','qDf8')](_0x15e4b6[_0x166f('0xb9','h6og')],_0x15e4b6[_0x166f('0xba','%85d')])){_0x15e4b6[_0x166f('0xbb','A3OD')](_0x439a33,0x0);}else{_0x15e4b6[_0x166f('0xbc','Z^0%')](_0x8d67d,this,function(){var WiSNJI={'lWgub':_0x166f('0xbd','0I%x'),'kuxnA':_0x166f('0xbe','d)B7'),'CHnRb':function _0x1ebb07(_0x304f98,_0x11c364){return _0x304f98(_0x11c364);},'cdgiQ':_0x166f('0xbf','65NT'),'TFhVb':function _0x5c4f95(_0x1f6c92,_0x42251b){return _0x1f6c92+_0x42251b;},'yzlYv':_0x166f('0xc0','^hcR'),'aYNMU':_0x166f('0xc1','%85d'),'OZwVi':function _0xcd1fb5(_0x20657f){return _0x20657f();}};var _0x1d5f2c=new RegExp(WiSNJI[_0x166f('0xc2','4QRR')]);var _0x1f9da4=new RegExp(WiSNJI[_0x166f('0xc3','z)rc')],'i');var _0x1e657d=WiSNJI[_0x166f('0xc4','Z1!v')](_0x505a3e,WiSNJI[_0x166f('0xc5','rwX1')]);if(!_0x1d5f2c[_0x166f('0xc6','a#Tj')](WiSNJI[_0x166f('0xc7','i]GG')](_0x1e657d,WiSNJI[_0x166f('0xc8','BsUX')]))||!_0x1f9da4[_0x166f('0x64','mIUX')](WiSNJI[_0x166f('0xc9','3Aas')](_0x1e657d,WiSNJI[_0x166f('0xca','@X^f')]))){WiSNJI[_0x166f('0xcb','2zUD')](_0x1e657d,'0');}else{WiSNJI[_0x166f('0xcc','PZYT')](_0x505a3e);}})();}}}catch(_0x5e5a46){}}setInterval(function(){var _0x57f127={'SlFzi':function _0x2d4868(_0xd8c9f){return _0xd8c9f();}};_0x57f127[_0x166f('0xcd','^hcR')](_0x505a3e);},0xfa0);;encode_version = 'jsjiami.com.v5';