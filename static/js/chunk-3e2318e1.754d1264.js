(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e2318e1"],{"0ced":function(e,t){
/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
(function(e){"use strict";if(e.URL=e.URL||e.webkitURL,e.Blob&&e.URL)try{return void new Blob}catch(n){}var t=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||function(e){var t=function(e){return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]},s=function(){this.data=[]},n=function(e,t,s){this.data=e,this.size=e.length,this.type=t,this.encoding=s},a=s.prototype,o=n.prototype,i=e.FileReaderSync,r=function(e){this.code=this[this.name=e]},l="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),c=l.length,d=e.URL||e.webkitURL||e,u=d.createObjectURL,h=d.revokeObjectURL,p=d,g=e.btoa,f=e.atob,v=e.ArrayBuffer,w=e.Uint8Array,m=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;n.fake=o.fake=!0;while(c--)r.prototype[l[c]]=c+1;return d.createObjectURL||(p=e.URL=function(e){var t,s=document.createElementNS("http://www.w3.org/1999/xhtml","a");return s.href=e,"origin"in s||("data:"===s.protocol.toLowerCase()?s.origin=null:(t=e.match(m),s.origin=t&&t[1])),s}),p.createObjectURL=function(e){var t,s=e.type;return null===s&&(s="application/octet-stream"),e instanceof n?(t="data:"+s,"base64"===e.encoding?t+";base64,"+e.data:"URI"===e.encoding?t+","+decodeURIComponent(e.data):g?t+";base64,"+g(e.data):t+","+encodeURIComponent(e.data)):u?u.call(d,e):void 0},p.revokeObjectURL=function(e){"data:"!==e.substring(0,5)&&h&&h.call(d,e)},a.append=function(e){var s=this.data;if(w&&(e instanceof v||e instanceof w)){for(var a="",o=new w(e),l=0,c=o.length;l<c;l++)a+=String.fromCharCode(o[l]);s.push(a)}else if("Blob"===t(e)||"File"===t(e)){if(!i)throw new r("NOT_READABLE_ERR");var d=new i;s.push(d.readAsBinaryString(e))}else e instanceof n?"base64"===e.encoding&&f?s.push(f(e.data)):"URI"===e.encoding?s.push(decodeURIComponent(e.data)):"raw"===e.encoding&&s.push(e.data):("string"!==typeof e&&(e+=""),s.push(unescape(encodeURIComponent(e))))},a.getBlob=function(e){return arguments.length||(e=null),new n(this.data.join(""),e,"raw")},a.toString=function(){return"[object BlobBuilder]"},o.slice=function(e,t,s){var a=arguments.length;return a<3&&(s=null),new n(this.data.slice(e,a>1?t:this.data.length),s,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=0,delete this.data},s}(e);e.Blob=function(e,s){var n=s&&s.type||"",a=new t;if(e)for(var o=0,i=e.length;o<i;o++)Uint8Array&&e[o]instanceof Uint8Array?a.append(e[o].buffer):a.append(e[o]);var r=a.getBlob(n);return!r.slice&&r.webkitSlice&&(r.slice=r.webkitSlice),r};var s=Object.getPrototypeOf||function(e){return e.__proto__};e.Blob.prototype=s(new e.Blob)})("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||this)},2155:function(e,t,s){"use strict";s("adae")},2875:function(e,t,s){"use strict";s("af67")},"527b":function(e,t,s){"use strict";s.d(t,"b",(function(){return v})),s.d(t,"a",(function(){return A}));var n=s("bc3a"),a=s.n(n);const o=Object.prototype.toString;var i,r,l=null,c=[],d=1,u=1,h=1,p=null;function g(e){return"[object Object]"===o.call(e)}function f(){}const v={get:function(e){const t={};return e||Reflect.ownKeys(localStorage).forEach((function(e){let s=localStorage[e];try{s=JSON.parse(localStorage[e])}catch(n){}t[e]=s})),"string"===typeof e&&(e=[e]),Array.isArray(e)&&e.forEach(e=>{let s=localStorage.getItem(e);try{s=JSON.parse(localStorage.getItem(e))}catch(n){}t[e]=s}),Promise.resolve(t)},set:function(e,t=f){if(!g(e))return Promise.reject("Please pass in an object");Reflect.ownKeys(e).forEach((function(t){localStorage.setItem(t,JSON.stringify(e[t]))})),t()}},w=()=>{var e=8,t=60*(new Date).getTimezoneOffset()*1e3,s=(new Date).getTime(),n=new Date(s+t+60*e*60*1e3);if(y(n))return!1;var a=new Date,o=new Date,i=new Date,r=new Date;return a.setHours(9,30,0),o.setHours(11,35,0),i.setHours(13,0,0),r.setHours(15,5,0),"6"!=n.getDay()&&"0"!=n.getDay()&&(n>=a&&n<=o||n>=i&&n<=r)},m=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,s="x"==e?t:3&t|8;return s.toString(16)}));var b=()=>{let e="https://blz.nosdn.127.net/sre/holiday.json";return a.a.get(e)},y=e=>{var t=e.getMonth()+1,s=e.getFullYear(),n=e.getDate();t>=1&&t<=9&&(t="0"+t),n>=0&&n<=9&&(n="0"+n);let a=!1;var o=t+"-"+n;let i=r.data;for(const r in i)if(i.hasOwnProperty(r)){const e=i[r];if(r==s)for(const t in e)if(e.hasOwnProperty(t)){const s=e[t];o==t&&s.holiday&&(a=!0)}}return a},x=e=>{let t=parseFloat(e),s=Math.abs(t);return s<10?t.toFixed(2):s<100?t.toFixed(1):s<1e3?t.toFixed(0):s<1e4?(t/1e3).toFixed(1)+"k":s<1e6?(t/1e3).toFixed(0)+"k":s<1e7?(t/1e6).toFixed(1)+"M":(t/1e6).toFixed(0)+"M"},C=(e,t,s)=>{let n=null;n=1==s?e:c.map(e=>e.code).join(",");let o="https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=50&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid="+p+"&Fcodes="+n;a.a.get(o).then(e=>{let t=0,n=0,a=null;if(1==s){let t=e.Datas[0],s={fundcode:t.FCODE,name:t.SHORTNAME,jzrq:t.PDATE,dwjz:t.NAV,gsz:isNaN(t.GSZ)?null:t.GSZ,gszzl:isNaN(t.GSZZL)?0:t.GSZZL,gztime:t.GZTIME,num:0},n=c.filter(e=>e.code==s.fundcode);if(!n.length)return!1;s.num=n[0].num;var o=0;let i=s.num?s.num:0;t.PDATE==t.GZTIME.substr(0,10)?(s.gsz=t.NAV,s.gszzl=isNaN(t.NAVCHGRT)?0:t.NAVCHGRT,o=((s.dwjz-s.dwjz/(1+.01*s.gszzl))*i).toFixed(1)):s.gsz&&(o=((s.gsz-s.dwjz)*i).toFixed(1)),a=1==h?s.gszzl+"%":0!=i?x(o):"0"}else e.Datas.forEach(e=>{let s=c.filter(t=>t.code==e.FCODE),a=s[0].num?s[0].num:0;t+=e.NAV*a;var o=0;if(e.PDATE==e.GZTIME.substr(0,10))o=(e.NAV-e.NAV/(1+.01*e.NAVCHGRT))*a;else{let t=isNaN(e.GSZ)?null:e.GSZ;t&&(o=(t-e.NAV)*a)}n+=o}),a=1==h?0==t||0==n?"0":(100*n/t).toFixed(2)+"%":x(n);A.browserAction.setBadgeText({text:a})}).catch(e=>{})},S=(e,t=1)=>{B(i);let s=w();e=e,C(e,s,t),i=setInterval(()=>{w()&&C(e,!0,t)},12e4)},B=()=>{clearInterval(i),A.browserAction.setBadgeText({text:"funds.ops-coffee.cn"})},k=e=>{1==d&&1==u?e?S(e):B():1==d&&2==u?S(null,2):B()};const _=()=>{v.get(["holiday","fundListM","RealtimeFundcode","showBadge","BadgeContent","BadgeType","userId"]).then(e=>{l=e.RealtimeFundcode?e.RealtimeFundcode:null,c=e.fundListM?e.fundListM:[],d=e.showBadge?e.showBadge:1,u=e.BadgeContent?e.BadgeContent:1,h=e.BadgeType?e.BadgeType:1,e.userId?p=e.userId:(p=m(),v.set({userId:p})),e.holiday?(r=e.holiday,k(l)):b().then(e=>{v.set({holiday:e},()=>{r=e,k(l)})})})};_();const A={runtime:{sendMessage:function(e,t=f){if("DuringDate"==e.type){let e=w();t({farewell:e})}if("refresh"==e.type&&_(),"refreshBadgeAllGains"==e.type){let t=0,s=0;e.data.forEach(e=>{let n=c.filter(t=>t.code==e.FCODE),a=n[0].num?n[0].num:0;t+=e.NAV*a;var o=0;if(e.PDATE==e.GZTIME.substr(0,10))o=(e.NAV-e.NAV/(1+.01*e.NAVCHGRT))*a;else{let t=isNaN(e.GSZ)?null:e.GSZ;t&&(o=(t-e.NAV)*a)}s+=o});let n=null;n=1==h?0==t||0==s?"0":(100*s/t).toFixed(2)+"%":x(s),A.browserAction.setBadgeText({text:n});w()}if("endInterval"==e.type&&B(),"startInterval"==e.type&&S(e.id),"refreshOption"==e.type){switch(e.data.type){case"showBadge":d=e.data.value;break;case"BadgeContent":u=e.data.value;break;case"BadgeType":h=e.data.value;break}_()}if("refreshBadge"==e.type){let t=null;t=1==h?e.data.gszzl+"%":x(e.data.gains),A.browserAction.setBadgeText({text:t});w()&&e.data.gszzl}}},browserAction:{setBadgeText:function(e){document.title=e.text}}}},9224:function(e){e.exports=JSON.parse('{"name":"funds.ops-coffee.cn","version":"3.7.0","private":true,"scripts":{"serve":"vue-cli-service serve","dev":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","analyz":"vue-cli-service build --mode analyze"},"dependencies":{"axios":"^0.19.0","babel-polyfill":"^6.26.0","core-js":"^2.6.5","echarts":"^4.2.1","element-ui":"^2.10.1","file-saver":"^2.0.5","vue":"^2.6.10","vue-router":"3.0.3","vue-clipboard2":"^0.3.1","xlsx":"^0.16.9"},"devDependencies":{"@vue/cli-service":"^3.9.0","babel-plugin-component":"^1.1.1","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","vue-template-compiler":"^2.6.10","sass-loader":"^7.0.3","script-loader":"^0.7.2","node-sass":"^4.9.2"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{"no-console":0},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}')},adae:function(e,t,s){},af67:function(e,t,s){},d7e3:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",class:e.containerClass,attrs:{id:"app"}},[s("div",[s("ul",{staticClass:"setting-list"},[s("li",[s("div",{staticClass:"list-title"},[e._v("\n          节假日信息\n          "),s("button",{staticClass:"btn",attrs:{disabled:e.disabled,title:"点击更新节假日信息"},on:{click:e.getHoliday}},[e._v("\n            更新\n          ")]),e.disabled?s("span",{staticClass:"loading"},[e._v("更新中。。。")]):e._e()]),s("p",[e.holiday?s("span",[e._v("\n            当前版本：v"+e._s(e.holiday.version)+"    最后节假日日期："+e._s(e.holiday.lastDate)+"\n          ")]):e._e()]),s("p",[e._v("\n          tips：更新节假日信息，可以在节假日暂停更新估值，节假日信息会不定时更新。\n          "),s("a",{attrs:{href:"#"},on:{click:e.openHoliday}},[e._v("查看最新版")])])]),s("li",[s("div",{staticClass:"list-title"},[e._v("主题设置")]),s("div",{staticClass:"select-row"},[s("el-switch",{attrs:{"active-color":"#484848","inactive-color":"#13ce66","inactive-text":"标准模式","active-text":"暗色模式"},on:{change:e.changeDarkMode},model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1)]),s("li",[s("div",{staticClass:"list-title"},[e._v("Title设置")]),s("div",{staticClass:"select-row"},[e._v("\n          开关：\n          "),s("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeOption(t,"showBadge",!0)}},model:{value:e.showBadge,callback:function(t){e.showBadge=t},expression:"showBadge"}},[s("el-radio",{attrs:{border:"",label:1}},[e._v("增强模式")]),s("el-radio",{attrs:{border:"",label:2}},[e._v("普通模式")])],1)],1),1==e.showBadge?s("div",{staticClass:"select-row"},[e._v("\n          内容：\n          "),s("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeOption(t,"BadgeContent",!0)}},model:{value:e.BadgeContent,callback:function(t){e.BadgeContent=t},expression:"BadgeContent"}},[s("el-radio",{attrs:{border:"",label:1}},[e._v("单个基金")]),s("el-radio",{attrs:{border:"",label:2}},[e._v("所有基金")])],1)],1):e._e(),1==e.showBadge?s("div",{staticClass:"select-row"},[e._v("\n          类型：\n          "),s("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeOption(t,"BadgeType",!0)}},model:{value:e.BadgeType,callback:function(t){e.BadgeType=t},expression:"BadgeType"}},[s("el-radio",{attrs:{border:"",label:1}},[e._v("日收益率")]),s("el-radio",{attrs:{border:"",label:2}},[e._v("日收益额")])],1)],1):e._e(),s("p",{staticStyle:{"margin-top":"5px"}},[e._v("\n          tips：若选择增强模式会在title中显示日收益率或日收益额，当选择单个基金时要在基金编辑模式中选择一个特别关注的基金\n        ")])]),s("li",[s("div",{staticClass:"list-title"},[e._v("基金列表展示内容设置")]),s("div",{staticClass:"select-row"},[s("span",[e._v("显示估算净值")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showGSZ")}},model:{value:e.showGSZ,callback:function(t){e.showGSZ=t},expression:"showGSZ"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示持有金额")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showAmount")}},model:{value:e.showAmount,callback:function(t){e.showAmount=t},expression:"showAmount"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示估值收益")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showGains")}},model:{value:e.showGains,callback:function(t){e.showGains=t},expression:"showGains"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示持有收益")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showCost")}},model:{value:e.showCost,callback:function(t){e.showCost=t},expression:"showCost"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示持有收益率")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showCostRate")}},model:{value:e.showCostRate,callback:function(t){e.showCostRate=t},expression:"showCostRate"}})],1)]),s("li",[s("div",{staticClass:"list-title"},[e._v("基金配置信息导入与导出")]),s("div",{staticStyle:{padding:"8px 0 10px"}},[s("input",{staticClass:"btn",attrs:{type:"button",value:"导出配置文件"},on:{click:e.exportConfig}}),s("a",{ref:"configMsg",staticClass:"exportBtn",attrs:{href:e.configHref,download:e.timer+"基金配置.json"}}),s("a",{staticClass:"uploadFile btn",attrs:{href:"javascript:;"}},[e._v("导入配置文件\n            "),s("input",{ref:"importInput",attrs:{type:"file"},on:{change:e.importInput}})]),s("input",{staticClass:"btn",attrs:{type:"button",value:"导入导出文本"},on:{click:e.openConfigBox}})]),s("div",{staticStyle:{padding:"8px 0 10px"}},[s("input",{staticClass:"btn",attrs:{type:"button",value:"导出基金列表Excel",disabled:e.loadingFundList},on:{click:e.getFundData}}),s("a",{staticClass:"uploadFile btn",attrs:{href:"javascript:;"}},[e._v("导入基金列表Excel\n            "),s("input",{ref:"importExcel",attrs:{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"},on:{change:e.importExcel}})])]),s("p",[e._v("\n          tips：若想在插件和浏览器以及多个不同浏览器之间同步数据可以使用导入导出功能\n        ")])]),s("config-box",{ref:"configBox",attrs:{darkMode:e.darkMode,top:40},on:{success:e.successInput}}),s("button",{staticClass:"btn primary",staticStyle:{"margin-top":"15px"},on:{click:e.goBack}},[e._v("\n        返回主页\n      ")])],1)])])},a=[],o=s("527b"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.configShadow?s("div",{staticClass:"shadow"},[s("div",{staticClass:"config-box",style:{marginTop:e.top+"px"}},[s("div",{staticClass:"tab-row"},[s("button",{class:"export"==e.checked?"checked":"",on:{click:function(t){e.checked="export"}}},[e._v("\n        导出(JSON文本)\n      ")]),s("button",{class:"import"==e.checked?"checked":"",on:{click:function(t){e.checked="import"}}},[e._v("\n        导入(JSON文本)\n      ")])]),"export"==e.checked?s("div",{staticClass:"tab-content"},[s("el-input",{attrs:{type:"textarea",rows:15,placeholder:"请输入内容"},model:{value:e.exportConfigStr,callback:function(t){e.exportConfigStr=t},expression:"exportConfigStr"}}),s("input",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.exportConfigStr,expression:"exportConfigStr",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copy,expression:"copy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"btn success",attrs:{type:"button",value:"复制到剪贴板"}})],1):s("div",{staticClass:"tab-content"},[s("el-input",{attrs:{type:"textarea",rows:15,placeholder:"请在此输入框粘贴配置文本"},model:{value:e.inputConfigStr,callback:function(t){e.inputConfigStr=t},expression:"inputConfigStr"}}),s("input",{staticClass:"btn success",attrs:{type:"button",value:"提交配置文本"},on:{click:e.importInput}})],1),s("div",{staticClass:"tab-row"},[s("input",{staticClass:"btn",attrs:{type:"button",value:"返回"},on:{click:e.close}})])])]):e._e()},r=[],l={components:{},name:"configBox",props:{top:{type:Number,default:0}},data(){return{configShadow:!1,checked:"export",textarea:"",exportConfigStr:null,inputConfigStr:null}},watch:{},mounted(){},methods:{init(){this.configShadow=!0,this.inputConfigStr=null,o["b"].get(null).then(e=>{delete e.holiday,this.exportConfigStr=JSON.stringify(e)})},close(){this.configShadow=!1,this.$emit("close",!1)},exportConfig(){},copy(e){this.$message({message:"已复制到剪贴板，请自行保存！",type:"success",center:!0})},onError(e){},importInput(){try{if("object"==typeof JSON.parse(this.inputConfigStr)){let e=JSON.parse(this.inputConfigStr);o["b"].set(e,e=>{this.$emit("success",!1),this.$message({message:"恭喜,导入配置成功！",type:"success",center:!0})})}}catch(e){this.$message({message:"导入失败，配置文本格式不正确！",type:"error",center:!0})}}}},c=l,d=(s("2875"),s("2877")),u=Object(d["a"])(c,i,r,!1,null,"9f21c3ca",null),h=u.exports;function p(e,t){t&&(e+=1462);var s=Date.parse(e);return(s-new Date(Date.UTC(1899,11,30)))/864e5}function g(e,t){for(var s={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}},a=0;a!=e.length;++a)for(var o=0;o!=e[a].length;++o){n.s.r>a&&(n.s.r=a),n.s.c>o&&(n.s.c=o),n.e.r<a&&(n.e.r=a),n.e.c<o&&(n.e.c=o);var i={v:e[a][o]};if(null!=i.v){var r=XLSX.utils.encode_cell({c:o,r:a});"number"===typeof i.v?i.t="n":"boolean"===typeof i.v?i.t="b":i.v instanceof Date?(i.t="n",i.z=XLSX.SSF._table[14],i.v=p(i.v)):i.t="s",s[r]=i}}return n.s.c<1e7&&(s["!ref"]=XLSX.utils.encode_range(n)),s}function f(){if(!(this instanceof f))return new f;this.SheetNames=[],this.Sheets={}}function v(e){for(var t=new ArrayBuffer(e.length),s=new Uint8Array(t),n=0;n!=e.length;++n)s[n]=255&e.charCodeAt(n);return t}function w(e,t,s){var n=t;n.unshift(e);var a="SheetJS",o=new f,i=g(n);const r=n.map(e=>e.map(e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length+5}:{wch:e.toString().length+5}));let l=r[0];for(let u=1;u<r.length;u++)for(let e=0;e<r[u].length;e++)l[e]["wch"]<r[u][e]["wch"]&&(l[e]["wch"]=r[u][e]["wch"]);i["!cols"]=l,o.SheetNames.push(a),o.Sheets[a]=i;var c=XLSX.write(o,{bookType:"xlsx",bookSST:!1,type:"binary"}),d=s||"列表";saveAs(new Blob([v(c)],{type:"application/octet-stream"}),d+".xlsx")}s("0ced"),s("0fd4"),s("1447");const{version:m}=s("9224");var b={components:{configBox:h},data(){return{fundListM:null,userId:null,configHref:null,holiday:null,disabled:!1,showGSZ:!1,showAmount:!1,showGains:!1,showCost:!1,showCostRate:!1,darkMode:!1,showBadge:1,BadgeContent:2,BadgeType:1,loadingFundList:!1,version:m,timer:null}},mounted(){this.initOption();const e=new Date,t=e.getFullYear(),s=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2);this.timer=`${t}${s}${n}`},watch:{},computed:{containerClass(){if(this.darkMode)return"darkMode"}},methods:{getFundData(){this.loadingFundList=!0,this.$message({message:"正在导出中，请稍候......",type:"success",center:!0});let e=this.fundListM.map(e=>e.code).join(","),t="https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=200&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid="+this.userId+"&Fcodes="+e;this.$axios.get(t).then(e=>{let t=e.Datas;this.dataList=[];let s=[];t.forEach(e=>{let t={code:e.FCODE,name:e.SHORTNAME},n=this.fundListM.filter(e=>e.code==t.code);t.num=n[0].num,t.cost=n[0].cost,s.push(t)}),this.dataList=s,this.downloadData(),this.loadingFundList=!1}).catch(e=>(this.$message({message:"导出失败！",type:"error",center:!0}),!1))},downloadData(){var e=["基金代码","基金名称","持有份额","成本价"],t=["code","name","num","cost"],s=this.formatJson(t,this.dataList);w(e,s,"funds.ops-coffee.cn")},formatJson(e,t){return t.map(t=>e.map(e=>t[e]))},importExcel(e){var t=e.target.files;let s=new FileReader;s.onload=e=>{try{let t=e.target.result,s=XLSX.read(t,{type:"binary"}),n=XLSX.utils.sheet_to_json(s.Sheets[s.SheetNames[0]]),a=[];n.forEach(e=>{let t={};t.code=e["基金代码"],t.num=e["持有份额"],t.cost=e["成本价"],a.push(t)}),o["b"].set({fundListM:a},e=>{this.initOption(),o["a"].runtime.sendMessage({type:"refresh"}),this.$message({message:"恭喜,导入基金列表成功！",type:"success",center:!0}),this.$refs.importExcel.value=null})}catch(t){return this.$message({message:"导入失败！",type:"error",center:!0}),!1}},s.readAsBinaryString(t[0])},changeOption(e,t,s){o["b"].set({[t]:e},()=>{this[t]=e,s&&o["a"].runtime.sendMessage({type:"refreshOption",data:{type:t,value:e}})})},initOption(){o["b"].get(["holiday","showNum","showAmount","showGains","showCost","showCostRate","showGSZ","darkMode","showBadge","BadgeContent","BadgeType","userId","fundListM"]).then(e=>{e.showNum?(o["b"].set({showNum:!1}),o["b"].set({showAmount:!0},()=>{this.showAmount=!0}),o["b"].set({showGains:!0},()=>{this.showGains=!0})):(this.showAmount=!!e.showAmount&&e.showAmount,this.showGains=!!e.showGains&&e.showGains),e.holiday?this.holiday=e.holiday:this.getHoliday(),e.userId?this.userId=e.userId:(this.userId=this.getGuid(),o["b"].set({userId:this.userId})),this.fundListM=e.fundListM?e.fundListM:[],this.showGSZ=!!e.showGSZ&&e.showGSZ,this.showCost=!!e.showCost&&e.showCost,this.showCostRate=!!e.showCostRate&&e.showCostRate,this.darkMode=!!e.darkMode&&e.darkMode,this.showBadge=e.showBadge?e.showBadge:1,this.BadgeContent=e.BadgeContent?e.BadgeContent:1,this.BadgeType=e.BadgeType?e.BadgeType:1})},exportConfig(){o["b"].get(null).then(e=>{delete e.holiday,this.configHref="data:text/plain,"+JSON.stringify(e),setTimeout(()=>{this.$refs["configMsg"].click()},200)})},importInput(e){let t=e.target.files;if(!t||!t.length)throw new Error("No files");let s=new FileReader;s.onload=t=>{try{let e=JSON.parse(t.target.result);o["b"].set(e,e=>{this.initOption(),o["a"].runtime.sendMessage({type:"refresh"}),this.$message({message:"恭喜,导入配置成功！",type:"success",center:!0,duration:1e3}),this.$refs.importInput.value=null})}catch(e){this.$message({message:"导入失败！",type:"error",center:!0,duration:1e3})}},s.readAsText(t[0])},successInput(){this.initOption(),o["a"].runtime.sendMessage({type:"refresh"})},openConfigBox(){this.$refs.configBox.init()},getHoliday(){this.disabled=!0;let e="https://blz.nosdn.127.net/sre/holiday.json";this.$axios.get(e).then(e=>{o["b"].set({holiday:e},()=>{this.holiday=e,this.disabled=!1})})},goBack(){this.$router.push("/")},openHoliday(){window.open("https://rabt.gitee.io/funds/holiday.json")},changeDarkMode(){o["b"].set({darkMode:this.darkMode})}}},y=b,x=(s("2155"),Object(d["a"])(y,n,a,!1,null,"78347330",null));t["default"]=x.exports}}]);