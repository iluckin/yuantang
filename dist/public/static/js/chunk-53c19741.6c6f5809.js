(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53c19741"],{ac6a:function(t,n,e){for(var i=e("cadf"),a=e("0d58"),c=e("2aba"),o=e("7726"),s=e("32e9"),r=e("84f2"),l=e("2b4c"),d=l("iterator"),p=l("toStringTag"),u=r.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(h),g=0;g<m.length;g++){var v,w=m[g],f=h[w],x=o[w],L=x&&x.prototype;if(L&&(L[d]||s(L,d,u),L[p]||s(L,p,w),r[w]=u,f))for(v in i)L[v]||c(L,v,i[v],!0)}},d504:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("van-row",{staticClass:"banner-box"},[e("div",{staticClass:"header"},[e("van-col",{attrs:{span:"24"}},[t.banners?t._e():e("van-skeleton",{staticStyle:{"background-color":"white"},attrs:{title:"",row:5}}),t.banners?e("van-swipe",{attrs:{autoplay:2500,"indicator-color":"#fe1111"}},t._l(t.banners,function(n,i){return e("van-swipe-item",{key:i},[e("van-image",{attrs:{height:"160",src:n.image},on:{click:function(e){return t.bannerClickEvent(n.title)}}})],1)}),1):t._e()],1),e("van-col",{staticClass:"mx-3 notice-box",attrs:{span:"24"}},[e("van-notice-bar",{attrs:{text:t.notice,"left-icon":"volume-o"},on:{click:t.noticeClickEvent}})],1)],1),e("div",{staticClass:"main"},[e("van-col",{staticClass:"mx-3 service-box",attrs:{span:"24"}},[e("van-cell",{staticStyle:{"font-weight":"bold"},attrs:{value:"圆堂服务"}}),e("van-grid",{attrs:{"column-num":4,clickable:!0,center:!0,square:!0}},[e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/house.png",text:"住宅产权",to:"/credentials/house"}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/work-1.png",text:"商业产权",to:"/credentials/store"}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/car.png",text:"车位产权",to:"/credentials/park"}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/room.png",text:"二手房租售"},on:{click:t.maintain}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/loan.png",text:"金融贷款"},on:{click:t.maintain}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/net.png",text:"家庭宽带"},on:{click:t.maintain}})],1)],1),e("van-col",{staticClass:"mx-3 service-box",attrs:{span:"24"}},[e("van-cell",{staticStyle:{"font-weight":"bold"},attrs:{value:"品质生活"}}),e("van-grid",{attrs:{"column-num":4,clickable:!0,center:!0,square:!0}},[e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/youhua_home@2x.png",text:"有花有树"},on:{click:t.maintain}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/youwei_home@2x.png",text:"有滋有味"},on:{click:t.maintain}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/youshi_home@2x.png",text:"有人有事"},on:{click:t.maintain}}),e("van-grid-item",{attrs:{icon:"http://deed.static.wowphp.cn/icons/youjiu_home@2x.png",text:"有食有酒",to:"/nice"},on:{click:t.maintain}})],1)],1)],1)])},a=[],c=(e("ac6a"),{name:"Index",data:function(){return{notice:"",banners:null}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;["banner","notice"].forEach(function(n,e){t.$axios.get(n).then(function(n){e?t.notice=n.data.data.notice:t.banners=n.data.data}).catch(function(n){t.$toast.alert({message:"网络错误，请重试!"})})})},maintain:function(t){this.$dialog.alert({message:t.target.innerText?"您点击了"+t.target.innerText:"近期开放，敬请期待!"})},bannerClickEvent:function(t){this.$toast("点击了第"+(t+1)+"个图片")},noticeClickEvent:function(){this.$toast("点击了通知栏")}}}),o=c,s=e("2877"),r=Object(s["a"])(o,i,a,!1,null,"6d3be2a5",null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-53c19741.6c6f5809.js.map