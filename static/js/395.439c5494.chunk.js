"use strict";(self.webpackChunkcampervoyage=self.webpackChunkcampervoyage||[]).push([[395],{1223:function(e,s,t){t.d(s,{Z:function(){return S}});var a=t(9434),n=t(6351),r=t(9439),i=t(2791),c=t(4164),l=t(9),d=t(5677),o=t(9348),_={modal_overlay:"ModalAdvert_modal_overlay__Xnqrm",description:"ModalAdvert_description__oCswk",container:"ModalAdvert_container__iXlnS",list_container:"ModalAdvert_list_container__YR9Rx",nav:"ModalAdvert_nav__LmytL",nav_link:"ModalAdvert_nav_link__ncSMK",accent:"ModalAdvert_accent__3sqSI",details_wrapper:"ModalAdvert_details_wrapper__A4QR6",details:"ModalAdvert_details__L+2ix"},v="AdvertItem_item__YDGtQ",m="AdvertItem_img__fGhaR",h="AdvertItem_content__Ar1Bl",u="AdvertItem_header__SnV1f",x="AdvertItem_price_wrapper__+eKUC",p="AdvertItem_info__4VCFs",j="AdvertItem_header_wrapper__XFtU3",g="AdvertItem_title__KcX0E",f="AdvertItem_price__WqeWv",N="AdvertItem_rating__5bu8I",w="AdvertItem_location__KBpyI",y="AdvertItem_icon__TwHqI",A="AdvertItem_rating_text__58lzI",k="AdvertItem_description__NGK06",I="AdvertItem_button_more__xrrwp",b="AdvertItem_img_wrapper__b3NgY",M=t(184),L=function(e){var s=e.advert,t=(0,i.useState)("features"),a=(0,r.Z)(t,2),n=a[0],c=a[1];return(0,M.jsxs)("div",{className:"".concat(_.modal_window," "),children:[(0,M.jsx)("div",{children:(0,M.jsxs)("div",{className:j,children:[(0,M.jsxs)("div",{className:u,children:[(0,M.jsx)("h2",{className:g,children:s.name}),(0,M.jsx)("div",{className:x})]}),(0,M.jsxs)("div",{className:p,children:[(0,M.jsxs)("p",{className:N,children:[(0,M.jsx)("svg",{className:y,width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:"".concat(o.Z,"#star")})}),(0,M.jsxs)("span",{className:A,children:[s.rating," (",s.reviews.length," Reviews)"]})]}),(0,M.jsx)("span",{className:w,children:s.location})]}),(0,M.jsxs)("p",{className:f,children:["\u20ac",s.price.toFixed(2)]})]})}),(0,M.jsx)("div",{className:_.container,children:(0,M.jsxs)("div",{className:_.list_container,children:[(0,M.jsx)("ul",{className:b,children:s.gallery.map((function(e){return(0,M.jsx)("li",{children:(0,M.jsx)("img",{className:m,src:e,alt:s.name,width:290,height:310})},e)}))}),(0,M.jsx)("p",{className:"".concat(_.description," text"),children:s.description}),(0,M.jsxs)("div",{className:_.nav,children:[(0,M.jsx)("button",{className:"".concat(_.nav_link," ").concat("features"===n&&_.accent),onClick:function(){return c("features")},children:"Features"}),(0,M.jsx)("button",{className:"".concat(_.nav_link," ").concat("rewiews"===n&&_.accent),onClick:function(){return c("rewiews")},children:"Reviews"})]}),(0,M.jsx)("div",{className:_.details_wrapper,children:(0,M.jsxs)("div",{className:_.details,children:["features"===n&&(0,M.jsx)(d.Z,{advert:s}),"rewiews"===n&&(0,M.jsx)(l.Z,{reviews:s.reviews})]})})]})})]})},C={overlay:"Modal_overlay__r63M6",modal:"Modal_modal__DJDMv",close_button:"Modal_close_button__4xTF9"},Z=function(e){var s=e.children,t=e.advert,a=e.onClose;return(0,i.useEffect)((function(){var e=function(e){"Escape"===e.key&&a()},s=function(e){e.target.classList.contains(C.overlay)&&a()};return document.addEventListener("keydown",e),document.addEventListener("click",s),document.body.style.overflow="hidden",document.body.style.paddingRight="15px",function(){document.removeEventListener("keydown",e),document.removeEventListener("click",s),document.body.style.overflow="auto",document.body.style.paddingRight="0"}}),[a]),c.createPortal((0,M.jsx)("div",{className:C.overlay,children:(0,M.jsxs)("div",{className:C.modal,children:[(0,M.jsx)("button",{className:C.close_button,onClick:a,children:(0,M.jsx)("svg",{className:C.modal_close_icon,width:32,height:32,children:(0,M.jsx)("use",{href:"".concat(o.Z,"#close")})})}),(0,M.jsx)("div",{className:C.content,children:s}),(0,M.jsx)(L,{advert:t})]})}),document.getElementById("modal-root"))},E=t(9186),R=function(e){var s=e.advert,t=(0,i.useState)(!1),a=(0,r.Z)(t,2),n=a[0],c=a[1],l=s.id,d=s.name,_=s.price,b=s.location,L=s.description,C=s.details,R=s.rating,F=s.reviews,S=s.gallery;return(0,M.jsxs)("li",{className:v,id:l,children:[(0,M.jsx)("img",{className:m,src:S&&(null===S||void 0===S?void 0:S.length)&&S[0],alt:d,width:290,height:310,loading:"lazy"}),(0,M.jsxs)("div",{className:h,children:[(0,M.jsxs)("div",{className:j,children:[(0,M.jsxs)("div",{className:u,children:[(0,M.jsx)("h2",{className:g,children:d}),(0,M.jsx)("div",{className:x,children:(0,M.jsxs)("p",{className:f,children:["\u20ac",_.toFixed(2)]})})]}),(0,M.jsxs)("div",{className:p,children:[(0,M.jsxs)("p",{className:N,children:[(0,M.jsx)("svg",{className:y,width:16,height:16,children:(0,M.jsx)("use",{xlinkHref:"".concat(o.Z,"#star")})}),(0,M.jsxs)("span",{className:A,children:[R," (",F.length," Reviews)"]})]}),(0,M.jsx)("span",{className:w,children:b})]})]}),(0,M.jsx)("p",{className:k,children:L}),(0,M.jsx)(E.Z,{details:C}),(0,M.jsx)("button",{className:I,onClick:function(){c(!0)},children:"Show more"}),n&&(0,M.jsx)(Z,{onClose:function(){c(!1)},advert:s})]})]})},F="AdvertList_list__s82Kb",S=function(e){var s=e.adverts,t=(0,a.v9)(n.xU),r=(0,a.v9)(n.zh);return t?(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("p",{children:"Loading..."})}):r?(0,M.jsx)(M.Fragment,{children:(0,M.jsx)("p",{children:"Error!"})}):(0,M.jsx)("ul",{className:F,children:s&&(null===s||void 0===s?void 0:s.length)>0?s.map((function(e){return(0,M.jsx)(R,{advert:e},e.id)})):(0,M.jsx)("p",{children:"No advertisements found"})})}},7395:function(e,s,t){t.r(s);var a=t(9434),n=t(6351),r=t(1223),i=t(9033),c=t(184);s.default=function(){var e=(0,a.v9)(n.Tc).favorites;return(0,c.jsx)("div",{className:i.Z.wrapper,children:(0,c.jsxs)("section",{className:i.Z.catalog,children:[(0,c.jsx)("h1",{className:"visually_hidden",children:"Favorites"}),(0,c.jsx)(r.Z,{adverts:e})]})})}},6351:function(e,s,t){t.d(s,{OG:function(){return a},Tc:function(){return i},xU:function(){return n},zh:function(){return r}});var a=function(e){return e.adverts.items},n=function(e){return e.adverts.isLoading},r=function(e){return e.adverts.error},i=function(e){return e.favorites}},9033:function(e,s){s.Z={wrapper:"pages_wrapper__jX0rS",wrapper_home:"pages_wrapper_home__xLQCv",container:"pages_container__-MxLQ",homepage:"pages_homepage__8WurU",catalog:"pages_catalog__gtlyf",filter:"pages_filter__2Yf-p",homepage_text:"pages_homepage_text__-x5RM",text_wrapper:"pages_text_wrapper__cVyuy",title:"pages_title__EC3Ll",button_link:"pages_button_link__JYPGP"}}}]);
//# sourceMappingURL=395.439c5494.chunk.js.map