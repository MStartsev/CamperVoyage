"use strict";(self.webpackChunkcampervoyage=self.webpackChunkcampervoyage||[]).push([[395],{1223:function(e,t,n){n.d(t,{Z:function(){return F}});var s=n(9434),a=n(6351),r=n(9439),i=n(2791),c=n(4164),l=n(9),d=n(5677),o=n(9348),_={modal_overlay:"ModalAdvert_modal_overlay__Xnqrm",description:"ModalAdvert_description__oCswk",container:"ModalAdvert_container__iXlnS",list_container:"ModalAdvert_list_container__YR9Rx",nav:"ModalAdvert_nav__LmytL",nav_link:"ModalAdvert_nav_link__ncSMK",accent:"ModalAdvert_accent__3sqSI",details_wrapper:"ModalAdvert_details_wrapper__A4QR6",details:"ModalAdvert_details__L+2ix"},v="AdvertItem_item__YDGtQ",m="AdvertItem_img__fGhaR",u="AdvertItem_content__Ar1Bl",h="AdvertItem_header__SnV1f",x="AdvertItem_price_wrapper__+eKUC",p="AdvertItem_info__4VCFs",j="AdvertItem_header_wrapper__XFtU3",f="AdvertItem_title__KcX0E",g="AdvertItem_price__WqeWv",N="AdvertItem_rating__5bu8I",w="AdvertItem_location__KBpyI",y="AdvertItem_icon__TwHqI",A="AdvertItem_rating_text__58lzI",k="AdvertItem_description__NGK06",b="AdvertItem_img_wrapper__b3NgY",I=n(184),C=function(e){var t=e.advert,n=(0,i.useState)("features"),s=(0,r.Z)(n,2),a=s[0],c=s[1];return(0,I.jsxs)("div",{className:"".concat(_.modal_window," "),children:[(0,I.jsx)("div",{children:(0,I.jsxs)("div",{className:j,children:[(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)("h2",{className:f,children:t.name}),(0,I.jsx)("div",{className:x})]}),(0,I.jsxs)("div",{className:p,children:[(0,I.jsxs)("p",{className:N,children:[(0,I.jsx)("svg",{className:y,width:16,height:16,children:(0,I.jsx)("use",{xlinkHref:"".concat(o.Z,"#star")})}),(0,I.jsxs)("span",{className:A,children:[t.rating," (",t.reviews.length," Reviews)"]})]}),(0,I.jsx)("span",{className:w,children:t.location})]}),(0,I.jsxs)("p",{className:g,children:["\u20ac",t.price.toFixed(2)]})]})}),(0,I.jsx)("div",{className:_.container,children:(0,I.jsxs)("div",{className:_.list_container,children:[(0,I.jsx)("ul",{className:b,children:t.gallery.map((function(e){return(0,I.jsx)("li",{children:(0,I.jsx)("img",{className:m,src:e,alt:t.name,width:290,height:310})},e)}))}),(0,I.jsx)("p",{className:"".concat(_.description," text"),children:t.description}),(0,I.jsxs)("div",{className:_.nav,children:[(0,I.jsx)("button",{className:"".concat(_.nav_link," ").concat("features"===a&&_.accent),onClick:function(){return c("features")},children:"Features"}),(0,I.jsx)("button",{className:"".concat(_.nav_link," ").concat("rewiews"===a&&_.accent),onClick:function(){return c("rewiews")},children:"Reviews"})]}),(0,I.jsx)("div",{className:_.details_wrapper,children:(0,I.jsxs)("div",{className:_.details,children:["features"===a&&(0,I.jsx)(d.Z,{advert:t}),"rewiews"===a&&(0,I.jsx)(l.Z,{reviews:t.reviews})]})})]})})]})},M={overlay:"Modal_overlay__r63M6",modal:"Modal_modal__DJDMv",close_button:"Modal_close_button__4xTF9"},E=function(e){var t=e.children,n=e.advert,s=e.onClose;return(0,i.useEffect)((function(){var e=function(e){"Escape"===e.key&&s()},t=function(e){e.target.classList.contains(M.overlay)&&s()};return document.addEventListener("keydown",e),document.addEventListener("click",t),document.body.style.overflow="hidden",document.body.style.paddingRight="15px",function(){document.removeEventListener("keydown",e),document.removeEventListener("click",t),document.body.style.overflow="auto",document.body.style.paddingRight="0"}}),[s]),c.createPortal((0,I.jsx)("div",{className:M.overlay,children:(0,I.jsxs)("div",{className:M.modal,children:[(0,I.jsx)("button",{className:M.close_button,onClick:s,children:(0,I.jsx)("svg",{className:M.modal_close_icon,width:32,height:32,children:(0,I.jsx)("use",{href:"".concat(o.Z,"#close")})})}),(0,I.jsx)("div",{className:M.content,children:t}),(0,I.jsx)(C,{advert:n})]})}),document.getElementById("modal-root"))},L=n(9186),Z=n(9894),R=function(e){var t=e.advert,n=(0,i.useState)(!1),s=(0,r.Z)(n,2),a=s[0],c=s[1],l=t.id,d=t.name,_=t.price,b=t.location,C=t.description,M=t.details,R=t.rating,B=t.reviews,F=t.gallery;return(0,I.jsxs)("li",{className:v,id:l,children:[(0,I.jsx)("img",{className:m,src:F&&(null===F||void 0===F?void 0:F.length)&&F[0],alt:d,width:290,height:310,loading:"lazy"}),(0,I.jsxs)("div",{className:u,children:[(0,I.jsxs)("div",{className:j,children:[(0,I.jsxs)("div",{className:h,children:[(0,I.jsx)("h2",{className:f,children:d}),(0,I.jsx)("div",{className:x,children:(0,I.jsxs)("p",{className:g,children:["\u20ac",_.toFixed(2)]})})]}),(0,I.jsxs)("div",{className:p,children:[(0,I.jsxs)("p",{className:N,children:[(0,I.jsx)("svg",{className:y,width:16,height:16,children:(0,I.jsx)("use",{xlinkHref:"".concat(o.Z,"#star")})}),(0,I.jsxs)("span",{className:A,children:[R," (",B.length," Reviews)"]})]}),(0,I.jsx)("span",{className:w,children:b})]})]}),(0,I.jsx)("p",{className:k,children:C}),(0,I.jsx)(L.Z,{details:M}),(0,I.jsx)(Z.EC,{onClick:function(){c(!0)},children:"Show more"}),a&&(0,I.jsx)(E,{onClose:function(){c(!1)},advert:t})]})]})},B="AdvertList_list__s82Kb",F=function(e){var t=e.adverts,n=(0,s.v9)(a.xU),r=(0,s.v9)(a.zh);return n?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("p",{children:"Loading..."})}):r?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("p",{children:"Error!"})}):(0,I.jsx)("ul",{className:B,children:t&&(null===t||void 0===t?void 0:t.length)>0?t.map((function(e){return(0,I.jsx)(R,{advert:e},e.id)})):(0,I.jsx)("p",{children:"No advertisements found"})})}},9894:function(e,t,n){n.d(t,{EC:function(){return c},Gz:function(){return i}});var s="Button_accent_btn__BdPoK Button_primary_btn__AqE5e",a="Button_ligth_btn__VuCBi Button_primary_btn__AqE5e",r=n(184),i=function(e){var t=e.children,n=e.onClick;return(0,r.jsx)("button",{className:a,type:"button",onClick:n,children:t})},c=function(e){var t=e.children,n=e.onClick;return(0,r.jsx)("button",{className:s,type:"button",onClick:n,children:t})}},7395:function(e,t,n){n.r(t);var s=n(9434),a=n(6351),r=n(1223),i=n(9033),c=n(184);t.default=function(){var e=(0,s.v9)(a.Tc).favorites;return(0,c.jsx)("div",{className:i.Z.wrapper,children:(0,c.jsxs)("section",{className:i.Z.catalog,children:[(0,c.jsx)("h1",{className:"visually_hidden",children:"Favorites"}),(0,c.jsx)(r.Z,{adverts:e})]})})}},6351:function(e,t,n){n.d(t,{OG:function(){return s},Tc:function(){return i},xU:function(){return a},zh:function(){return r}});var s=function(e){return e.adverts.items},a=function(e){return e.adverts.isLoading},r=function(e){return e.adverts.error},i=function(e){return e.favorites}},9033:function(e,t){t.Z={wrapper:"pages_wrapper__jX0rS",wrapper_home:"pages_wrapper_home__xLQCv",container:"pages_container__-MxLQ",homepage:"pages_homepage__8WurU",catalog:"pages_catalog__gtlyf",filter:"pages_filter__2Yf-p",homepage_text:"pages_homepage_text__-x5RM",text_wrapper:"pages_text_wrapper__cVyuy",title:"pages_title__EC3Ll",button_link:"pages_button_link__JYPGP"}}}]);
//# sourceMappingURL=395.dd9d5944.chunk.js.map