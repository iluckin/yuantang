(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25033410"],{"7f7f":function(t,o,e){var a=e("86cc").f,n=Function.prototype,s=/^\s*function ([^ (]*)/,i="name";i in n||e("9e1e")&&a(n,i,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},e345:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"van-fade"}},[e("van-row",[e("van-col",{attrs:{span:"24"}},[e("van-cell-group",{staticClass:"form"},[e("van-cell",{staticStyle:{"font-weight":"bold"},attrs:{title:"商业产权办理查询"}}),e("van-field",{attrs:{readonly:"",clickable:"",label:"小区",value:t.tool.communityName,placeholder:"选择小区"},on:{click:function(o){t.tool.showPicker=!0}}}),e("van-popup",{attrs:{position:"bottom"},model:{value:t.tool.showPicker,callback:function(o){t.$set(t.tool,"showPicker",o)},expression:"tool.showPicker"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.tool.columns,title:"选择小区","item-height":40},on:{cancel:function(o){t.tool.showPicker=!1},confirm:t.onConfirm}})],1),e("van-field",{attrs:{pattern:"[0-9]*",clearable:"",label:"期号","right-icon":"question-o",placeholder:"请输入期号"},on:{"click-right-icon":function(o){return t.$toast("请输入期号，可为空")}},model:{value:t.form.batch,callback:function(o){t.$set(t.form,"batch",o)},expression:"form.batch"}}),e("van-field",{attrs:{pattern:"[0-9]*",label:"楼号",placeholder:"请输入楼号"},model:{value:t.form.floor,callback:function(o){t.$set(t.form,"floor",o)},expression:"form.floor"}}),e("van-field",{attrs:{pattern:"[0-9]*",label:"单元",placeholder:"请输入单元号"},model:{value:t.form.unit,callback:function(o){t.$set(t.form,"unit",o)},expression:"form.unit"}}),e("van-field",{attrs:{pattern:"[0-9]*",label:"房间",placeholder:"请输入房间号"},model:{value:t.form.room,callback:function(o){t.$set(t.form,"room",o)},expression:"form.room"}}),e("van-field",{attrs:{label:"身份证号",placeholder:"请输入身份证号"},model:{value:t.form.identity_no,callback:function(o){t.$set(t.form,"identity_no",o)},expression:"form.identity_no"}})],1)],1),e("van-col",{attrs:{span:"24"}},[e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.tool.result,callback:function(o){t.$set(t.tool,"result",o)},expression:"tool.result"}},[e("van-row",[e("van-col",{attrs:{span:"24"}},[e("van-panel",{staticStyle:{"text-align":"left","border-bottom":"0"},attrs:{title:"商业产权办理查询结果"}},[e("van-row",{staticStyle:{padding:"8px 15px 0px 15px"}},[e("van-image",{attrs:{width:"100%",height:"80",src:"http://deed.static.wowphp.cn/dls.jpeg"}})],1),e("van-row",{staticStyle:{padding:"8px 8px 0px 8px"}},[e("van-col",{staticClass:"mx-5",attrs:{span:"24"}},[e("van-steps",{attrs:{active:t.result.step,"active-icon":"success","active-color":"#38f"}},[e("van-step",[t._v("资料审核")]),e("van-step",[t._v("税务审核")]),e("van-step",[t._v("不动产审核")]),e("van-step",[t._v("办理完成")])],1)],1)],1),e("van-row",{staticStyle:{padding:"8px 8px 8px 12px"}},[e("van-col",{attrs:{span:"3"}},[e("van-image",{attrs:{round:"",width:"1.6rem",height:"1.6rem",src:"http://deed.static.wowphp.cn/logo/logo.jpeg"}})],1),e("van-col",{attrs:{span:"21"}},[e("small",[t._v("圆堂客户"+t._s(this.result.client?this.result.client:"")+"您好 !")])]),e("van-col",{attrs:{span:"21",offset:"3"}},[e("small",[t._v("\n                    "+t._s(this.result.notice?this.result.notice:"")+"\n                  ")])])],1)],1)],1)],1),e("van-divider",{attrs:{dashed:""}},[e("small",[t._v("© 2019 圆堂科技")])])],1)],1),e("van-col",{staticStyle:{"margin-top":"8px"},attrs:{span:"24"}},[e("van-button",{staticStyle:{width:"100%"},attrs:{type:"info"},on:{click:t.showResult}},[e("b",[t._v("查 询")])])],1)],1)],1)},n=[],s=(e("7f7f"),{name:"Store",data:function(){return{tool:{numberKeyboard:!1,result:!1,smsCodeStatus:!1,columns:[],communities:[],communityName:"",showPicker:!1},result:{step:2,status:"办理完成"},form:{community:"",batch:"",floor:"",unit:"",room:"",identity_no:"",type:1}}},methods:{onConfirm:function(t,o){this.tool.communityName=t,this.tool.showPicker=!1,this.form.community=this.tool.communities[o].id},showResult:function(){var t=this,o=[{message:"请输入身份证号",name:"identity_no"},{message:"请输入房间号",name:"room"},{message:"请输入单元号",name:"unit"},{message:"请输入楼号",name:"floor"},{message:"请输入期号",name:"batch"},{message:"请选择小区",name:"community"}],e=!1;if(o.forEach(function(o){var a=o.name;""===t.form[a]&&(t.$notify(o.message),e=!0)}),e)return!1;this.$toast.loading({message:"正在查询"}),this.$axios.get("sys/query",{params:this.form}).then(function(o){return 5e3===o.data.code?t.$notify(o.data.msg):5001===o.data.code?t.$toast.fail(o.data.msg):(t.result=o.data.data,t.tool.result=!0,void t.$toast.clear())}).catch(function(o){t.$toast.clear(),t.$toast.alert({message:"网络错误，请重试!"})})}},beforeCreate:function(){var t=this;this.$axios.get("sys/communities").then(function(o){o.data.data.map(function(o){t.tool.communities.push(o),t.tool.columns.push(o.name)})})}}),i=s,l=e("2877"),r=Object(l["a"])(i,a,n,!1,null,"4b0a96e4",null);o["default"]=r.exports}}]);
//# sourceMappingURL=chunk-25033410.31c2868a.js.map