(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3580e6d5"],{"07fc":function(t,a,e){},"1cc7":function(t,a,e){},"22e6":function(t,a,e){},3117:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box",attrs:{"element-loading-background":t.darkMode?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.9)"}},[e("div",{ref:"mainCharts",staticClass:"main-echarts"}),e("div",[e("ul",{staticClass:"chart-list"},[e("li",[t._v("\n        港股通（沪） 当日净流入\n        "),e("span",{class:t.lastDataList[1]>0?"red":"green"},[t._v(t._s((t.lastDataList[1]/1e4).toFixed(2))+" 亿元")]),e("span",[t._v("，当日余额 ")]),e("span",{class:t.lastDataList[2]>0?"red":"green"},[t._v(t._s((t.lastDataList[2]/1e4).toFixed(2))+" 亿元")])]),e("li",[t._v("\n        港股通（深） 当日净流入\n        "),e("span",{class:t.lastDataList[3]>0?"red":"green"},[t._v(t._s((t.lastDataList[3]/1e4).toFixed(2))+" 亿元")]),e("span",[t._v("，当日余额 ")]),e("span",{class:t.lastDataList[4]>0?"red":"green"},[t._v(t._s((t.lastDataList[4]/1e4).toFixed(2))+" 亿元")])]),e("li",[t._v("\n        南向资金 当日净流入\n        "),e("span",{class:t.lastDataList[5]>0?"red":"green"},[t._v(t._s((t.lastDataList[5]/1e4).toFixed(2))+" 亿元")])])])])])},s=[];e("9d2d"),e("b87b");let n=e("3eba");e("ef97"),e("007d"),e("d28f");var o={name:"marketS2N",props:{darkMode:{type:Boolean,default:!1}},data(){return{chartEL:null,myChart:null,minVal:null,option:{},loading:!1,timeData:["09:00","09:01","09:02","09:03","09:04","09:05","09:06","09:07","09:08","09:09","09:10","09:11","09:12","09:13","09:14","09:15","09:16","09:17","09:18","09:19","09:20","09:21","09:22","09:23","09:24","09:25","09:26","09:27","09:28","09:29","09:30","09:31","09:32","09:33","09:34","09:35","09:36","09:37","09:38","09:39","09:40","09:41","09:42","09:43","09:44","09:45","09:46","09:47","09:48","09:49","09:50","09:51","09:52","09:53","09:54","09:55","09:56","09:57","09:58","09:59","10:00","10:01","10:02","10:03","10:04","10:05","10:06","10:07","10:08","10:09","10:10","10:11","10:12","10:13","10:14","10:15","10:16","10:17","10:18","10:19","10:20","10:21","10:22","10:23","10:24","10:25","10:26","10:27","10:28","10:29","10:30","10:31","10:32","10:33","10:34","10:35","10:36","10:37","10:38","10:39","10:40","10:41","10:42","10:43","10:44","10:45","10:46","10:47","10:48","10:49","10:50","10:51","10:52","10:53","10:54","10:55","10:56","10:57","10:58","10:59","11:00","11:01","11:02","11:03","11:04","11:05","11:06","11:07","11:08","11:09","11:10","11:11","11:12","11:13","11:14","11:15","11:16","11:17","11:18","11:19","11:20","11:21","11:22","11:23","11:24","11:25","11:26","11:27","11:28","11:29","11:30","11:31","11:32","11:33","11:34","11:35","11:36","11:37","11:38","11:39","11:40","11:41","11:42","11:43","11:44","11:45","11:46","11:47","11:48","11:49","11:50","11:51","11:52","11:53","11:54","11:55","11:56","11:57","11:58","11:59","12:00","13:01","13:02","13:03","13:04","13:05","13:06","13:07","13:08","13:09","13:10","13:11","13:12","13:13","13:14","13:15","13:16","13:17","13:18","13:19","13:20","13:21","13:22","13:23","13:24","13:25","13:26","13:27","13:28","13:29","13:30","13:31","13:32","13:33","13:34","13:35","13:36","13:37","13:38","13:39","13:40","13:41","13:42","13:43","13:44","13:45","13:46","13:47","13:48","13:49","13:50","13:51","13:52","13:53","13:54","13:55","13:56","13:57","13:58","13:59","14:00","14:01","14:02","14:03","14:04","14:05","14:06","14:07","14:08","14:09","14:10","14:11","14:12","14:13","14:14","14:15","14:16","14:17","14:18","14:19","14:20","14:21","14:22","14:23","14:24","14:25","14:26","14:27","14:28","14:29","14:30","14:31","14:32","14:33","14:34","14:35","14:36","14:37","14:38","14:39","14:40","14:41","14:42","14:43","14:44","14:45","14:46","14:47","14:48","14:49","14:50","14:51","14:52","14:53","14:54","14:55","14:56","14:57","14:58","14:59","15:00","15:01","15:02","15:03","15:04","15:05","15:06","15:07","15:08","15:09","15:10","15:11","15:12","15:13","15:14","15:15","15:16","15:17","15:18","15:19","15:20","15:21","15:22","15:23","15:24","15:25","15:26","15:27","15:28","15:29","15:30","15:31","15:32","15:33","15:34","15:35","15:36","15:37","15:38","15:39","15:40","15:41","15:42","15:43","15:44","15:45","15:46","15:47","15:48","15:49","15:50","15:51","15:52","15:53","15:54","15:55","15:56","15:57","15:58","15:59","16:00","16:01","16:02","16:03","16:04","16:05","16:06","16:07","16:08","16:09","16:10"],lastDataList:[0,0,0,0,0,0]}},watch:{},computed:{defaultColor(){return this.darkMode?"rgba(255,255,255,0.6)":"#ccc"}},mounted(){this.init()},beforeDestroy(){this.myChart.clear()},methods:{init(){this.chartEL=this.$refs.mainCharts,this.myChart=n.init(this.chartEL,this.darkMode?"dark":"customed"),this.option={tooltip:{trigger:"axis"},grid:{top:55,bottom:30,right:30},xAxis:{type:"category",data:this.timeData,axisLabel:{formatter:this.fmtAxis,interval:this.fmtVal},axisLine:{onZero:!1}},yAxis:{type:"value",name:"单位：亿元",scale:!0,axisLabel:{color:this.defaultColor},splitLine:{show:!0,lineStyle:{type:"dashed",color:this.defaultColor}},data:[]},series:[{type:"line",data:[]}]},this.getData()},getData(){this.loading=!0;let t="https://push2.eastmoney.com/api/qt/kamt.rtmin/get?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56&ut=&?v="+(new Date).getTime();this.$axios.get(t).then(t=>{this.loading=!1;let a=t.data,e=a.n2s,i=[],s=[],n=[],o=[],r=[];e&&(e.forEach(t=>{let a=t.split(",");"-"!=a[1]&&(this.lastDataList=a),i.push((a[1]/1e4).toFixed(4)),s.push((a[2]/1e4).toFixed(4)),n.push((a[3]/1e4).toFixed(4)),o.push((a[4]/1e4).toFixed(4)),r.push((a[5]/1e4).toFixed(4))}),this.option.legend={show:!0},this.option.series=[{type:"line",name:"港股通（沪）",data:i},{type:"line",name:"港股通（深）",data:n},{type:"line",name:"南向资金",data:r}],this.myChart.setOption(this.option))})},fmtAxis(t,a){return"12:00"==t?"12:00/13:00":t},fmtVal(t,a){let e=["09:30","10:30","12:00","14:35","15:00"];return-1!=e.indexOf(a)}}},r=o,l=(e("cb7f"),e("2877")),d=Object(l["a"])(r,i,s,!1,null,"16083520",null);a["a"]=d.exports},"31b8":function(t,a,e){"use strict";e("07fc")},"3a6b":function(t,a,e){"use strict";e("4972")},4972:function(t,a,e){},5965:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box",attrs:{"element-loading-background":t.darkMode?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.9)"}},[e("div",{ref:"mainCharts",staticClass:"main-echarts"})])},s=[];e("9d2d"),e("b87b");let n=e("3eba");e("94b1"),e("007d"),e("d28f");var o={name:"marketBar",props:{darkMode:{type:Boolean,default:!1}},data(){return{chartEL:null,myChart:null,option:{},loading:!1}},watch:{},computed:{defaultColor(){return this.darkMode?"rgba(255,255,255,0.6)":"#ccc"}},mounted(){this.init()},beforeDestroy(){this.myChart.clear()},methods:{init(){this.chartEL=this.$refs.mainCharts,this.myChart=n.init(this.chartEL,this.darkMode?"dark":"customed"),this.option={tooltip:{trigger:"axis",formatter:t=>`${t[0].name}<br />${(t[0].value/1e8).toFixed(2)}亿元`},grid:{top:45,bottom:65,right:30},xAxis:{type:"category",data:[],axisLabel:{formatter:t=>t.split("").join("\n")}},yAxis:{type:"value",name:"单位：亿元",scale:!0,axisLabel:{color:this.defaultColor,formatter:t=>(t/1e8).toFixed(2)},splitLine:{show:!0,lineStyle:{type:"dashed",color:this.defaultColor}},data:[]},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:0,end:30},{type:"inside",xAxisIndex:[0],start:0,end:30}],series:[{type:"bar",data:[]}]},this.getData()},getData(){this.loading=!0;let t="https://push2.eastmoney.com/api/qt/clist/get?pn=1&pz=500&po=1&np=1&fields=f12,f13,f14,f62&fid=f62&fs=m:90+t:2&_="+(new Date).getTime();this.$axios.get(t).then(t=>{this.loading=!1;let a=t.data.diff,e=[],i=[];a&&(a.forEach(t=>{e.push(t.f14),i.push(t.f62)}),this.option.xAxis.data=e,this.option.series=[{type:"bar",data:i,itemStyle:{normal:{color:function(t){return t.value>=0?"#f56c6c":"#4eb61b"}}}}],this.myChart.setOption(this.option))})}}},r=o,l=(e("31b8"),e("2877")),d=Object(l["a"])(r,i,s,!1,null,"8800c798",null);a["a"]=d.exports},"7fd2":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box",attrs:{"element-loading-background":t.darkMode?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.9)"}},[e("div",{ref:"mainCharts",staticClass:"main-echarts"})])},s=[];e("9d2d"),e("b87b");let n=e("3eba");e("ef97"),e("007d"),e("d28f");var o={name:"marketLine",props:{darkMode:{type:Boolean,default:!1}},data(){return{chartEL:null,myChart:null,minVal:null,option:{},loading:!1,timeData:["09:30","09:31","09:32","09:33","09:34","09:35","09:36","09:37","09:38","09:39","09:40","09:41","09:42","09:43","09:44","09:45","09:46","09:47","09:48","09:49","09:50","09:51","09:52","09:53","09:54","09:55","09:56","09:57","09:58","09:59","10:00","10:01","10:02","10:03","10:04","10:05","10:06","10:07","10:08","10:09","10:10","10:11","10:12","10:13","10:14","10:15","10:16","10:17","10:18","10:19","10:20","10:21","10:22","10:23","10:24","10:25","10:26","10:27","10:28","10:29","10:30","10:31","10:32","10:33","10:34","10:35","10:36","10:37","10:38","10:39","10:40","10:41","10:42","10:43","10:44","10:45","10:46","10:47","10:48","10:49","10:50","10:51","10:52","10:53","10:54","10:55","10:56","10:57","10:58","10:59","11:00","11:01","11:02","11:03","11:04","11:05","11:06","11:07","11:08","11:09","11:10","11:11","11:12","11:13","11:14","11:15","11:16","11:17","11:18","11:19","11:20","11:21","11:22","11:23","11:24","11:25","11:26","11:27","11:28","11:29","11:30","13:01","13:02","13:03","13:04","13:05","13:06","13:07","13:08","13:09","13:10","13:11","13:12","13:13","13:14","13:15","13:16","13:17","13:18","13:19","13:20","13:21","13:22","13:23","13:24","13:25","13:26","13:27","13:28","13:29","13:30","13:31","13:32","13:33","13:34","13:35","13:36","13:37","13:38","13:39","13:40","13:41","13:42","13:43","13:44","13:45","13:46","13:47","13:48","13:49","13:50","13:51","13:52","13:53","13:54","13:55","13:56","13:57","13:58","13:59","14:00","14:01","14:02","14:03","14:04","14:05","14:06","14:07","14:08","14:09","14:10","14:11","14:12","14:13","14:14","14:15","14:16","14:17","14:18","14:19","14:20","14:21","14:22","14:23","14:24","14:25","14:26","14:27","14:28","14:29","14:30","14:31","14:32","14:33","14:34","14:35","14:36","14:37","14:38","14:39","14:40","14:41","14:42","14:43","14:44","14:45","14:46","14:47","14:48","14:49","14:50","14:51","14:52","14:53","14:54","14:55","14:56","14:57","14:58","14:59","15:00"]}},watch:{},computed:{defaultColor(){return this.darkMode?"rgba(255,255,255,0.6)":"#ccc"}},mounted(){this.init()},beforeDestroy(){this.myChart.clear()},methods:{init(){this.chartEL=this.$refs.mainCharts,this.myChart=n.init(this.chartEL,this.darkMode?"dark":"customed"),this.option={tooltip:{trigger:"axis"},grid:{top:55,bottom:30,right:30},xAxis:{type:"category",data:this.timeData,axisLabel:{formatter:this.fmtAxis,interval:this.fmtVal},axisLine:{onZero:!1}},yAxis:{type:"value",name:"单位：亿元",scale:!0,axisLabel:{color:this.defaultColor},splitLine:{show:!0,lineStyle:{type:"dashed",color:this.defaultColor}},data:[]},series:[{type:"line",data:[]}]},this.getData()},getData(){this.loading=!0;let t="https://push2.eastmoney.com/api/qt/stock/fflow/kline/get?lmt=0&klt=1&secid=1.000001&secid2=0.399001&fields1=f1,f2,f3,f7&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61,f62,f63&_="+(new Date).getTime();this.$axios.get(t).then(t=>{this.loading=!1;let a=t.data.klines,e=[0],i=[0],s=[0],n=[0],o=[0];a&&(a.forEach(t=>{let a=t.split(",");e.push((a[1]/1e8).toFixed(4)),i.push((a[2]/1e8).toFixed(4)),s.push((a[3]/1e8).toFixed(4)),n.push((a[4]/1e8).toFixed(4)),o.push((a[5]/1e8).toFixed(4))}),this.option.legend={show:!0},this.option.series=[{type:"line",name:"主力",data:e},{type:"line",name:"超大单",data:o},{type:"line",name:"大单",data:n},{type:"line",name:"中单",data:s},{type:"line",name:"小单",data:i}],this.myChart.setOption(this.option))})},fmtAxis(t,a){return"11:30"==t?"11:30/13:00":t},fmtVal(t,a){let e=["09:30","10:30","11:30","14:00","15:00"];return-1!=e.indexOf(a)}}},r=o,l=(e("c5a5"),e("2877")),d=Object(l["a"])(r,i,s,!1,null,"77808730",null);a["a"]=d.exports},bfdc:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"box",attrs:{"element-loading-background":t.darkMode?"rgba(0, 0, 0, 0.9)":"rgba(255, 255, 255, 0.9)"}},[e("div",{ref:"mainCharts",staticClass:"main-echarts"}),e("div",[e("ul",{staticClass:"chart-list"},[e("li",[t._v("\n        沪股通 当日净流入\n        "),e("span",{class:t.lastDataList[1]>0?"red":"green"},[t._v(t._s((t.lastDataList[1]/1e4).toFixed(2))+" 亿元")]),e("span",[t._v("，当日余额 ")]),e("span",{class:t.lastDataList[2]>0?"red":"green"},[t._v(t._s((t.lastDataList[2]/1e4).toFixed(2))+" 亿元")])]),e("li",[t._v("\n        深股通 当日净流入\n        "),e("span",{class:t.lastDataList[3]>0?"red":"green"},[t._v(t._s((t.lastDataList[3]/1e4).toFixed(2))+" 亿元")]),e("span",[t._v("，当日余额 ")]),e("span",{class:t.lastDataList[4]>0?"red":"green"},[t._v(t._s((t.lastDataList[4]/1e4).toFixed(2))+" 亿元")])]),e("li",[t._v("\n        北向资金 当日净流入\n        "),e("span",{class:t.lastDataList[5]>0?"red":"green"},[t._v(t._s((t.lastDataList[5]/1e4).toFixed(2))+" 亿元")])])])])])},s=[];e("9d2d"),e("b87b");let n=e("3eba");e("ef97"),e("007d"),e("d28f");var o={name:"marketS2N",props:{darkMode:{type:Boolean,default:!1}},data(){return{chartEL:null,myChart:null,minVal:null,option:{},loading:!1,timeData:["09:30","09:31","09:32","09:33","09:34","09:35","09:36","09:37","09:38","09:39","09:40","09:41","09:42","09:43","09:44","09:45","09:46","09:47","09:48","09:49","09:50","09:51","09:52","09:53","09:54","09:55","09:56","09:57","09:58","09:59","10:00","10:01","10:02","10:03","10:04","10:05","10:06","10:07","10:08","10:09","10:10","10:11","10:12","10:13","10:14","10:15","10:16","10:17","10:18","10:19","10:20","10:21","10:22","10:23","10:24","10:25","10:26","10:27","10:28","10:29","10:30","10:31","10:32","10:33","10:34","10:35","10:36","10:37","10:38","10:39","10:40","10:41","10:42","10:43","10:44","10:45","10:46","10:47","10:48","10:49","10:50","10:51","10:52","10:53","10:54","10:55","10:56","10:57","10:58","10:59","11:00","11:01","11:02","11:03","11:04","11:05","11:06","11:07","11:08","11:09","11:10","11:11","11:12","11:13","11:14","11:15","11:16","11:17","11:18","11:19","11:20","11:21","11:22","11:23","11:24","11:25","11:26","11:27","11:28","11:29","11:30","13:01","13:02","13:03","13:04","13:05","13:06","13:07","13:08","13:09","13:10","13:11","13:12","13:13","13:14","13:15","13:16","13:17","13:18","13:19","13:20","13:21","13:22","13:23","13:24","13:25","13:26","13:27","13:28","13:29","13:30","13:31","13:32","13:33","13:34","13:35","13:36","13:37","13:38","13:39","13:40","13:41","13:42","13:43","13:44","13:45","13:46","13:47","13:48","13:49","13:50","13:51","13:52","13:53","13:54","13:55","13:56","13:57","13:58","13:59","14:00","14:01","14:02","14:03","14:04","14:05","14:06","14:07","14:08","14:09","14:10","14:11","14:12","14:13","14:14","14:15","14:16","14:17","14:18","14:19","14:20","14:21","14:22","14:23","14:24","14:25","14:26","14:27","14:28","14:29","14:30","14:31","14:32","14:33","14:34","14:35","14:36","14:37","14:38","14:39","14:40","14:41","14:42","14:43","14:44","14:45","14:46","14:47","14:48","14:49","14:50","14:51","14:52","14:53","14:54","14:55","14:56","14:57","14:58","14:59","15:00"],lastDataList:[0,0,0,0,0,0]}},watch:{},computed:{defaultColor(){return this.darkMode?"rgba(255,255,255,0.6)":"#ccc"}},mounted(){this.init()},beforeDestroy(){this.myChart.clear()},methods:{init(){this.chartEL=this.$refs.mainCharts,this.myChart=n.init(this.chartEL,this.darkMode?"dark":"customed"),this.option={tooltip:{trigger:"axis"},grid:{top:55,bottom:30,right:30},xAxis:{type:"category",data:this.timeData,axisLabel:{formatter:this.fmtAxis,interval:this.fmtVal},axisLine:{onZero:!1}},yAxis:{type:"value",name:"单位：亿元",scale:!0,axisLabel:{color:this.defaultColor},splitLine:{show:!0,lineStyle:{type:"dashed",color:this.defaultColor}},data:[]},series:[{type:"line",data:[]}]},this.getData()},getData(){this.loading=!0;let t="https://push2.eastmoney.com/api/qt/kamt.rtmin/get?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56&ut=&?v="+(new Date).getTime();this.$axios.get(t).then(t=>{this.loading=!1;let a=t.data,e=a.s2n,i=[],s=[],n=[],o=[],r=[];e&&(e.forEach(t=>{let a=t.split(",");"-"!=a[1]&&(this.lastDataList=a),i.push((a[1]/1e4).toFixed(4)),s.push((a[2]/1e4).toFixed(4)),n.push((a[3]/1e4).toFixed(4)),o.push((a[4]/1e4).toFixed(4)),r.push((a[5]/1e4).toFixed(4))}),this.option.legend={show:!0},this.option.series=[{type:"line",name:"沪股通",data:i},{type:"line",name:"深股通",data:n},{type:"line",name:"北向资金",data:r}],this.myChart.setOption(this.option))})},fmtAxis(t,a){return"11:30"==t?"11:30/13:00":t},fmtVal(t,a){let e=["09:30","10:30","11:30","14:00","15:00"];return-1!=e.indexOf(a)}}},r=o,l=(e("3a6b"),e("2877")),d=Object(l["a"])(r,i,s,!1,null,"d4104aae",null);a["a"]=d.exports},c5a5:function(t,a,e){"use strict";e("1cc7")},cb7f:function(t,a,e){"use strict";e("22e6")}}]);