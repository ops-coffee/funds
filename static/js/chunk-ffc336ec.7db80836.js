(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffc336ec"],{"24f8":function(t,s,e){},3360:function(t,s,e){},"5f7c":function(t,s,e){"use strict";e("24f8")},"6afd":function(t,s,e){"use strict";e("cf28")},"7abe":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container",class:t.containerClass,style:t.diyContainer?{width:t.containerWidth+"px",height:t.containerHeight+"px"}:"",attrs:{id:"app"}},[e("div",[e("div",{staticClass:"tab-row flex"},[t._l(t.indFundData,(function(s,a){return e("div",{key:s.f12,staticClass:"tab-col indFund",class:t.drag,attrs:{draggable:t.isEdit},on:{click:function(e){e.stopPropagation(),!t.isEdit&&t.indDetail(s)},dragstart:function(e){return t.handleDragStart(e,s)},dragover:function(e){return e.preventDefault(),t.handleDragOver(e,s)},dragenter:function(e){return t.handleDragEnter(e,s,a)},dragend:function(e){return t.handleDragEnd(e,s)}}},[e("h5",[t._v("\n          "+t._s(s.f14)+"\n          "),t.isEdit?e("span",{staticClass:"dltBtn edit red button",on:{click:function(s){return t.dltIndFund(a)}}},[t._v("✖")]):t._e()]),e("div",{class:s.f3>=0?"up":"down"},[t._v(t._s(s.f2))]),e("div",{class:s.f3>=0?"up":"down"},[t._v("\n          "+t._s(s.f4)+"  "+t._s(s.f3)+"%\n        ")])])})),t.isEdit&&t.indFundData.length<4?e("div",{staticClass:"tab-col"},[t.showAddSeciInput?e("div",[e("div",{staticStyle:{"padding-top":"2px"}},[e("el-select",{staticStyle:{width:"110px"},attrs:{size:"mini","popper-append-to-body":!1,placeholder:"请选择"},model:{value:t.sltSeci,callback:function(s){t.sltSeci=s},expression:"sltSeci"}},t._l(t.userSeciList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",{staticStyle:{"margin-top":"4px"}},[e("input",{staticClass:"button",attrs:{type:"button",value:"取消"},on:{click:function(){return t.showAddSeciInput=!1}}}),e("input",{staticClass:"button",attrs:{type:"button",value:"确定"},on:{click:t.saveSeci}})])]):e("div",{staticClass:"addSeci",on:{click:function(){return t.showAddSeciInput=!0}}},[t._v("\n          添加\n        ")])]):t._e()],2),e("div",{staticClass:"tab-row"},[e("div",{staticStyle:{"text-align":"left"}},[t._v("\n        🔥 两市合计成交\n        "),e("span",[t._v("\n          "+t._s(((t.lastDataList[0].f6+t.lastDataList[1].f6)/1e4/1e4).toFixed(2))+"\n          亿元，")]),t._v("\n        上涨"),e("span",{staticClass:"up"},[t._v("\n          "+t._s(t.lastDataList[0].f104+t.lastDataList[1].f104)+"\n        ")]),t._v("\n        平盘"),e("span",[t._v(" "+t._s(t.lastDataList[0].f106+t.lastDataList[1].f106)+" ")]),t._v("\n        下跌"),e("span",{staticClass:"down"},[t._v("\n          "+t._s(t.lastDataList[0].f105+t.lastDataList[1].f105)+"\n        ")])])]),t.isEdit?e("div",{staticClass:"input-row"},[e("el-select",{staticStyle:{width:"300px"},attrs:{multiple:"",filterable:"","popper-append-to-body":!1,remote:"",size:"mini","reserve-keyword":"",placeholder:"添加新基金，支持按名称或基金代码搜索","remote-method":t.remoteMethod,loading:t.loading},on:{"visible-change":t.selectChange},model:{value:t.fundcode,callback:function(s){t.fundcode=s},expression:"fundcode"}},t._l(t.searchOptions,(function(s){return e("el-option",{key:s.value,attrs:{label:s.label,value:s.value}},[e("span",{staticStyle:{float:"left"}},[t._v(t._s(s.label))]),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px","margim-right":"20px","padding-right":"15px"}},[t._v(t._s(s.value))])])})),1),e("input",{staticClass:"button",attrs:{type:"button",value:"确定"},on:{click:t.save}})],1):t._e(),t.isEdit?e("p",{staticClass:"tips center"},[t._v("\n      部分新发基金或QDII基金可以搜索到，但可能无法获取估值\n    ")]):t._e(),e("div",{staticClass:"table-row",class:t.tableHeight},[e("table",[e("thead",[e("tr",[e("th",{staticClass:"align-left"},[t._v("基金名称("+t._s(t.dataList.length)+")")]),t.isEdit?e("th",[t._v("代码")]):t._e(),t.showGSZ&&!t.isEdit?e("th",{staticStyle:{"min-width":"50px"}},[t._v("\n              估算净值\n            ")]):t._e(),t.isEdit&&(t.showCostRate||t.showCost)?e("th",{staticStyle:{"text-align":"center"}},[t._v("\n              成本价\n            ")]):t._e(),t.showAmount?e("th",{staticClass:"pointer",staticStyle:{"min-width":"50px"},on:{click:function(s){return t.sortList("amount")}}},[t._v("\n              持有额\n              "),e("span",{staticClass:"down-arrow",class:t.sortType.amount})]):t._e(),t.showProportion?e("th",{staticClass:"pointer",staticStyle:{"min-width":"60px"},on:{click:function(s){return t.sortList("amount")}}},[t._v("\n                持仓占比\n                "),e("span",{staticClass:"down-arrow",class:t.sortType.amount})]):t._e(),t.showCost&&!t.isEdit?e("th",{staticClass:"pointer",staticStyle:{"min-width":"60px"},on:{click:function(s){return t.sortList("costGains")}}},[t._v("\n              持有收益\n              "),e("span",{staticClass:"down-arrow",class:t.sortType.costGains})]):t._e(),t.showCostRate&&!t.isEdit?e("th",{staticClass:"pointer",staticStyle:{"min-width":"72px"},on:{click:function(s){return t.sortList("costGainsRate")}}},[t._v("\n              持有收益率\n              "),e("span",{staticClass:"down-arrow",class:t.sortType.costGainsRate})]):t._e(),t.isEdit?t._e():e("th",{staticClass:"pointer",staticStyle:{"min-width":"60px"},on:{click:function(s){return t.sortList("gszzl")}}},[t._v("\n              涨跌幅\n              "),e("span",{staticClass:"down-arrow",class:t.sortType.gszzl})]),t.showGains&&!t.isEdit?e("th",{staticClass:"pointer",staticStyle:{"min-width":"60px"},on:{click:function(s){return t.sortList("gains")}}},[t._v("\n              估算收益\n              "),e("span",{staticClass:"down-arrow",class:t.sortType.gains})]):t._e(),t.isEdit?t._e():e("th",{staticStyle:{"min-width":"50px"}},[t._v("更新时间")]),t.isEdit&&(t.showAmount||t.showGains||t.showCost||t.showCostRate)?e("th",{staticStyle:{"text-align":"center"}},[t._v("\n              持有份额\n            ")]):t._e(),t.isEdit&&1==t.BadgeContent?e("th",{staticStyle:{"min-width":"28px"}},[t._v("\n              关注\n            ")]):t._e(),t.isEdit?e("th",{staticStyle:{"min-width":"28px"}},[t._v("删除")]):t._e()])]),e("tbody",t._l(t.dataList,(function(s,a){return e("tr",{key:s.fundcode,class:t.drag,attrs:{draggable:t.isEdit},on:{dragstart:function(e){return t.handleDragStart(e,s)},dragover:function(e){return e.preventDefault(),t.handleDragOver(e,s)},dragenter:function(e){return t.handleDragEnter(e,s,a)},dragend:function(e){return t.handleDragEnd(e,s)}}},[e("td",{class:t.isEdit?"fundName-noclick align-left":"fundName align-left",attrs:{title:s.name},on:{click:function(e){e.stopPropagation(),!t.isEdit&&t.fundDetail(s)}}},[t._v("\n              "+t._s(s.name)+"\n            ")]),t.isEdit?e("td",[t._v(t._s(s.fundcode))]):t._e(),t.showGSZ&&!t.isEdit?e("td",[t._v(t._s(s.gsz))]):t._e(),t.isEdit&&(t.showCostRate||t.showCost)?e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:s.cost,expression:"el.cost"}],staticClass:"button num",attrs:{placeholder:"持仓成本价",type:"text"},domProps:{value:s.cost},on:{input:[function(e){e.target.composing||t.$set(s,"cost",e.target.value)},function(e){return t.changeCost(s,a)}]}})]):t._e(),t.showAmount?e("td",[t._v(t._s(s.amount))]):t._e(),t.showProportion?e("td",[t._v(t._s(s.proportion+"%"))]):t._e(),t.showCost&&!t.isEdit?e("td",{class:s.costGains>=0?"up":"down"},[t._v("\n              "+t._s(s.costGains)+"\n            ")]):t._e(),t.showCostRate&&!t.isEdit?e("td",{class:s.costGainsRate>=0?"up":"down"},[t._v("\n              "+t._s(s.cost>0?s.costGainsRate+"%":"")+"\n            ")]):t._e(),t.isEdit?t._e():e("td",{class:s.gszzl>=0?"up":"down"},[t._v("\n              "+t._s(s.gszzl)+"%\n            ")]),t.showGains&&!t.isEdit?e("td",{class:s.gains>=0?"up":"down"},[t._v("\n              "+t._s(s.gains)+"\n            ")]):t._e(),t.isEdit?t._e():e("td",[t._v("\n              "+t._s(s.hasReplace?s.gztime.substr(5,5):s.gztime.substr(-5))+"\n              "),s.hasReplace?e("span",{staticClass:"hasReplace-tip"},[t._v("✔")]):t._e()]),t.isEdit&&(t.showAmount||t.showGains||t.showCost||t.showCostRate)?e("th",{staticStyle:{"text-align":"center"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.num,expression:"el.num"}],staticClass:"button num",attrs:{placeholder:"输入持有份额",type:"text"},domProps:{value:s.num},on:{input:[function(e){e.target.composing||t.$set(s,"num",e.target.value)},function(e){return t.changeNum(s,a)}]}})]):t._e(),t.isEdit&&1==t.BadgeContent?e("td",[e("input",{staticClass:"button edit",class:s.fundcode==t.RealtimeFundcode?"slt":"",attrs:{value:"✔",type:"button"},on:{click:function(e){return t.slt(s.fundcode)}}})]):t._e(),t.isEdit?e("td",[e("input",{staticClass:"button red edit",attrs:{value:"✖",type:"button"},on:{click:function(e){return t.dlt(s.fundcode)}}})]):t._e()])})),0)])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"input-row"},[e("el-switch",{attrs:{"active-color":"#484848","inactive-color":"#13ce66","inactive-text":"标准模式","active-text":"暗色模式"},on:{change:t.changeDarkMode},model:{value:t.darkMode,callback:function(s){t.darkMode=s},expression:"darkMode"}})],1),e("div",{staticClass:"input-row"},[e("input",{staticClass:"button",attrs:{type:"button",value:"行情中心"},on:{click:t.dashboard}}),t.isDuringDate?e("input",{staticClass:"button",attrs:{type:"button",value:t.isLiveUpdate?"暂停更新":"实时更新",title:t.isLiveUpdate?"正在实时更新，点击暂停":"已暂停，点击切换为实时更新"},on:{click:t.changeLiveUpdate}}):t._e(),t.isDuringDate?t._e():e("input",{staticClass:"button",attrs:{type:"button",value:"休市中"}}),e("input",{staticClass:"button",attrs:{type:"button",value:t.isEdit?"完成编辑":"编辑"},on:{click:function(s){t.isEdit=!t.isEdit}}}),e("input",{staticClass:"button",attrs:{type:"button",value:"设置"},on:{click:t.option}}),e("input",{staticClass:"button primary",attrs:{type:"button",value:"分析"},on:{click:t.analytics}})]),e("div",{staticClass:"input-row",staticStyle:{position:"relative"}},[t.showGains?e("input",{staticClass:"button",class:t.allGains>=0?"button-up":"button-down",attrs:{type:"button",title:t.allGains>=0?"d=====(￣▽￣*)b 赞一个":"∑(っ°Д°;)っ 大事不好啦",value:"当日收益："+t.allGains+"("+t.dailyYield+")"}}):t._e(),t.showCost||t.showCostRate?e("input",{staticClass:"button",class:t.allCostGains[0]>=0?"button-up":"button-down",attrs:{type:"button",title:t.allCostGains[0]>=0?"d=====(￣▽￣*)b 赞一个":"∑(っ°Д°;)っ 大事不好啦",value:"持有收益："+parseFloat(t.allCostGains[0]).toLocaleString("zh",{minimumFractionDigits:2})+(isNaN(t.allCostGains[1])?"":"("+t.allCostGains[1]+"%)")}}):t._e(),t.showTotalAssets?e("input",{staticClass:"button",attrs:{type:"button",value:"总资产："+t.allAmount}}):t._e(),e("div",{staticClass:"refresh",class:{isRefresh:t.isRefresh},attrs:{title:"手动刷新数据"},on:{click:t.refresh}},[e("i",{staticClass:"el-icon-refresh"})])]),e("market",{ref:"marketShadow",attrs:{darkMode:t.darkMode},on:{close:t.closeCharts}}),e("ind-detail",{ref:"indDetail",attrs:{darkMode:t.darkMode},on:{close:t.closeCharts}}),e("fund-detail",{ref:"charts",attrs:{fund:t.sltFund,darkMode:t.darkMode},on:{close:t.closeCharts}}),e("reward",{ref:"reward",on:{close:function(s){t.rewardShadow=!1}}})],1)},i=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.rewardShadow?e("div",{staticClass:"shadow"},[e("div",{staticClass:"reward-box",style:{marginTop:t.top+"px"}},[t._m(0),e("p",{staticClass:"tips reward-tips"},[t._v("\n      使用此服务不需要您的现金打赏，上边是一个微信公众号【天天选好基】的二维码\n    ")]),e("p",{staticClass:"tips reward-tips"},[t._v("\n      好朋友的一个试验项目，实盘分享持仓、收益、操作以及投资心得，期待您的关注\n    ")]),e("div",{staticClass:"tab-row"},[e("input",{staticClass:"btn success",attrs:{type:"button",value:"关注好了"},on:{click:t.close}}),e("input",{staticClass:"btn",attrs:{type:"button",value:"下次一定"},on:{click:t.close}})])])]):t._e()},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"qrcode"},[e("img",{attrs:{src:"https://blz.nosdn.127.net/sre/funds.jpg"}})])}],d={props:{top:{type:Number,default:0}},data(){return{rewardShadow:!1,checked:"wepay"}},mounted(){},methods:{init(){this.rewardShadow=!0},close(){this.rewardShadow=!1,this.$emit("close",!1)}}},l=d,r=(e("5f7c"),e("2877")),c=Object(r["a"])(l,n,o,!1,null,"74fb9a44",null),u=c.exports,h=e("1f5f"),p=e("45cf"),f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.boxShadow?e("div",{staticClass:"shadow",class:t.darkMode?"darkMode":""},[e("div",{staticClass:"content-box"},[e("h5",[t._v("行情中心")]),e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[e("el-tab-pane",{attrs:{lazy:"",label:"大盘资金",name:"first"}},[e("market-line",{ref:"first",attrs:{darkMode:t.darkMode}})],1),e("el-tab-pane",{attrs:{lazy:"",label:"行业板块",name:"second"}},[e("market-bar",{ref:"second",attrs:{darkMode:t.darkMode}})],1),e("el-tab-pane",{attrs:{lazy:"",label:"北向资金",name:"third"}},[e("market-S2N",{ref:"third",attrs:{darkMode:t.darkMode}})],1),e("el-tab-pane",{attrs:{lazy:"",label:"南向资金",name:"fourth"}},[e("market-N2S",{ref:"fourth",attrs:{darkMode:t.darkMode}})],1)],1),e("div",{staticClass:"tab-row"},[e("input",{staticClass:"btn",attrs:{type:"button",value:"返回列表"},on:{click:t.close}})])],1)]):t._e()},v=[],g=e("7fd2"),m=e("5965"),w=e("bfdc"),b=e("3117"),y={components:{marketLine:g["a"],marketBar:m["a"],marketS2N:w["a"],marketN2S:b["a"]},name:"market",props:{darkMode:{type:Boolean,default:!1}},data(){return{activeName:"first",boxShadow:!1}},watch:{},mounted(){},methods:{handleClick(t,s){this.activeName=t.name},init(){this.boxShadow=!0},close(){this.boxShadow=!1,this.$emit("close",!1)}}},C=y,_=(e("c602"),Object(r["a"])(C,f,v,!1,null,"50f0362c",null)),L=_.exports,x=e("527b");const{version:k}=e("9224");let D=null;function S(t,s=700){null!==D&&clearTimeout(D),D=setTimeout(t,s)}var M={components:{reward:u,fundDetail:p["a"],indDetail:h["a"],market:L},data(){return{isEdit:!1,fundcode:"",isAdd:!1,indFundData:[],isLiveUpdate:!1,isDuringDate:!1,RealtimeFundcode:null,dataList:[],dataListDft:[],myVar:null,myVar1:null,rewardShadow:!1,checked:"wepay",showTotalAssets:!1,showProportion:!1,showGains:!1,showAmount:!1,showCost:!1,showCostRate:!1,showGSZ:!1,fundList:["001618"],fundListM:[],sortType:{gszzl:"none",amount:"none",gains:"none",costGains:"none",costGainsRate:"none"},sortTypeObj:{name:null,value:null},searchOptions:[],value:[],list:[],loading:!1,dragging:null,showAddSeciInput:!1,seciList:["1.000001","1.000300","0.399001","0.399006"],allSeciList:[{value:"1.000001",label:"上证指数"},{value:"1.000300",label:"沪深300"},{value:"0.399001",label:"深证成指"},{value:"1.000688",label:"科创50"},{value:"0.399006",label:"创业板指"},{value:"0.399005",label:"中小板指"},{value:"100.HSI",label:"恒生指数"},{value:"100.DJIA",label:"道琼斯"},{value:"100.NDX",label:"纳斯达克"},{value:"100.SPX",label:"标普500"}],sltSeci:"",darkMode:!1,diyContainer:!1,containerWidth:790,containerHeight:590,detailShadow:!1,sltFund:{},localVersion:k,BadgeContent:1,showBadge:1,userId:null,isRefresh:!1,marketShadow:!1,lastDataList:[{},{}]}},mounted(){x["b"].get(["RealtimeFundcode","fundListM","showTotalAssets","showProportion","showAmount","showGains","fundList","seciList","darkMode","isLiveUpdate","showCost","showCostRate","showGSZ","version","showBadge","BadgeContent","userId","sortTypeObj"]).then(t=>{if(this.fundList=t.fundList?t.fundList:this.fundList,t.fundListM)this.fundListM=t.fundListM;else{for(const t of this.fundList){let s={code:t,num:0};this.fundListM.push(s)}x["b"].set({fundListM:this.fundListM})}t.userId?this.userId=t.userId:(this.userId=this.getGuid(),x["b"].set({userId:this.userId})),this.darkMode=!!t.darkMode&&t.darkMode,this.seciList=t.seciList?t.seciList:this.seciList,this.showTotalAssets=!!t.showTotalAssets&&t.showTotalAssets,this.showProportion=!!t.showProportion&&t.showProportion,this.showAmount=!!t.showAmount&&t.showAmount,this.showGains=!!t.showGains&&t.showGains,this.RealtimeFundcode=t.RealtimeFundcode,this.isLiveUpdate=!!t.isLiveUpdate&&t.isLiveUpdate,this.showCost=!!t.showCost&&t.showCost,this.showCostRate=!!t.showCostRate&&t.showCostRate,this.showGSZ=!!t.showGSZ&&t.showGSZ,this.BadgeContent=t.BadgeContent?t.BadgeContent:1,this.showBadge=t.showBadge?t.showBadge:1,this.sortTypeObj=t.sortTypeObj?t.sortTypeObj:{},this.getMarketData(),this.getIndFundData(),this.getData(),this.checkInterval(!0)})},computed:{allGains(){let t=0;return this.dataList.forEach(s=>{t+=parseFloat(s.gains)}),t=t.toFixed(2),t},allAmount(){let t=0;return this.dataList.forEach(s=>{t+=parseFloat(s.amount)}),t=t.toFixed(2),t},dailyYield(){return this.allAmount?(100*this.allGains/this.allAmount).toFixed(2)+"%":"0%"},allCostGains(){let t=0,s=0;this.dataList.forEach(e=>{t+=parseFloat(e.costGains),s+=parseFloat(e.amount)}),t=t.toFixed(2);let e=(100*t/(s-t)).toFixed(2);return[t,e]},containerClass(){let t="";if(this.darkMode&&(t+="darkMode "),this.detailShadow)t+="detail-container";else{let t=[this.showAmount,this.showGains,this.showCost,this.showCostRate,this.showGSZ],s=0;t.forEach(t=>{t&&s++})}return t},userSeciList(){return this.allSeciList.filter(t=>-1==this.seciList.indexOf(t.value))},tableHeight(){if(this.isEdit)return"table-more-height"},drag(){return this.isEdit?"table-drag":""}},watch:{isEdit(t){if(t){clearInterval(this.myVar),clearInterval(this.myVar1),this.dataList=[...this.dataListDft];for(const t in this.sortType)this.sortType.hasOwnProperty(t)&&(this.sortType[t]="none")}else this.checkInterval()}},methods:{refresh(){this.getData(),this.isRefresh=!0,setTimeout(()=>{this.isRefresh=!1},1500)},getGuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var s=16*Math.random()|0,e="x"==t?s:3&s|8;return e.toString(16)}))},indDetail(t){this.detailShadow=!0,this.$refs.indDetail.init(t)},fundDetail(t){this.sltFund=t,this.detailShadow=!0,this.$refs.charts.init()},closeCharts(){this.detailShadow=!1},market(){this.detailShadow=!0,this.$refs.marketShadow.init()},checkInterval(t){clearInterval(this.myVar),clearInterval(this.myVar1),x["a"].runtime.sendMessage({type:"DuringDate"},s=>{this.isDuringDate=s.farewell,this.isLiveUpdate&&this.isDuringDate?(t||(this.getIndFundData(),this.getData()),this.myVar=setInterval(()=>{this.getIndFundData()},5e3),this.myVar1=setInterval(()=>{this.getData(),this.getMarketData()},6e4)):(clearInterval(this.myVar),clearInterval(this.myVar1))})},selectChange(){this.searchOptions=[]},remoteMethod(t){""!==t?(this.loading=!0,this.$axios.jsonp("FundSuggestList","https://m.1234567.com.cn/data/FundSuggestList.js").then(s=>{let e=s.Datas.filter(s=>s.indexOf(t)>-1).map(t=>{let s=t.split("|");return{CODE:s[0],NAME:s[2]}});this.searchOptions=e.filter(t=>{let s=this.fundListM.some((s,e,a)=>s.code==t.CODE);return!s}).map(t=>({value:t.CODE,label:t.NAME})),this.loading=!1}).catch(t=>{console.log(t)})):this.searchOptions=[]},option(){this.$router.push("/option")},analytics(){this.$router.push("/analytics")},dashboard(){this.$router.push("/dashboard")},reward(){this.rewardShadow=!0,this.$refs.reward.init()},sortList(t){for(const s in this.sortType)this.sortType.hasOwnProperty(s)&&s!=t&&(this.sortType[s]="none");this.sortType[t]="desc"==this.sortType[t]?"asc":"asc"==this.sortType[t]?"none":"desc","none"==this.sortType[t]?this.dataList=[...this.dataListDft]:this.dataList=this.dataList.sort(this.compare(t,this.sortType[t])),this.sortTypeObj={name:t,type:this.sortType[t]},x["b"].set({sortTypeObj:this.sortTypeObj})},compare(t,s){return function(e,a){var i=e[t],n=a[t];return"asc"==s?i-n:n-i}},changeDarkMode(){x["b"].set({darkMode:this.darkMode})},changeLiveUpdate(){x["b"].set({isLiveUpdate:!this.isLiveUpdate},()=>{this.isLiveUpdate=!this.isLiveUpdate,this.checkInterval()})},saveSeci(){this.seciList.push(this.sltSeci),x["b"].set({seciList:this.seciList},()=>{this.sltSeci="",this.getIndFundData()})},dltIndFund(t){this.seciList.splice(t,1),x["b"].set({seciList:this.seciList},()=>{this.getIndFundData()})},getMarketData(){this.loading=!0;let t="https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&secids=1.000001,0.399001&fields=f1,f2,f3,f4,f6,f12,f13,f104,f105,f106&_="+(new Date).getTime();this.$axios.get(t).then(t=>{this.loading=!1,this.lastDataList=t.data.diff})},getIndFundData(){let t=this.seciList.join(","),s="https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f2,f3,f4,f12,f13,f14&secids="+t+"&_="+(new Date).getTime();this.$axios.get(s).then(t=>{this.indFundData=t.data.diff})},getData(t){let s=this.fundListM.map(t=>t.code).join(","),e="https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=50&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid="+this.userId+"&Fcodes="+s;this.$axios.get(e).then(s=>{let e=s.Datas;this.dataList=[];let a=[];e.forEach(t=>{let s={fundcode:t.FCODE,name:t.SHORTNAME,jzrq:t.PDATE,dwjz:t.NAV,gsz:isNaN(t.GSZ)?null:t.GSZ,gszzl:isNaN(t.GSZZL)?0:t.GSZZL,gztime:t.GZTIME};t.PDATE==t.GZTIME.substr(0,10)&&(s.gsz=t.NAV,s.gszzl=isNaN(t.NAVCHGRT)?0:t.NAVCHGRT,s.hasReplace=!0);let e=this.fundListM.filter(t=>t.code==s.fundcode);s.num=e[0].num,s.cost=e[0].cost,s.amount=this.calculateMoney(s),s.gains=this.calculate(s,s.hasReplace),s.costGains=this.calculateCost(s),s.costGainsRate=this.calculateCostRate(s),s.fundcode==this.RealtimeFundcode&&1==this.showBadge&&1==this.BadgeContent&&x["a"].runtime.sendMessage({type:"refreshBadge",data:s}),a.push(s)}),1==this.showBadge&&2==this.BadgeContent&&x["a"].runtime.sendMessage({type:"refreshBadgeAllGains",data:e}),this.dataListDft=[...a],"add"==t?this.dataList=a:"none"!=this.sortTypeObj.type?(this.sortType[this.sortTypeObj.name]=this.sortTypeObj.type,this.dataList=a.sort(this.compare(this.sortTypeObj.name,this.sortTypeObj.type))):this.dataList=a;let i=a.reduce((t,s)=>t+parseFloat(s.amount),0);i=i.toFixed(1),this.dataList=a.map(t=>({...t,proportion:(t.amount/i*100).toFixed(2)}))}).catch(t=>{console.log(t)})},changeNum(t,s){S(()=>{for(let s of this.fundListM)s.code==t.fundcode&&(s.num=t.num);x["b"].set({fundListM:this.fundListM},()=>{t.amount=this.calculateMoney(t),t.gains=this.calculate(t,t.hasReplace),t.costGains=this.calculateCost(t),x["a"].runtime.sendMessage({type:"refresh"})})})},changeCost(t,s){S(()=>{for(let s of this.fundListM)s.code==t.fundcode&&(s.cost=t.cost);x["b"].set({fundListM:this.fundListM},()=>{t.costGains=this.calculateCost(t),t.costGainsRate=this.calculateCostRate(t)})})},calculateMoney(t){let s=(t.dwjz*t.num).toFixed(2);return s},calculate(t,s){var e=0;let a=t.num?t.num:0;return s?e=((t.dwjz-t.dwjz/(1+.01*t.gszzl))*a).toFixed(2):t.gsz&&(e=((t.gsz-t.dwjz)*a).toFixed(2)),e},calculateCost(t){if(t.cost){let s=((t.dwjz-t.cost)*t.num).toFixed(2);return s}return 0},calculateCostRate(t){if(t.cost&&0!=t.cost){let s=((t.dwjz-t.cost)/t.cost*100).toFixed(2);return s}return 0},save(){this.fundcode.forEach(t=>{let s={code:t,num:0};this.fundListM.push(s)}),x["b"].set({fundListM:this.fundListM},()=>{this.fundcode=[],this.getData("add"),x["a"].runtime.sendMessage({type:"refresh"})})},slt(t){t==this.RealtimeFundcode?x["b"].set({RealtimeFundcode:null},()=>{this.RealtimeFundcode=null,x["a"].runtime.sendMessage({type:"endInterval"})}):x["b"].set({RealtimeFundcode:t},()=>{this.RealtimeFundcode=t,x["a"].runtime.sendMessage({type:"refresh"})})},dlt(t){this.fundListM=this.fundListM.filter((function(s){return s.code!=t})),t==this.RealtimeFundcode&&x["b"].set({RealtimeFundcode:null},()=>{this.RealtimeFundcode=null,1==this.BadgeContent&&x["a"].runtime.sendMessage({type:"endInterval"})}),x["b"].set({fundListM:this.fundListM},()=>{this.dataList=this.dataList.filter((function(s){return s.fundcode!=t})),2==this.BadgeContent&&x["a"].runtime.sendMessage({type:"refresh"})})},handleDragStart(t,s){this.dragging=s},handleDragOver(t){t.dataTransfer.dropEffect="move"},handleDragEnd(t,s){this.dragging=null,s.fundcode?x["b"].set({fundListM:this.fundListM},()=>{}):s.f12&&x["b"].set({seciList:this.seciList},()=>{})},handleDragEnter(t,s,e){if(this.dragging&&this.dragging.fundcode&&s.fundcode){if(t.dataTransfer.effectAllowed="move",s.fundcode===this.dragging.fundcode)return;const e=[...this.fundListM],a=e.findIndex(t=>t.code==this.dragging.fundcode),i=e.findIndex(t=>t.code==s.fundcode);e.splice(i,0,...e.splice(a,1)),this.fundListM=e;const n=[...this.dataList],o=n.findIndex(t=>t.fundcode==this.dragging.fundcode),d=n.findIndex(t=>t.fundcode==s.fundcode);n.splice(d,0,...n.splice(o,1)),this.dataList=n}else if(this.dragging&&this.dragging.f12&&s.f12){if(t.dataTransfer.effectAllowed="move",s.f12===this.dragging.f12)return;const e=[...this.seciList],a=e.findIndex(t=>t.split(".")[1]==this.dragging.f12),i=e.findIndex(t=>t.split(".")[1]==s.f12);e.splice(i,0,...e.splice(a,1)),this.seciList=e;const n=[...this.indFundData],o=n.findIndex(t=>t.f12==this.dragging.f12),d=n.findIndex(t=>t.f12==s.f12);n.splice(d,0,...n.splice(o,1)),this.indFundData=n}}},destroyed(){clearInterval(this.myVar),clearInterval(this.myVar1)}},E=M,F=(e("6afd"),Object(r["a"])(E,a,i,!1,null,"d41d5b68",null));s["default"]=F.exports},9224:function(t){t.exports=JSON.parse('{"name":"funds.ops-coffee.cn","version":"3.7.0","private":true,"scripts":{"serve":"vue-cli-service serve","dev":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","analyz":"vue-cli-service build --mode analyze"},"dependencies":{"axios":"^0.19.0","babel-polyfill":"^6.26.0","core-js":"^2.6.5","echarts":"^4.2.1","element-ui":"^2.10.1","file-saver":"^2.0.5","vue":"^2.6.10","vue-router":"3.0.3","vue-clipboard2":"^0.3.1","xlsx":"^0.16.9"},"devDependencies":{"@vue/cli-service":"^3.9.0","babel-plugin-component":"^1.1.1","eslint":"^5.16.0","eslint-plugin-vue":"^5.0.0","vue-template-compiler":"^2.6.10","sass-loader":"^7.0.3","script-loader":"^0.7.2","node-sass":"^4.9.2"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/essential","eslint:recommended"],"rules":{"no-console":0},"parserOptions":{"parser":"babel-eslint"}},"postcss":{"plugins":{"autoprefixer":{}}},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}')},c602:function(t,s,e){"use strict";e("3360")},cf28:function(t,s,e){}}]);