!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector("#free_visit_form");document.querySelector(".open-popup").addEventListener("click",(function(){e.style.display="block"})),e.addEventListener("click",(function(){var t=event.target;(t.classList.contains("close_icon")||t.classList.contains("overlay"))&&(e.style.display="none")}))},i=function(){var e=document.querySelector("#callback_form");document.querySelector(".callback-btn").addEventListener("click",(function(){e.style.display="block"})),e.addEventListener("click",(function(){var t=event.target;(t.classList.contains("close_icon")||t.classList.contains("overlay"))&&(e.style.display="none")}))},s=function(){var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",(function(){t.style.display="block",e.style.display="none"})),t.addEventListener("click",(function(){var e=event.target;(e.classList.contains("close_icon")||e.classList.contains("close-btn")||e.classList.contains("overlay"))&&(t.style.display="none")}))},r=function(){var e=document.querySelector(".top-menu");document.addEventListener("scroll",(function(){document.documentElement.scrollTop>=187?(e.classList.add("stick"),e.classList.remove("static")):(e.classList.add("static"),e.classList.remove("stick"))}))},c=function(){var e=document.querySelector(".menu-button img"),t=document.querySelector(".close-menu-btn img"),n=document.querySelector(".popup-menu");e.classList.add("open-popup-btn"),t.classList.add("close-popup-btn");for(var o=document.querySelectorAll("li a"),i=0;i<o.length;i++)o[i].classList.add("link");document.addEventListener("click",(function(e){var t=e.target;t.classList.contains("open-popup-btn")?n.style.display="flex":(t.classList.contains("close-popup-btn")||t.classList.contains("link"))&&(n.style.display="none")}))},l=function(){var e=document.getElementById("totop"),t=document.querySelector(".header-main");document.addEventListener("scroll",(function(){document.documentElement.scrollTop<t.offsetHeight?(e.classList.add("hidden"),e.classList.remove("stick")):document.documentElement.scrollTop>t.offsetHeight&&(e.classList.add("stick"),e.classList.remove("hidden"))}))},a=function(){var e=document.querySelectorAll(".slide_main"),t=0,n=function(){var n;n="sliderBlock",e[t].classList.remove(n),++t>=e.length&&(t=0),function(e,t,n){e[t].classList.add(n)}(e,t,"sliderBlock")};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e3;setInterval(n,e)}(5e3)},u=function(){for(var e,t=document.querySelectorAll(".slide-gallery"),n=(document.querySelectorAll(".gallery-btn"),document.querySelector(".gallery-bg")),o=document.querySelector(".gallery-dots"),i=0,s=0;s<t.length;s++)o.innerHTML+='<li class="dot"></li>';var r=document.querySelectorAll(".dot"),c=function(e,t,n){e[t].classList.remove(n)},l=function(e,t,n){e[t].classList.add(n)},a=function(){c(t,i,"active-gallery"),c(r,i,"dot-active"),++i>=t.length&&(i=0),l(t,i,"active-gallery"),l(r,i,"dot-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(a,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".gallery-btn, .dot")&&(c(t,i,"active-gallery"),c(r,i,"dot-active"),n.matches("#arrow-right")?i++:n.matches("#arrow-left")?i--:n.matches(".dot")&&r.forEach((function(e,t){e===n&&(i=t)})),i>=t.length&&(i=0),i<0&&(i=t.length-1),l(t,i,"active-gallery"),l(r,i,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".gallery-btn")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".gallery-btn")||e.target.matches(".dot"))&&u()})),u(2e3)};function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=function(){var e=new(function(){function e(t){var n=t.main,o=t.wrap,i=t.next,s=t.prev,r=t.infinity,c=void 0!==r&&r,l=t.responsive,a=void 0===l?[]:l,u=t.position,d=void 0===u?0:u,f=t.slidesToShow,m=void 0===f?5:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(i),this.prev=document.querySelector(s),this.slidesToShow=m,this.options={position:d,infinity:c,maxPosition:this.slides.length-this.slidesToShow,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=a}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add(".glo-slider"),this.wrap.classList.add(".glo-slider__wrap");var e=!0,t=!1,n=void 0;try{for(var o,i=this.slides[Symbol.iterator]();!(e=(o=i.next()).done);e=!0)o.value.classList.add("glo-slider__item")}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n      .glo-slider {\n        overflow: hidden !important;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        // display: flex !important;\n        // align-items: center !important;\n        // justify-content: center !important;\n        flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        margin: 0 !important;\n      }\n    "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),o=Math.max.apply(Math,d(n)),i=function(){var i=document.documentElement.clientWidth;if(i<o)for(var s=0;s<n.length;s++)i<n[s]&&(e.slidesToShow=e.responsive[s].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=t,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};i(),window.addEventListener("resize",i)}}])&&f(t.prototype,n),o&&f(t,o),e}())({main:".services-wrapper",wrap:".services-slider",prev:".prev-carousel",next:".next-carousel",slidesToShow:5,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:4},{breakpoint:768,slidesToShow:3},{breakpoint:576,slidesToShow:2}]});e.init()},h=function(){var e=document.getElementById("thanks"),t=document.querySelector("#free_visit_form"),n=document.querySelector("#callback_form"),o=document.querySelector("#card_order"),i="Подтвердите согласие на обработку данных...",s=document.getElementById("check1"),r=document.getElementById("check2"),c=document.getElementById("check"),l=document.getElementById("card_check"),a=document.getElementById("footer_leto_mozaika"),u=document.getElementById("footer_leto_schelkovo");e.addEventListener("click",(function(){var t=event.target;(t.classList.contains("close_icon")||t.classList.contains("close-btn")||t.classList.contains("overlay"))&&(e.style.display="none")}));var d=document.getElementById("banner-form"),f=document.getElementById("form1"),m=document.getElementById("form2"),h=document.getElementById("footer_form"),p=document.createElement("div");p.style.cssText="font-size: 14px",p.style.cssText="color: white";var y=function(){e.style.display="block",t.style.display="none",n.style.display="none";var o=document.querySelector(".thanks_h4"),i=document.querySelector(".thanks_p");o.textContent="Ошибка",i.textContent="Ваша заявка не отправлена!"},v=function(){p.textContent="",p.textContent=""},w="Пожалуйста подождите...",g=function(){e.style.display="block",t.style.display="none",n.style.display="none"},k=document.getElementById("phone"),E=document.getElementById("callback_form2-phone"),T=document.getElementById("callback_form1-phone"),S=document.getElementById("callback_footer_form-phone"),b=document.getElementById("callback_form-phone");d.addEventListener("input",(function(){k.value=k.value.replace(/[^\+\d]/g,"")})),f.addEventListener("input",(function(){T.value=T.value.replace(/[^\+\d]/g,"")})),m.addEventListener("input",(function(){E.value=E.value.replace(/[^\+\d]/g,"")})),h.addEventListener("input",(function(){S.value=S.value.replace(/[^\+\d]/g,"")})),b.addEventListener("input",(function(){b.value=b.value.replace(/[^\+\d]/g,"")}));var L=document.querySelectorAll(".form-name");document.addEventListener("input",(function(){for(var e=0;e<L.length;e++)L[e].value=L[e].value.replace(/[^А-Яа-яЁё\s]/gi,"")})),d.addEventListener("submit",(function(e){if(e.preventDefault(),p.textContent=w,m.appendChild(p),s.checked){p.textContent=w,p.style.cssText="color: white";var t=new FormData(d),n={};t.forEach((function(e,t){n[t]=e})),x(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),d.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),d.reset(),console.error(e)}))}else d.appendChild(p),p.textContent=i,setTimeout(v,3e3)})),f.addEventListener("submit",(function(e){if(e.preventDefault(),p.textContent=w,m.appendChild(p),c.checked){p.textContent=w,p.style.cssText="color: white";var t=new FormData(f),n={};t.forEach((function(e,t){n[t]=e})),x(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),f.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),f.reset(),console.error(e)}))}else f.appendChild(p),p.textContent=i,setTimeout(v,3e3)})),m.addEventListener("submit",(function(e){if(e.preventDefault(),p.textContent=w,m.appendChild(p),r.checked){p.textContent=w,p.style.cssText="color: white";var t=new FormData(m),n={};t.forEach((function(e,t){n[t]=e})),x(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),m.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),m.reset(),console.error(e)}))}else m.appendChild(p),p.textContent=i,setTimeout(v,3e3)})),h.addEventListener("submit",(function(e){if(e.preventDefault(),p.textContent=w,a.checked){p.textContent=w,p.style.cssText="color: white";var t=new FormData(h),n={};t.forEach((function(e,t){n[t]=e})),x(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),h.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),h.reset(),console.error(e)}))}else if(u.checked){p.textContent=w,p.style.cssText="color: white";var o=new FormData(h),i={};o.forEach((function(e,t){i[t]=e})),x(i).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),h.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),h.reset(),console.error(e)}))}else h.appendChild(p),p.textContent="Выберите клуб...",setTimeout(v,3e3)})),o.addEventListener("submit",(function(e){if(e.preventDefault(),p.textContent=w,o.appendChild(p),p.style.cssText="color: black",l.checked){p.textContent=w;var t=new FormData(o),n={};t.forEach((function(e,t){n[t]=e})),x(n).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),o.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),o.reset(),console.error(e)}))}else if(l.checked){p.style.cssText="color: white";var s=new FormData(o),r={};s.forEach((function(e,t){r[t]=e})),x(r).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),o.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),o.reset(),console.error(e)}))}else if(l.checked){p.style.cssText="color: white";var c=new FormData(o),a={};c.forEach((function(e,t){a[t]=e})),x(a).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),o.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),o.reset(),console.error(e)}))}else if(l.checked){p.style.cssText="color: white";var u=new FormData(o),d={};u.forEach((function(e,t){d[t]=e})),x(d).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),o.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),o.reset(),console.error(e)}))}else if(l.checked){p.style.cssText="color: white";var f=new FormData(o),m={};f.forEach((function(e,t){m[t]=e})),x(m).then((function(e){if(200!==e.status)throw new Error("status network not 200");g(),setTimeout(v,1800),o.reset()})).catch((function(e){setTimeout(y,2e3),setTimeout(v,1800),o.reset(),console.error(e)}))}else o.appendChild(p),p.style.cssText="color: black",p.style.cssText="font-size: 20px",p.textContent=i,setTimeout(v,3e3)}));var x=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};(function(){var e=document.querySelector(".club-select"),t=document.querySelector(".clubs-list ul");e.addEventListener("click",(function(){"block"!==t.style.display?t.style.display="block":"block"===t.style.display&&(t.style.display="none")}))})(),o(),i(),s(),r(),c(),l(),a(),u(),m(),h()}]);