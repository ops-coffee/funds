(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-493f5d82"],{"34e7":function(t,s,a){"use strict";a("4399")},4399:function(t,s,a){},f5b5:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container",class:t.containerClass,attrs:{id:"app"}},[a("div",[a("div",{staticClass:"tab-row flex"},t._l(t.indFundData,(function(s,e){return a("div",{key:s.f12,staticClass:"tab-col indFund"},[a("h5",[t._v(t._s(s.f14))]),a("div",{class:s.f3>=0?"up":"down"},[t._v(t._s(s.f2))]),a("div",{class:s.f3>=0?"up":"down"},[t._v("\n          "+t._s(s.f4)+"  "+t._s(s.f3)+"%\n        ")])])})),0),a("div",{staticClass:"table-row"},[a("table",[a("thead",[a("tr",[a("th",{staticClass:"align-left"},[t._v("基金名称("+t._s(t.dataList.length)+")")]),a("th",{staticClass:"pointer",staticStyle:{"min-width":"50px"},on:{click:function(s){return t.sortList("amount")}}},[t._v("\n              持有额\n              "),a("span",{staticClass:"down-arrow",class:t.sortType.amount})]),a("th",{staticClass:"pointer",staticStyle:{"min-width":"60px"},on:{click:function(s){return t.sortList("gszzl")}}},[t._v("\n              涨跌幅\n              "),a("span",{staticClass:"down-arrow",class:t.sortType.gszzl})]),a("th",{staticClass:"pointer",staticStyle:{"min-width":"60px"},on:{click:function(s){return t.sortList("gains")}}},[t._v("\n              估算收益\n              "),a("span",{staticClass:"down-arrow",class:t.sortType.gains})])])]),a("tbody",t._l(t.dataList,(function(s,e){return a("tr",{key:s.fundcode},[a("td",{staticClass:"fundName align-left",attrs:{title:s.name},on:{click:function(a){return a.stopPropagation(),t.fundDetail(s)}}},[t._v("\n              "+t._s(s.name)+"\n            ")]),a("td",[t._v(t._s(s.amount))]),a("td",{class:s.gszzl>=0?"up":"down"},[t._v(t._s(s.gszzl)+"%")]),a("td",{class:s.gains>=0?"up":"down"},[t._v("\n              "+t._s(s.gains)),s.hasReplace?a("span",{staticClass:"hasReplace-tip"},[t._v("✔")]):t._e()])])})),0)])])]),a("div",{staticClass:"input-row"},[a("input",{staticClass:"button",attrs:{type:"button",value:"行情中心"},on:{click:t.dashboard}}),a("input",{staticClass:"button",class:t.allGains>=0?"button-up":"button-down",attrs:{type:"button",title:t.allGains>=0?"d=====(￣▽￣*)b 赞一个":"∑(っ°Д°;)っ 大事不好啦",value:"当日收益："+t.allGains+"("+t.dailyYield+")"}})]),a("div",{staticClass:"input-row",staticStyle:{position:"relative"}},[a("div",{staticClass:"refresh",class:{isRefresh:t.isRefresh},attrs:{title:"手动刷新数据"},on:{click:t.refresh}},[a("i",{staticClass:"el-icon-refresh"})])]),a("fund-detail",{ref:"charts",attrs:{fund:t.sltFund,darkMode:t.darkMode},on:{close:t.closeCharts}})],1)},i=[],n=a("45cf"),o=a("527b");var l={components:{fundDetail:n["a"]},data(){return{seciList:["1.000001","1.000300","0.399001","0.399006"],indFundData:[],dataList:[],dataListDft:[],fundListM:[],sortType:{gszzl:"none",amount:"none",gains:"none",costGains:"none",costGainsRate:"none"},loading:!1,dragging:null,darkMode:!1,detailShadow:!1,sltFund:{},userId:null,isRefresh:!1}},mounted(){o["b"].get(["darkMode","userId"]).then(t=>{this.darkMode=!!t.darkMode&&t.darkMode,this.getIndFundData()}),this.$axios.get("https://blz.nos-hz.163yun.com/sre/funds.json?t="+(new Date).getTime()).then(t=>{let s=this.$route.params.id;t.hasOwnProperty(s)?(this.fundListM=t[s],this.getData()):console.log("当前用户不存在")})},computed:{allGains(){let t=0;return this.dataList.forEach(s=>{t+=parseFloat(s.gains)}),t=t.toFixed(2),t},allAmount(){let t=0;return this.dataList.forEach(s=>{t+=parseFloat(s.amount)}),t=t.toFixed(2),t},dailyYield(){return this.allAmount?(100*this.allGains/this.allAmount).toFixed(2)+"%":"0%"},allCostGains(){let t=0,s=0;this.dataList.forEach(a=>{t+=parseFloat(a.costGains),s+=parseFloat(a.amount)}),t=t.toFixed(2);let a=(100*t/(s-t)).toFixed(2);return[t,a]},containerClass(){let t="";return this.darkMode&&(t+="darkMode "),this.detailShadow&&(t+="detail-container"),t}},methods:{refresh(){this.getData(),this.isRefresh=!0,setTimeout(()=>{this.isRefresh=!1},1500)},fundDetail(t){this.sltFund=t,this.detailShadow=!0,this.$refs.charts.init()},closeCharts(){this.detailShadow=!1},dashboard(){this.$router.push("/dashboard")},sortList(t){for(const s in this.sortType)this.sortType.hasOwnProperty(s)&&s!=t&&(this.sortType[s]="none");this.sortType[t]="desc"==this.sortType[t]?"asc":"asc"==this.sortType[t]?"none":"desc","none"==this.sortType[t]?this.dataList=[...this.dataListDft]:this.dataList=this.dataList.sort(this.compare(t,this.sortType[t]))},compare(t,s){return function(a,e){var i=a[t],n=e[t];return"asc"==s?i-n:n-i}},getIndFundData(){let t=this.seciList.join(","),s="https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f2,f3,f4,f12,f13,f14&secids="+t+"&_="+(new Date).getTime();this.$axios.get(s).then(t=>{this.indFundData=t.data.diff})},getData(t){let s=this.fundListM.map(t=>t.code).join(","),a="https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo?pageIndex=1&pageSize=50&plat=Android&appType=ttjj&product=EFund&Version=1&deviceid="+this.userId+"&Fcodes="+s;this.$axios.get(a).then(t=>{let s=t.Datas;this.dataList=[];let a=[];s.forEach(t=>{let s={fundcode:t.FCODE,name:t.SHORTNAME,jzrq:t.PDATE,dwjz:t.NAV,gsz:isNaN(t.GSZ)?null:t.GSZ,gszzl:isNaN(t.GSZZL)?0:t.GSZZL,gztime:t.GZTIME};t.PDATE==t.GZTIME.substr(0,10)&&(s.gsz=t.NAV,s.gszzl=isNaN(t.NAVCHGRT)?0:t.NAVCHGRT,s.hasReplace=!0);let e=this.fundListM.filter(t=>t.code==s.fundcode);s.num=e[0].num,s.cost=e[0].cost,s.amount=this.calculateMoney(s),s.gains=this.calculate(s,s.hasReplace),s.costGains=this.calculateCost(s),s.costGainsRate=this.calculateCostRate(s),a.push(s)}),this.dataListDft=[...a],this.sortType["gszzl"]="desc",this.dataList=a.sort(this.compare("gszzl","desc"))}).catch(t=>{console.log(t)})},calculateMoney(t){let s=(t.dwjz*t.num).toFixed(2);return s},calculate(t,s){var a=0;let e=t.num?t.num:0;return s?a=((t.dwjz-t.dwjz/(1+.01*t.gszzl))*e).toFixed(2):t.gsz&&(a=((t.gsz-t.dwjz)*e).toFixed(2)),a},calculateCost(t){if(t.cost){let s=((t.dwjz-t.cost)*t.num).toFixed(2);return s}return 0},calculateCostRate(t){if(t.cost&&0!=t.cost){let s=((t.dwjz-t.cost)/t.cost*100).toFixed(2);return s}return 0}}},d=l,r=(a("34e7"),a("2877")),c=Object(r["a"])(d,e,i,!1,null,"101adc6e",null);s["default"]=c.exports}}]);