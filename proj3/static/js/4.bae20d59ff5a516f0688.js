webpackJsonp([4],{"5yq0":function(e,t){},Nbga:function(e,t){},SHZk:function(e,t){},eukv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r),l=a("mvHQ"),o=a.n(l),c=a("M0rz"),d=a("ag4P"),u=a("vLgD"),m=a("4pjY"),h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mydetial"},[a("el-table",{staticStyle:{width:"100%","background-color":"transparent !important"},attrs:{data:e.tableData,"row-style":e.rowstyle,"cell-style":e.rowstyle,"header-row-style":e.headstyle,"header-cell-style":e.headstyle}},[a("el-table-column",{attrs:{prop:"dataKey",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nameValue",width:"180"}})],1),e._v(" "),e.status?a("el-button",{staticClass:"btn",attrs:{type:"primary",size:"small"}},[e._v(e._s(e.btnvalue))]):e._e()],1)},staticRenderFns:[]};var p=a("VU/8")({data:function(){return{tableData:[{dataKey:"这是日期",nameValue:"我是谁?"},{dataKey:"这是日期",nameValue:"我是谁?"},{dataKey:"这是日期",nameValue:"我是谁?"},{dataKey:"这是日期",nameValue:"我是谁?"},{dataKey:"这是日期",nameValue:"我是谁?"}],btnvalue:"拨打",status:!0}},props:["info"],methods:{loadInfo:function(){var e=this;this.tableData=[],this.info.forEach(function(t){var a={dataKey:t.dataKey,nameValue:t.nameValue};e.tableData.push(a),"监控名称"===t.dataKey&&(e.btnvalue="播放")})},rowstyle:function(e){return e.row,e.rowIndex,"background-color: transparent; border: 0; color: #88d6ff; row:hover : black"},headstyle:function(){return"background-color: transparent; border: 0; color: #00f1e5;"}},mounted:function(){this.loadInfo()}},h,!1,function(e){a("Nbga")},null,null).exports,y=(a("a3TE"),{data:function(){return{eventInfo:[{name:"发生时间:",value:""},{name:"事件类型:",value:""},{name:"事发地址:",value:""},{name:"事件内容:",value:""},{name:"事件来源:",value:""}],startTime:0,sendEvent:{},task:[],process:[{name:"事件接报",state:!0,path:"../Command"},{name:"先期处置",state:!0,path:"../Command"},{name:"预案响应",state:!1,path:"../Command"},{name:"指挥调度",state:!1,path:"../Command"},{name:"指挥结束",state:!1,path:"../Command"}],tableData:[],curr:2,eventId:"",rulesExplain:[]}},computed:{printTime:function(){return this.eventInfo[0].value.replace("-","年").replace("-","月").replace(" ","日").slice(0,this.eventInfo[0].value.length-2)}},methods:{drawCircle:function(e,t){var a=this;this.$map.clearLayers(this.$map.constslayer.alarmLayer),this.$map.clearLayers(this.$map.constslayer.cacheLayer),e=117.1910831,t=39.0835598,this.$map.drawCircle({x:e,y:t,radius:.03,layerId:this.$map.constslayer.cacheLayer,isCenter:!1,style:{color:"#000000",fontSize:12,lineStyle:"solid",borderWidth:1,borderColor:"#f82026",background:[248,32,38,.65],fillStyle:"cross"},click:function(){a.openLayerEvent()},onsuccess:function(e,t){}}),this.$map.drawPointToMap({x:e,y:t,ico:{name:"./static/arcgismap/assets/img/marker1.png",height:125,width:190},layerId:this.$map.constslayer.alarmLayer,isCenter:!1,click:function(){}});this.$map.drawPointToMap({x:117.1910831,y:39.0895598,ico:{name:"./static/arcgismap/assets/img/bncs.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"场所名称",nameValue:"河西区人民公园"},{dataKey:"地址",nameValue:"天津市河西区人民公园"},{dataKey:"所属区域",nameValue:"河西区"},{dataKey:"负责人",nameValue:"王栋"},,{dataKey:"联系电话",nameValue:"135435434343"}])),text:"避难场所",click:function(){}});this.$map.drawPointToMap({x:117.1710831,y:39.0895598,ico:{name:"./static/arcgismap/assets/img/yjdw.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"队伍名称",nameValue:"天津武警救援部队"},{dataKey:"地址",nameValue:"天津市武警大队"},{dataKey:"所属区域",nameValue:"河西区"},{dataKey:"当前状态",nameValue:"已出勤"},{dataKey:"负责人",nameValue:"李明"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"应急队伍",click:function(){}});this.$map.drawPointToMap({x:117.2010831,y:39.0895598,ico:{name:"./static/arcgismap/assets/img/yjwz.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"应急资源类型",nameValue:"和平区战略基本应急物资"},{dataKey:"所属仓库",nameValue:"和平区冷藏3号仓库"},{dataKey:"所属区域",nameValue:"滨海新区"},{dataKey:"当前状态",nameValue:"可调用"},{dataKey:"负责人",nameValue:"徐黑妮"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"应急资源",click:function(){}});this.$map.drawPointToMap({x:117.1910831,y:39.0995598,ico:{name:"./static/arcgismap/assets/img/yjzj.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"专家类型",nameValue:"综合类专家"},{dataKey:"专家名称",nameValue:"王博"},{dataKey:"民族",nameValue:"回族"},{dataKey:"学历",nameValue:"博士"},{dataKey:"所属单位",nameValue:"天津市应急局"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"救援专家",click:function(){}});this.$map.drawPointToMap({x:117.1910831,y:39.0695598,ico:{name:"./static/arcgismap/assets/img/yljz.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"机构名称",nameValue:"河西区区属疗养院"},{dataKey:"地址",nameValue:"天津市河西区南山疗养院"},{dataKey:"所属区域",nameValue:"河西区"},{dataKey:"负责人",nameValue:"冯云炜"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"医疗救助",click:function(){}});this.$map.drawPointToMap({x:117.200831,y:39.0595598,ico:{name:"./static/arcgismap/assets/img/video.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"监控名称",nameValue:"河西区区属疗养院大门东北口"},{dataKey:"地址",nameValue:"天津市河西区南山疗养院"},{dataKey:"所属区域",nameValue:"河西区"},{dataKey:"负责人",nameValue:"冯云炜"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"监控",click:function(){}});this.$map.drawPointToMap({x:117.175831,y:39.0605598,ico:{name:"./static/arcgismap/assets/img/fhmb.png",height:40,width:40},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"名称",nameValue:"人民体育场"},{dataKey:"地址",nameValue:"天津市南开区庆丰路10号近水上公园"},{dataKey:"所属区域",nameValue:"开区庆"},{dataKey:"负责人",nameValue:"冯云炜"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"防护目标",click:function(){}});this.$map.drawPointToMap({x:117.195831,y:39.0585598,ico:{name:"./static/arcgismap/assets/img/car.png",height:30,width:31},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,isWindow:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+escape(o()([{dataKey:"车牌号",nameValue:"津应急1234"},{dataKey:"当前状态",nameValue:"行驶中"},{dataKey:"驾驶人",nameValue:"李铭"},{dataKey:"所属单位",nameValue:"天津应急"},{dataKey:"联系电话",nameValue:"135435434343"}])),text:"津应急1234",click:function(){}});var s=[{dataKey:"车牌号",nameValue:"津应急2345"},{dataKey:"当前状态",nameValue:"行驶中"},{dataKey:"驾驶人",nameValue:"李铭"},{dataKey:"所属单位",nameValue:"天津应急"},{dataKey:"联系电话",nameValue:"135435434343"}];s=escape(o()(s)),this.$map.drawPointToMap({x:117.175831,y:39.0806598,ico:{name:"./static/arcgismap/assets/img/car.png",height:30,width:31},layerId:this.$map.constslayer.alarmLayer,isCenter:!0,url:"http://1.119.195.59:89/tjzh/source/index.html?key="+s,isWindow:!0,text:"津应急2345",click:function(){}}),this.$map.setViewCenter({x:e,y:t,level:14})},getuuid:function(){return(65536*(1+Math.random())|0).toString(16).substring(1)+(65536*(1+Math.random())|0).toString(16).substring(1)+""+(65536*(1+Math.random())|0).toString(16).substring(1)+(65536*(1+Math.random())|0).toString(16).substring(1)+(65536*(1+Math.random())|0).toString(16).substring(1)+(65536*(1+Math.random())|0).toString(16).substring(1)+(65536*(1+Math.random())|0).toString(16).substring(1)+(65536*(1+Math.random())|0).toString(16).substring(1)},getNowTime:function(){return new Date(+new Date+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")},headerstyle:function(){return"background-color: transparent; color: #00f1e5; text-align: center;"},goCommand:function(e){var t=this;return i()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:2===e?t.$router.push("/scheme/?eventId="+t.eventId):3===e?t.$router.push("/command/?eventId="+t.eventId):4===e&&t.$confirm("是否结束指挥?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",customClass:"messageBox",type:"warning"}).then(i()(n.a.mark(function e(){var a,s,r,i,l,c,m;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={DisposeState:4,endTime:t.getNowTime()},s=[{Property:"id",Oper:"eq",Value:t.eventId}],(r=d.a.update("event",a,s)).DataBase="duty",e.next=6,Object(u.a)({url:"static/config.json",data:{}});case 6:return i=e.sent,l=i.visual.baseUrl+i.visual.eventProcessReport,c={bh:t.getuuid(),xtmc:"zhdd",jkdz:l,ajaxType:"POST",param:o()({id:t.eventId,status:0}),state:0,rksjc:t.getNowTime(),gxsj:null,gxrbh:"",gxr:""},(m=d.a.save("quartz",c)).DataBase="duty",e.next=13,Object(u.b)({url:d.a.execUrl(),data:m});case 13:return e.sent,e.next=16,Object(u.b)({url:d.a.execUrl(),data:r});case 16:0===e.sent.Result&&t.$message({type:"success",message:"指挥已结束，关闭当前页面"});case 18:case"end":return e.stop()}},e,t)}))).catch(function(){t.$message({type:"info",message:"已取消"})});case 1:case"end":return a.stop()}},a,t)}))()},getEventInfo:function(e){var t=this;return i()(n.a.mark(function a(){var s,r,i,l,o,c,m;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s=[{Property:"Id",Oper:"eq",Value:e}],(r=d.a.get("Event","",s)).DataBase="duty",a.next=5,Object(u.b)({url:d.a.getUrl(),data:r});case 5:if(0!==(i=a.sent).Result){a.next=28;break}if(!(i.Data.length>0)){a.next=28;break}return(l=i.Data[0]).Endtime?t.startTime="指挥结束":t.startTime=new Date(l.Eventtime).getTime(),t.eventInfo[0].value=l.Eventtime,t.eventInfo[1].value=l.Ajlbname,t.eventInfo[2].value=l.Address,t.eventInfo[3].value=l.Content,t.eventInfo[4].value=l.Sourcetype,t.eventInfo[0].value=t.printTime,l.Eventtime=t.eventInfo[0].value,t.sendEvent=l,t.drawCircle(l.Dwxzb,l.Dwyzb),"2"===l.Disposestate?t.$router.push("/scheme/?eventId="+t.eventId):"3"===l.Disposestate&&t.$router.push("/command/?eventId="+t.eventId),t.task=[],l.Measure.split("\\n").forEach(function(e){t.task.push({name:e,state:1})}),o=[{Property:"caseclass",Oper:"eq",Value:l.Ajlb}],c=d.a.get("Disposalprocess","",o),a.next=26,Object(u.b)({url:d.a.getUrl(),data:c});case 26:0===(m=a.sent).Result&&m.Data.length>0&&m.Data[0].Content.split("\n").forEach(function(e){t.rulesExplain.push({name:e})});case 28:case"end":return a.stop()}},a,t)}))()},loadGood:function(e,t){var a=this;return i()(n.a.mark(function t(){var s,r,i,l,o,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.tableData=[],e){t.next=3;break}return t.abrupt("return");case 3:return s={longitude:12952105.7556492,latitude:4856953.53616151,radius:1e7,tableNameType:e},t.next=6,Object(u.a)({url:"static/config.json",data:{}});case 6:if(r=t.sent,console.log(r),i=r.resource.baseUrl+r.resource.getGisReSourceUrl,"jg"===e){t.next=14;break}return t.next=12,Object(u.a)({url:i,data:s});case 12:200===(l=t.sent).context.status&&l.data.totalItems>0&&("goods"===e&&l.data.resultList.forEach(function(e){a.tableData.push({date:e.goodsName,name:"",address:e.storeNum+""+e.unit})}),"team"===e&&l.data.resultList.forEach(function(e){a.tableData.push({date:e.teamName,name:"",address:e.teamNum+"人"})}),"store"===e&&l.data.resultList.forEach(function(e){a.tableData.push({date:e.storeName,name:"",address:e.address})}));case 14:if("jg"!==e){t.next=38;break}return o={longitude:12952105.7556492,latitude:4856953.53616151,radius:1e7,tableNameType:"communication"},t.next=18,Object(u.a)({url:i,data:o});case 18:return 200===(c=t.sent).context.status&&c.data.totalItems>0&&c.data.resultList.forEach(function(e){a.tableData.push({date:e.communicationName,name:"",address:e.address})}),c={},o.tableNameType="transport",t.next=24,Object(u.a)({url:i,data:o});case 24:return 200===(c=t.sent).context.status&&c.data.totalItems>0&&c.data.resultList.forEach(function(e){a.tableData.push({date:e.transportName,name:"",address:e.address})}),c={},o.tableNameType="company",t.next=30,Object(u.a)({url:i,data:o});case 30:return 200===(c=t.sent).context.status&&c.data.totalItems>0&&c.data.resultList.forEach(function(e){a.tableData.push({date:e.companyName,name:"",address:e.address})}),c={},o.tableNameType="medical",t.next=36,Object(u.a)({url:i,data:o});case 36:200===(c=t.sent).context.status&&c.data.totalItems>0&&c.data.resultList.forEach(function(e){a.tableData.push({date:e.medicalName,name:"",address:e.address})});case 38:case"end":return t.stop()}},t,a)}))()},more:function(){var e=this.$layer.iframe({content:{content:c.a,parent:this,data:{eventInfo:this.sendEvent}},shade:!1,area:["400px","420px"],offset:["700","350"],title:"事件详情"});this.layerId=e},popit:function(e){var t=this.$layer.iframe({content:{content:p,parent:this,data:{eventInfo:this.sendEvent,info:e}},shade:!1,area:["400px","400px"],offset:["950","430"],title:"资源详情"});this.layerId=t},initEventMap:function(){}},watch:{curr:function(e){0===e&&this.loadGood("goods"),1===e&&this.loadGood("team"),3===e&&this.loadGood("store"),2===e&&this.loadGood("jg")}},mounted:function(){this.$route.query.eventId?this.eventId=this.$route.query.eventId:this.eventId="0395d345-bb26-d162-590f-98186b7bb59a",this.getEventInfo(this.eventId),this.loadGood("jg")},components:{"map-tools":m.a}}),v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("aside",{attrs:{id:"left"}},[a("div",{staticClass:"sjms"},[a("v-title",{attrs:{title:"事件描述"}}),e._v(" "),a("div",{staticClass:"content"},[a("ul",e._l(e.eventInfo,function(t,s){return a("li",{key:s},[a("span",{staticStyle:{display:"inline-block"}},[e._v(e._s(t.name))]),e._v(" "),a("span",{staticStyle:{width:"215px",display:"inline-block"},attrs:{title:t.value}},[e._v(e._s(t.value))])])}),0),e._v(" "),a("div",{staticClass:"dizhen"},[a("div",{staticClass:"top",on:{click:e.more}},[e._v("更多")])])])],1),e._v(" "),a("div",{staticClass:"reportinfo"},[a("v-title",{attrs:{title:"先期处置信息"}}),e._v(" "),a("div",{staticClass:"content"},[a("ul",e._l(e.task,function(t,s){return a("li",{key:s,class:[{ulyellow:1===t.state,ulgreen:2===t.state,ulgreen:3===t.state}]},[a("label",[e._v("☆")]),e._v(" "),a("label",[e._v(e._s(t.name))])])}),0)])],1)]),e._v(" "),a("section",{attrs:{id:"main"}},[a("div",{staticClass:"process"},e._l(e.process,function(t,s){return a("div",{key:s,staticClass:"box",class:{active:!0===t.state},on:{click:function(t){return e.goCommand(s)}}},[a("label"),e._v(" "),a("span",[e._v(e._s(t.name))])])}),0),e._v(" "),a("div",{staticClass:"event-time"},[a("time-tool",{staticClass:"time-jishi",attrs:{sendSync:"true",autoStart:"true",startTime:e.startTime,nowTime:"",defaultVal:""}})],1),e._v(" "),a("div",{staticClass:"map"},[a("map-tools")],1)]),e._v(" "),a("aside",{attrs:{id:"right"}},[a("div",{staticClass:"periphery-resources"},[a("v-title",{attrs:{title:"周边资源"}}),e._v(" "),a("div",{staticClass:"content"},[a("ul",{staticClass:"tab-tilte"},[a("li",{class:{active:2==e.curr},on:{click:function(t){e.curr=2}}},[e._v("机构")]),e._v(" "),a("li",{class:{active:1==e.curr},on:{click:function(t){e.curr=1}}},[e._v("队伍")]),e._v(" "),a("li",{class:{active:3==e.curr},on:{click:function(t){e.curr=3}}},[e._v("仓库")]),e._v(" "),a("li",{class:{active:0==e.curr},on:{click:function(t){e.curr=0}}},[e._v("物资")])]),e._v(" "),a("div",{staticClass:"tab-content content-table"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.curr,expression:"curr == 0"}]},[a("div",{staticClass:"table-content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":e.headerstyle,"show-header":e.showHeader}},[a("el-table-column",{attrs:{prop:"date",label:"名称",width:"180","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"库存"}})],1)],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.curr,expression:"curr == 1"}]},[a("div",{staticClass:"table-content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":e.headerstyle,"show-header":e.showHeader}},[a("el-table-column",{attrs:{prop:"date",label:"名称",width:"160","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"人员数量"}})],1)],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.curr,expression:"curr == 2"}]},[a("div",{staticClass:"table-content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":e.headerstyle,"show-header":e.showHeader}},[a("el-table-column",{attrs:{prop:"date",label:"名称",width:"140","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":!0}})],1)],1)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.curr,expression:"curr == 3"}]},[a("div",{staticClass:"table-content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":e.headerstyle,"show-header":e.showHeader}},[a("el-table-column",{attrs:{prop:"date",label:"名称",width:"120","show-overflow-tooltip":!0}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址","show-overflow-tooltip":!0}})],1)],1)])])])],1),e._v(" "),a("div",{staticClass:"czprocess"},[a("v-title",{attrs:{title:"处置规程"}}),e._v(" "),a("div",{staticClass:"content"},[a("ul",e._l(e.rulesExplain,function(t,s){return a("li",{key:s},[a("label",{staticStyle:{display:"inline-block",width:"5px",height:"16px",background:"#51d0ff","border-radius":"10px"}}),e._v(" "),a("label",[e._v(e._s(t.name))])])}),0)])],1)])])},staticRenderFns:[]};var f=a("VU/8")(y,v,!1,function(e){a("SHZk"),a("5yq0")},"data-v-0ea8b8c8",null);t.default=f.exports}});
//# sourceMappingURL=4.bae20d59ff5a516f0688.js.map