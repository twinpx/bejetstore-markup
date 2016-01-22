/*!
 * The best internet store
 * 2016 Tatiana
 * Licensed under ISC
 */
/*! HTML5 Shiv vpre3.5 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=l.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){l.shivMethods||c(a);var d;return d=b[a]?b[a].cloneNode():k.test(a)?(b[a]=c(a)).cloneNode():c(a),d.canHaveChildren&&!j.test(a)?f.appendChild(d):d},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(l,f)}function f(a){var b;return a.documentShived?a:(l.shivCSS&&!g&&(b=!!c(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),h||(b=!e(a)),b&&(a.documentShived=b),a)}var g,h,i=a.html5||{},j=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,k=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;!function(){var c=b.createElement("a");c.innerHTML="<xyz></xyz>",g="hidden"in c,g&&"function"==typeof injectElementWithStyles&&injectElementWithStyles("#modernizr{}",function(b){b.hidden=!0,g="none"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).display}),h=1==c.childNodes.length||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return"undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}()}();var l={elements:i.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!(i.shivCSS===!1),shivMethods:!(i.shivMethods===!1),type:"default",shivDocument:f};a.html5=l,f(b)}(this,document),/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}}),/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011�2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function b(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var c,d=a.ui.mouse.prototype,e=d._mouseInit,f=d._mouseDestroy;d._touchStart=function(a){var d=this;!c&&d._mouseCapture(a.originalEvent.changedTouches[0])&&(c=!0,d._touchMoved=!1,b(a,"mouseover"),b(a,"mousemove"),b(a,"mousedown"))},d._touchMove=function(a){c&&(this._touchMoved=!0,b(a,"mousemove"))},d._touchEnd=function(a){c&&(b(a,"mouseup"),b(a,"mouseout"),this._touchMoved||b(a,"click"),c=!1)},d._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),e.call(b)},d._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),f.call(b)}}}(jQuery),function(a){"use strict";a(["jquery"],function(a){function b(b){return a.isFunction(b)||"object"==typeof b?b:{top:b,left:b}}var c=a.scrollTo=function(b,c,d){return a(window).scrollTo(b,c,d)};return c.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},c.window=function(){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||-1!=a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||"BackCompat"==d.compatMode?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),"max"==d&&(d=9e9),f=a.extend({},c.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=b(f.offset),f.over=b(f.over),this._scrollable().each(function(){function g(a){j.animate(l,e,f.easing,a&&function(){a.call(this,k,f)})}if(null!=d){var h,i=this,j=a(i),k=d,l={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}if(k=m?a(k):a(k,this),!k.length)return;case"object":(k.is||k.style)&&(h=(k=a(k)).offset())}var n=a.isFunction(f.offset)&&f.offset(i,k)||f.offset;a.each(f.axis.split(""),function(a,b){var d="x"==b?"Left":"Top",e=d.toLowerCase(),o="scroll"+d,p=i[o],q=c.max(i,b);if(h)l[o]=h[e]+(m?0:p-j.offset()[e]),f.margin&&(l[o]-=parseInt(k.css("margin"+d))||0,l[o]-=parseInt(k.css("border"+d+"Width"))||0),l[o]+=n[e]||0,f.over[e]&&(l[o]+=k["x"==b?"width":"height"]()*f.over[e]);else{var r=k[e];l[o]=r.slice&&"%"==r.slice(-1)?parseFloat(r)/100*q:r}f.limit&&/^\d+$/.test(l[o])&&(l[o]=l[o]<=0?0:Math.min(l[o],q)),!a&&f.queue&&(p!=l[o]&&g(f.onAfterFirst),delete l[o])}),g(f.onAfter)}}).end()},c.max=function(b,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])},c})}("function"==typeof define&&define.amd?define:function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("jquery")):b(jQuery)}),!function(a){function b(){var b=a(".col-sm-6 > h1");b.text().length>=25&&b.addClass("i-small")}function c(){var b=a(".bj-text-more a");b.length&&b.each(function(){function b(a,b,c){var d,e,f;return c=parseInt(c,10),d=b.height(),e=a.find(".bj-text-more-wrapper"),e.height()<d?void g.remove():(f=Math.floor(d/c)*c,void e.height(f))}var c,d,e,f,g=a(this);return c=g.closest(".row"),d=c.find("img"),d.length?(f=c.find(".bj-text-more-wrapper"),e=c.css("line-height"),containerHeight=c.find(".bj-text-more-container").height(),d[0].complete?b(c,d,e):d.load(function(){b(c,d,e)}),void g.click(function(a){a.preventDefault(),f.height(containerHeight),g.remove()})):void g.remove()})}function d(b,c){var d,e=window.location.search,f=a(b);-1!==String(e).search(c+"=")&&f.length&&setTimeout(function(){d=f.offset().top-20,a.scrollTo(d,500)},200)}function e(){a(".bj-page-header__search .glyphicon").click(function(){a(this).closest(".bj-page-header__search").addClass("i-active").find("input").focus()}),a(".bj-page-header__search__input").blur(function(){a(this).val("").closest(".bj-page-header__search").removeClass("i-active")})}function f(){a(".bj-page-header__menu-link").click(function(b){b.preventDefault(),b.stopPropagation(),a(".bj-page-header__dropdown article").slideDown()}),a(".bj-page-header__dropdown article").click(function(a){a.stopPropagation()}),a(".bj-page-header__dropdown .up").click(function(b){a(this).closest("article").slideUp(),b.preventDefault()}),a(document).click(function(){a(".bj-page-header__dropdown article").slideUp()})}function g(){var b={html:!0,trigger:"click",placement:"bottom"};a(".bj-page-header .bj-logo-space__icon.glyphicon-user").popover(b)}function h(){function b(){function b(a){a.preventDefault(),i.submit(),f(h),e(k),e(l)}function c(b){var c=a(this),d=c.attr("action"),e=c.attr("method"),f=c.serialize();b.preventDefault(),f&&a.ajax({url:d,type:e,dataType:"json",data:f})}function d(b){var c=a(this),d=c.attr("action"),g=c.attr("method"),h=c.serialize();b.preventDefault(),h&&a.ajax({url:d,type:g,dataType:"json",data:h,success:function(a){if(a&&!(!a instanceof Object))if(a.success)l.hasClass("show")&&e(l),e(c),f(k);else if(a.error){if(l.is(":visible"))return;f(l)}}})}function e(a){a.removeClass("show").addClass("hide")}function f(a){a.removeClass("hide").addClass("show")}var g=a(this),h=g.find(".bj-news-subscribe-form"),i=g.find(".bj-news-unsubscribe-form"),j=g.find(".bj-news-unsubscribe-link"),k=g.find(".alert-success"),l=g.find(".alert-warning");h.submit(d),i.submit(c),j.click(b)}a(".bj-news-subscribe__s").each(b)}function i(){a(".i-link-to-comments-form").click(function(b){b.preventDefault(),a.scrollTo(".blog-comment-form",500);var c=document.getElementsByClassName("blog-comment-form")[0],d=c.getElementsByTagName("FORM")[0];d.getElementsByTagName("TEXTAREA")[0].focus()})}function j(b){function c(){d(),e()}function d(){j.$elem=a(b),j.$elem.data("FloatPhone",j),j.scrollEvent,j.scrollIntervalEvent,j.scrollIntervalId,j.showTimeoutId,j.showTime=3e3}function e(){f(),a(window).bind("scroll",g)}function f(){j.showTimeoutId=setTimeout(function(){h()},j.showTime)}function g(a){j.scrollEvent=a,j.scrollIntervalEvent||(j.scrollIntervalEvent=a,clearTimeout(j.showTimeoutId),i(),j.scrollIntervalId=setInterval(function(){return j.scrollIntervalEvent!==j.scrollEvent?void(j.scrollIntervalEvent=j.scrollEvent):(clearInterval(j.scrollIntervalId),j.scrollIntervalEvent=void 0,void f())},100))}function h(){j.$elem.addClass("i-visible")}function i(){j.$elem.removeClass("i-visible")}var j=this;c()}function k(){function a(){var a="ontouchstart"in document.documentElement;return a&&$(document).width()<=600?"mobile":"desktop"}function b(){return $.cookie("mobile")}function c(){window.location.replace(window.location)}function d(a){$.cookie("mobile",a,{expires:30,path:"/",domain:window.location.hostname})}var e,f;e=a(),f=b(),f&&e===f||(d(e),c(e))}function l(){$('[role="tab"]').bind("click",function(){var a=$(this),b=a.closest(".nav-tabs").parent().find(".bx_catalog_item_container");b.each(function(){var a=window["ob"+$(this).attr("id")];a&&a instanceof JCCatalogSection&&a.lastElement&&setTimeout(function(){a.containerHeight=parseInt(a.obProduct.parentNode.offsetHeight,10)},100)})})}a(function(){setTimeout(function(){$("#sideNavPanel").css({left:"-310px",visibility:"visible"})},100),$("#nav-button").sideNav({menuWidth:300}),k(),l(),window.BX&&BX.addCustomEvent("onFrameDataReceived",function(){a(".bj-logo-space [data-toggle='tooltip']").tooltip(),a(".bj-sorting [title]").tooltip(),g()}),g(),e(),f(),h(),i(),d(".bj-sorting","sort"),d(".bj-catalogue-filter","set_filter"),c(),b(),matchMedia?window.matchMedia("(min-width: 500px)").matches&&new j("#b-float-phone"):a(document).width()>=500&&new j("#b-float-phone"),a(".bj-hidden-link").click(function(b){b.preventDefault();var c=a(this);return c.hasClass("i-up")?void c.removeClass("i-up").parent().find(".bj-hidden__hidden").slideUp():void c.addClass("i-up").parent().find(".bj-hidden__hidden").slideDown()})})}(jQuery);