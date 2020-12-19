(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={item:"ImageGalleryItem_item__3qhMI",image:"ImageGalleryItem_image__24eJV"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__1diO_",modal:"Modal_modal__gG3BE"}},16:function(e,t,a){e.exports={list:"ImageGallery_list__1Gp_5"}},17:function(e,t,a){e.exports={btn:"Button_btn__1L8Kq"}},24:function(e,t,a){},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(4),i=a.n(o),s=(a(23),a(24),a(3)),u=a(5),l=(a(25),a(26),a(6)),b=a.n(l),j=function(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],i=r[1];return Object(n.jsx)("header",{className:b.a.header,children:Object(n.jsxs)("form",{className:b.a.form,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.b.error("Enter your query"),void t(o);t(o)},children:[Object(n.jsx)("button",{type:"submit",className:b.a.button,children:Object(n.jsx)("span",{className:b.a.label,children:"Search"})}),Object(n.jsx)("input",{className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})})},m=a(12),h=a(13),f=a(14),g=function(){function e(){Object(h.a)(this,e),this.searchQuery="",this.page=1}return Object(f.a)(e,[{key:"fetchImages",value:function(){var e="".concat("https://pixabay.com/api/","?q=").concat(this.searchQuery,"&page=").concat(this.page,"&key=").concat("19016514-f636b8f63ee9a8d1bcb803743","&image_type=photo&orientation=horizontal&per_page=12");return fetch(e).then((function(e){return e.ok?e.json():Promise.reject(new Error("Bad request!"))}))}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"pageNum",get:function(){return this.page},set:function(e){this.page=e}}]),e}(),d=a(15),O=a.n(d),p=(a(48),function(){return Object(n.jsx)(O.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,style:{marginLeft:"auto",marginRight:"auto"}})}),_=a(16),x=a.n(_),y=a(10),v=a.n(y),k=function(e){var t=e.webformatURL,a=e.largeImageURL,c=e.alt,r=e.onClick;return Object(n.jsx)("li",{className:v.a.item,children:Object(n.jsx)("img",{src:t,alt:c,className:v.a.image,"data-src":a,onClick:r})})},w=function(e){var t=e.images,a=e.onClick;return Object(n.jsx)("ul",{className:x.a.list,children:t.map((function(e){var t=e.id,c=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(n.jsx)(k,{webformatURL:c,largeImageURL:r,alt:o,onClick:a},t)}))})},S=a(17),C=a.n(S),N=function(e){var t=e.onClick;return Object(n.jsx)("button",{className:C.a.btn,type:"button",onClick:t,children:"Load more"})},L=a(11),I=a.n(L),E=document.querySelector("#modal-root"),R=function(e){var t=e.imgURL,a=e.alt,r=e.onClose;Object(c.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]);var i=function(e){"Escape"===e.code&&r()};return Object(o.createPortal)(Object(n.jsx)("div",{className:I.a.overlay,onClick:function(e){e.currentTarget===e.target&&r()},children:Object(n.jsx)("div",{className:I.a.modal,children:Object(n.jsx)("img",{src:t,alt:a})})}),E)},q=new g,U="idle",P="pending",Q="resolved",B="rejected",F=function(e){var t=e.searchQuery,a=Object(c.useState)([]),r=Object(s.a)(a,2),o=r[0],i=r[1],l=Object(c.useState)(null),b=Object(s.a)(l,2),j=b[0],h=b[1],f=Object(c.useState)(U),g=Object(s.a)(f,2),d=g[0],O=g[1],_=Object(c.useState)(null),x=Object(s.a)(_,2),y=x[0],v=x[1],k=Object(c.useState)(""),S=Object(s.a)(k,2),C=S[0],L=S[1],I=Object(c.useState)(!1),E=Object(s.a)(I,2),F=E[0],G=E[1];Object(c.useEffect)((function(){if(""===t.trim())return O(U);i([]),O(P),q.resetPage(),q.query=t,q.fetchImages().then((function(e){if(!e.total)return Promise.reject(new Error("No match found!"));O(Q),i(e.hits)})).catch((function(e){h(e),O(B)}))}),[t]);return d===U?null:d!==P||o.length?d===B?(u.b.error(j.message),null):d===Q?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{images:o,onClick:function(e){v(e.target.dataset.src),L(e.target.alt)}}),F&&Object(n.jsx)(p,{}),Object(n.jsx)(N,{onClick:function(){G(!0),q.pageNum+=1,q.fetchImages().then((function(e){i((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e.hits))}))})).catch((function(e){h(e),O(B)})).finally((function(){G(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}}),y&&Object(n.jsx)(R,{imgURL:y,alt:C,onClose:v})]}):void 0:Object(n.jsx)(p,{})},G=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{onSubmit:r}),Object(n.jsx)(F,{searchQuery:a}),Object(n.jsx)(u.a,{})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={header:"Searchbar_header__yTmPX",form:"Searchbar_form__1X2Cr",button:"Searchbar_button__JaaD7",label:"Searchbar_label__2PYQu",input:"Searchbar_input__1xwnh"}}},[[49,1,2]]]);
//# sourceMappingURL=main.abe461e3.chunk.js.map