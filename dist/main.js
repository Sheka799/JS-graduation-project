!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector("#free_visit_form");document.querySelector(".open-popup").addEventListener("click",(function(){e.style.display="block"})),e.addEventListener("click",(function(){var t=event.target;(t.classList.contains("close_icon")||t.classList.contains("overlay"))&&(e.style.display="none")}))},i=function(){var e=document.querySelector("#callback_form");document.querySelector(".callback-btn").addEventListener("click",(function(){e.style.display="block"})),e.addEventListener("click",(function(){var t=event.target;(t.classList.contains("close_icon")||t.classList.contains("overlay"))&&(e.style.display="none")}))},r=function(){var e=document.querySelector(".top-menu");document.addEventListener("scroll",(function(){document.documentElement.scrollTop>=187?(e.classList.add("stick"),e.classList.remove("static")):(e.classList.add("static"),e.classList.remove("stick"))}))},l=function(){var e=document.querySelector(".menu-button img"),t=document.querySelector(".close-menu-btn img"),n=document.querySelector(".popup-menu");e.classList.add("open-popup-btn"),t.classList.add("close-popup-btn");for(var o=document.querySelectorAll("li a"),i=0;i<o.length;i++)o[i].classList.add("link");document.addEventListener("click",(function(e){var t=e.target;t.classList.contains("open-popup-btn")?n.style.display="flex":(t.classList.contains("close-popup-btn")||t.classList.contains("link"))&&(n.style.display="none")}))},s=function(){var e=document.getElementById("totop"),t=document.querySelector(".header-main");document.addEventListener("scroll",(function(){document.documentElement.scrollTop<t.offsetHeight?(e.classList.add("hidden"),e.classList.remove("stick")):document.documentElement.scrollTop>t.offsetHeight&&(e.classList.add("stick"),e.classList.remove("hidden"))}))},c=function(){var e=document.querySelectorAll(".slide_main"),t=0,n=function(){var n;n="sliderBlock",e[t].classList.remove(n),++t>=e.length&&(t=0),function(e,t,n){e[t].classList.add(n)}(e,t,"sliderBlock")};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3;setInterval(n,e)}(5e3)},a=function(){for(var e,t=document.querySelectorAll(".slide-gallery"),n=(document.querySelectorAll(".gallery-btn"),document.querySelector(".gallery-bg")),o=document.querySelector(".gallery-dots"),i=0,r=0;r<t.length;r++)o.innerHTML+='<li class="dot"></li>';var l=document.querySelectorAll(".dot"),s=function(e,t,n){e[t].classList.remove(n)},c=function(e,t,n){e[t].classList.add(n)},a=function(){s(t,i,"active-gallery"),s(l,i,"dot-active"),++i>=t.length&&(i=0),c(t,i,"active-gallery"),c(l,i,"dot-active")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(a,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".gallery-btn, .dot")&&(s(t,i,"active-gallery"),s(l,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&l.forEach((function(e,t){e===n&&(i=t)})),i>=t.length&&(i=0),i<0&&(i=t.length-1),c(t,i,"active-gallery"),c(l,i,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".gallery-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".gallery-btn")||e.target.matches(".dot"))&&d()})),d(2e3)};function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){var e=new(function(){function e(t){var n=t.main,o=t.wrap,i=t.next,r=t.prev,l=t.position,s=void 0===l?0:l,c=t.slidesToShow,a=void 0===c?5:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(i),this.prev=document.querySelector(r),this.slidesToShow=a,this.options={position:s,widthSlide:Math.floor(100/this.slidesToShow)}}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addGloClass",value:function(){this.main.classList.add(".glo-slider"),this.wrap.classList.add(".glo-slider__wrap");var e=!0,t=!1,n=void 0;try{for(var o,i=this.slides[Symbol.iterator]();!(e=(o=i.next()).done);e=!0)o.value.classList.add("glo-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="sliderCarousel-style",e.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: 0 !important;\n      }\n    "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){this.options.position>0&&(--this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){this.options.position<this.slides.length-this.slidesToShow&&(++this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){}}])&&d(t.prototype,n),o&&d(t,o),e}())({main:".services-wrapper",wrap:".services-slider",prev:".prev-carousel",next:".next-carousel",slidesToShow:5});e.init()};(function(){var e=document.querySelector(".club-select"),t=document.querySelector(".clubs-list ul");e.addEventListener("click",(function(){"block"!==t.style.display?t.style.display="block":"block"===t.style.display&&(t.style.display="none")}))})(),o(),i(),r(),l(),s(),c(),a(),u()}]);