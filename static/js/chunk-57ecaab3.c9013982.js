(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ecaab3"],{"527b":function(e,t,s){"use strict";s.d(t,"b",(function(){return f})),s.d(t,"a",(function(){return G}));var a=s("bc3a"),n=s.n(a);const o=Object.prototype.toString;var i,l,r=null,d=[],c=1,u=1,h=1,g=null;function p(e){return"[object Object]"===o.call(e)}function w(){}const f={get:function(e){const t={};return e||Reflect.ownKeys(localStorage).forEach((function(e){let s=localStorage[e];try{s=JSON.parse(localStorage[e])}catch(a){}t[e]=s})),"string"===typeof e&&(e=[e]),Array.isArray(e)&&e.forEach(e=>{let s=localStorage.getItem(e);try{s=JSON.parse(localStorage.getItem(e))}catch(a){}t[e]=s}),Promise.resolve(t)},set:function(e,t=w){if(!p(e))return Promise.reject("Please pass in an object");Reflect.ownKeys(e).forEach((function(t){localStorage.setItem(t,JSON.stringify(e[t]))})),t()}},v=()=>{var e=8,t=60*(new Date).getTimezoneOffset()*1e3,s=(new Date).getTime(),a=new Date(s+t+60*e*60*1e3);if(x(a))return!1;var n=new Date,o=new Date,i=new Date,l=new Date;return n.setHours(9,30,0),o.setHours(11,35,0),i.setHours(13,0,0),l.setHours(15,5,0),"6"!=a.getDay()&&"0"!=a.getDay()&&(a>=n&&a<=o||a>=i&&a<=l)},m=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,s="x"==e?t:3&t|8;return s.toString(16)}));var b=()=>{let e="https://blz.nosdn.127.net/sre/holiday.json";return n.a.get(e)},x=e=>{var t=e.getMonth()+1,s=e.getFullYear(),a=e.getDate();t>=1&&t<=9&&(t="0"+t),a>=0&&a<=9&&(a="0"+a);let n=!1;var o=t+"-"+a;let i=l.data;for(const l in i)if(i.hasOwnProperty(l)){const e=i[l];if(l==s)for(const t in e)if(e.hasOwnProperty(t)){const s=e[t];o==t&&s.holiday&&(n=!0)}}return n},y=e=>{let t=parseFloat(e),s=Math.abs(t);return s<10?t.toFixed(2):s<100?t.toFixed(1):s<1e3?t.toFixed(0):s<1e4?(t/1e3).toFixed(1)+"k":s<1e6?(t/1e3).toFixed(0)+"k":s<1e7?(t/1e6).toFixed(1)+"M":(t/1e6).toFixed(0)+"M"},C=(e,t,s)=>{let a=null;a=1==s?e:d.map(e=>e.code).join(",");let o="https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=50&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid="+g+"&Fcodes="+a;n.a.get(o).then(e=>{let t=0,a=0,n=null;if(1==s){let t=e.Datas[0],s={fundcode:t.FCODE,name:t.SHORTNAME,jzrq:t.PDATE,dwjz:t.NAV,gsz:isNaN(t.GSZ)?null:t.GSZ,gszzl:isNaN(t.GSZZL)?0:t.GSZZL,gztime:t.GZTIME,num:0},a=d.filter(e=>e.code==s.fundcode);if(!a.length)return!1;s.num=a[0].num;var o=0;let i=s.num?s.num:0;t.PDATE==t.GZTIME.substr(0,10)?(s.gsz=t.NAV,s.gszzl=isNaN(t.NAVCHGRT)?0:t.NAVCHGRT,o=((s.dwjz-s.dwjz/(1+.01*s.gszzl))*i).toFixed(1)):s.gsz&&(o=((s.gsz-s.dwjz)*i).toFixed(1)),n=1==h?s.gszzl+"%":0!=i?y(o):"0"}else e.Datas.forEach(e=>{let s=d.filter(t=>t.code==e.FCODE),n=s[0].num?s[0].num:0;t+=e.NAV*n;var o=0;if(e.PDATE==e.GZTIME.substr(0,10))o=(e.NAV-e.NAV/(1+.01*e.NAVCHGRT))*n;else{let t=isNaN(e.GSZ)?null:e.GSZ;t&&(o=(t-e.NAV)*n)}a+=o}),n=1==h?0==t||0==a?"0":(100*a/t).toFixed(2)+"%":y(a);G.browserAction.setBadgeText({text:n})}).catch(e=>{})},B=(e,t=1)=>{A(i);let s=v();e=e,C(e,s,t),i=setInterval(()=>{v()&&C(e,!0,t)},12e4)},A=()=>{clearInterval(i),G.browserAction.setBadgeText({text:"funds.ops-coffee.cn"})},_=e=>{1==c&&1==u?e?B(e):A():1==c&&2==u?B(null,2):A()};const k=()=>{f.get(["holiday","fundListM","RealtimeFundcode","showBadge","BadgeContent","BadgeType","userId"]).then(e=>{r=e.RealtimeFundcode?e.RealtimeFundcode:null,d=e.fundListM?e.fundListM:[],c=e.showBadge?e.showBadge:1,u=e.BadgeContent?e.BadgeContent:1,h=e.BadgeType?e.BadgeType:1,e.userId?g=e.userId:(g=m(),f.set({userId:g})),e.holiday?(l=e.holiday,_(r)):b().then(e=>{f.set({holiday:e},()=>{l=e,_(r)})})})};k();const G={runtime:{sendMessage:function(e,t=w){if("DuringDate"==e.type){let e=v();t({farewell:e})}if("refresh"==e.type&&k(),"refreshBadgeAllGains"==e.type){let t=0,s=0;e.data.forEach(e=>{let a=d.filter(t=>t.code==e.FCODE),n=a[0].num?a[0].num:0;t+=e.NAV*n;var o=0;if(e.PDATE==e.GZTIME.substr(0,10))o=(e.NAV-e.NAV/(1+.01*e.NAVCHGRT))*n;else{let t=isNaN(e.GSZ)?null:e.GSZ;t&&(o=(t-e.NAV)*n)}s+=o});let a=null;a=1==h?0==t||0==s?"0":(100*s/t).toFixed(2)+"%":y(s),G.browserAction.setBadgeText({text:a});v()}if("endInterval"==e.type&&A(),"startInterval"==e.type&&B(e.id),"refreshOption"==e.type){switch(e.data.type){case"showBadge":c=e.data.value;break;case"BadgeContent":u=e.data.value;break;case"BadgeType":h=e.data.value;break}k()}if("refreshBadge"==e.type){let t=null;t=1==h?e.data.gszzl+"%":y(e.data.gains),G.browserAction.setBadgeText({text:t});v()&&e.data.gszzl}}},browserAction:{setBadgeText:function(e){document.title=e.text}}}},"536a":function(e,t,s){},9224:function(e){e.exports=JSON.parse('{"name":"funds.ops-coffee.cn","version":"3.7.0","private":true,"scripts":{"serve":"vue-cli-service serve","dev":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","analyz":"vue-cli-service build --mode analyze"},"dependencies":{"axios":"^0.19.0","babel-polyfill":"^6.26.0","core-js":"^2.6.5","echarts":"^4.2.1","element-ui":"^2.10.1","vue":"^2.6.10","vue-router":"3.0.3"},"devDependencies":{"@vue/cli-service":"^3.9.0","babel-plugin-component":"^1.1.1","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","vue-template-compiler":"^2.6.10","sass-loader":"^7.0.3","node-sass":"^4.9.2"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{"no-console":0},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}')},a541:function(e,t,s){"use strict";s("536a")},d7e3:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",class:e.containerClass,attrs:{id:"app"}},[s("div",[s("ul",{staticClass:"setting-list"},[s("li",[s("div",{staticClass:"list-title"},[e._v("\n          节假日信息\n          "),s("button",{staticClass:"btn",attrs:{disabled:e.disabled,title:"点击更新节假日信息"},on:{click:e.getHoliday}},[e._v("\n            更新\n          ")]),e.disabled?s("span",{staticClass:"loading"},[e._v("更新中。。。")]):e._e()]),s("p",[e.holiday?s("span",[e._v("\n            当前版本：v"+e._s(e.holiday.version)+"    最后节假日日期："+e._s(e.holiday.lastDate)+"\n          ")]):e._e()]),s("p",[e._v("\n          tips：更新节假日信息，可以在节假日暂停更新估值，节假日信息会不定时更新。\n          "),s("a",{attrs:{href:"#"},on:{click:e.openHoliday}},[e._v("查看最新版")])])]),s("li",[s("div",{staticClass:"list-title"},[e._v("主题设置")]),s("div",{staticClass:"select-row"},[s("el-switch",{attrs:{"active-color":"#484848","inactive-color":"#13ce66","inactive-text":"标准模式","active-text":"暗色模式"},on:{change:e.changeDarkMode},model:{value:e.darkMode,callback:function(t){e.darkMode=t},expression:"darkMode"}})],1)]),s("li",[s("div",{staticClass:"list-title"},[e._v("Title设置")]),s("div",{staticClass:"select-row"},[e._v("\n          开关：\n          "),s("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeOption(t,"showBadge",!0)}},model:{value:e.showBadge,callback:function(t){e.showBadge=t},expression:"showBadge"}},[s("el-radio",{attrs:{border:"",label:1}},[e._v("增强模式")]),s("el-radio",{attrs:{border:"",label:2}},[e._v("普通模式")])],1)],1),1==e.showBadge?s("div",{staticClass:"select-row"},[e._v("\n          内容：\n          "),s("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeOption(t,"BadgeContent",!0)}},model:{value:e.BadgeContent,callback:function(t){e.BadgeContent=t},expression:"BadgeContent"}},[s("el-radio",{attrs:{border:"",label:1}},[e._v("单个基金")]),s("el-radio",{attrs:{border:"",label:2}},[e._v("所有基金")])],1)],1):e._e(),1==e.showBadge?s("div",{staticClass:"select-row"},[e._v("\n          类型：\n          "),s("el-radio-group",{attrs:{size:"small"},on:{change:function(t){return e.changeOption(t,"BadgeType",!0)}},model:{value:e.BadgeType,callback:function(t){e.BadgeType=t},expression:"BadgeType"}},[s("el-radio",{attrs:{border:"",label:1}},[e._v("日收益率")]),s("el-radio",{attrs:{border:"",label:2}},[e._v("日收益额")])],1)],1):e._e(),s("p",{staticStyle:{"margin-top":"5px"}},[e._v("\n          tips：若选择增强模式会在title中显示日收益绿或日收益额，当选择单个基金时要在基金编辑模式中选择特别关注的基金\n        ")])]),s("li",[s("div",{staticClass:"list-title"},[e._v("基金列表展示内容设置")]),s("div",{staticClass:"select-row"},[s("span",[e._v("显示估算净值")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showGSZ")}},model:{value:e.showGSZ,callback:function(t){e.showGSZ=t},expression:"showGSZ"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示持有金额")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showAmount")}},model:{value:e.showAmount,callback:function(t){e.showAmount=t},expression:"showAmount"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示估值收益")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showGains")}},model:{value:e.showGains,callback:function(t){e.showGains=t},expression:"showGains"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示持有收益")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showCost")}},model:{value:e.showCost,callback:function(t){e.showCost=t},expression:"showCost"}})],1),s("div",{staticClass:"select-row"},[s("span",[e._v("显示持有收益率")]),s("el-switch",{on:{change:function(t){return e.changeOption(t,"showCostRate")}},model:{value:e.showCostRate,callback:function(t){e.showCostRate=t},expression:"showCostRate"}})],1)]),s("li",[s("div",{staticClass:"list-title"},[e._v("基金配置信息导入与导出")]),s("div",{staticStyle:{padding:"8px 0 10px"}},[s("input",{staticClass:"btn",attrs:{type:"button",value:"导出配置"},on:{click:e.exportConfig}}),s("a",{ref:"configMsg",staticClass:"exportBtn",attrs:{href:e.configHref,download:e.timer+"基金配置.json"}}),s("a",{staticClass:"uploadFile btn",attrs:{href:"javascript:;"}},[e._v("导入配置\n            "),s("input",{ref:"importInput",attrs:{type:"file"},on:{change:e.importInput}})])]),e._m(0)]),s("button",{staticClass:"btn primary",staticStyle:{"margin-top":"15px"},on:{click:e.goBack}},[e._v("\n        返回主页\n      ")])])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\n          tips：若想在插件和浏览器以及多个不同浏览器之间同步数据可以使用导入导出功能，详细介绍点这里：\n          "),s("a",{attrs:{href:"https://blog.ops-coffee.cn/s/AG9dc0G7mRaTPZ-3QQgX9Q",target:"_blank"}},[e._v("查看详细介绍")])])}],o=s("527b");const{version:i}=s("9224");var l={components:{},data(){return{configHref:null,holiday:null,disabled:!1,showGSZ:!1,showAmount:!1,showGains:!1,showCost:!1,showCostRate:!1,darkMode:!1,showBadge:1,BadgeContent:2,BadgeType:1,version:i,timer:null}},mounted(){this.initOption();const e=new Date,t=e.getFullYear(),s=("0"+(e.getMonth()+1)).slice(-2),a=("0"+e.getDate()).slice(-2);this.timer=`${t}${s}${a}`},watch:{},computed:{containerClass(){if(this.darkMode)return"darkMode"}},methods:{changeOption(e,t,s){o["b"].set({[t]:e},()=>{this[t]=e,s&&o["a"].runtime.sendMessage({type:"refreshOption",data:{type:t,value:e}})})},initOption(){o["b"].get(["holiday","showNum","showAmount","showGains","showCost","showCostRate","showGSZ","darkMode","showBadge","BadgeContent","BadgeType"]).then(e=>{e.showNum?(o["b"].set({showNum:!1}),o["b"].set({showAmount:!0},()=>{this.showAmount=!0}),o["b"].set({showGains:!0},()=>{this.showGains=!0})):(this.showAmount=!!e.showAmount&&e.showAmount,this.showGains=!!e.showGains&&e.showGains),e.holiday?this.holiday=e.holiday:this.getHoliday(),this.showGSZ=!!e.showGSZ&&e.showGSZ,this.showCost=!!e.showCost&&e.showCost,this.showCostRate=!!e.showCostRate&&e.showCostRate,this.darkMode=!!e.darkMode&&e.darkMode,this.showBadge=e.showBadge?e.showBadge:1,this.BadgeContent=e.BadgeContent?e.BadgeContent:1,this.BadgeType=e.BadgeType?e.BadgeType:1})},exportConfig(){o["b"].get(null).then(e=>{delete e.holiday,this.configHref="data:text/plain,"+JSON.stringify(e),setTimeout(()=>{this.$refs["configMsg"].click()},200)})},importInput(e){let t=e.target.files;if(!t||!t.length)throw new Error("No files");let s=new FileReader;s.onload=t=>{try{let e=JSON.parse(t.target.result);return o["b"].set(e,e=>{this.initOption(),o["a"].runtime.sendMessage({type:"refresh"}),this.$message({message:"恭喜,导入配置成功！",type:"success",center:!0,duration:1e3}),this.$refs.importInput.value=null}),e}catch(e){this.$message({message:"导入失败！",type:"error",center:!0,duration:1e3})}},s.readAsText(t[0])},getHoliday(){this.disabled=!0;let e="https://blz.nosdn.127.net/sre/holiday.json";this.$axios.get(e).then(e=>{o["b"].set({holiday:e},()=>{this.holiday=e,this.disabled=!1})})},goBack(){this.$router.push("/")},openHoliday(){window.open("https://rabt.gitee.io/funds/holiday.json")},changeDarkMode(){o["b"].set({darkMode:this.darkMode})}}},r=l,d=(s("a541"),s("2877")),c=Object(d["a"])(r,a,n,!1,null,"33b99cfc",null);t["default"]=c.exports}}]);