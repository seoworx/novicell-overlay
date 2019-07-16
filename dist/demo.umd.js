!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(t){var o=t.selector,n=t.className,i=t.onCreate,r=t.onLoaded,s=t.onDestroy,a=t.overlayElem,l=void 0===a?"":a,d=t.overlayContainer,c=void 0===d?"":d,v=t.overlayContent,u=void 0===v?"":v,y=t.backdrop,h=void 0===y?"":y,p=t.content,m=void 0===p?"":p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.self=this.self,this.className=n,this.options={},this.selector=o,this.overlayElem=l,this.overlayContainer=c,this.overlayContent=u,this.backdrop=h,this.content=m,this.onCreate=i,this.onLoaded=r,this.onDestroy=s,this.isVideo=!1,this.create=function(){if("function"==typeof this.onCreate&&this.onCreate(),f(),this.hasOwnProperty("selector")&&null!==o){var e=document.querySelector(o);if(!e)return void console.warn("novicell.overlay: element does not exist. Please provide a valid selector for use in document.querySelector.");m=e.innerHTML,this.constructOverlay()}else if(this.hasOwnProperty("element")&&null!==element){var t=t;if(!t)return void console.warn("novicell.overlay: element does not exist. Please provide a valid DOM element.");m=t.innerHTML,this.constructOverlay()}else{if(!this.hasOwnProperty("videoId"))return void console.error("novicell.overlay: no content to display! Please set a selector or a url to load.");if(null===videoId)return void console.warn("novicell.overlay: video-id is empty. Please provide a video-id for use in video embed code (we support only Vimeo and YouTube).");var n="";if(isVideo=!0,"vimeo"==type)n="https://player.vimeo.com/video/"+videoId+"?autoplay="+autoplay;else{if("youtube"!=type)return;n="https://www.youtube.com/embed/"+videoId+"?autoplay="+autoplay+"&rel=0"}var i=document.createElement("iframe");i.setAttribute("src",n),i.setAttribute("frameborder",0),i.setAttribute("allowfullscreen",""),i.setAttribute("width","100%"),i.setAttribute("height","100%"),m=i.outerHTML,constructOverlay()}};var f=function e(){document.querySelector("#js-novi-overlay")&&(this.overlayElem.parentElement.removeChild(this.overlayElem),this.backdrop.parentElement.removeChild(this.backdrop),document.removeEventListener("keyup",e()),document.documentElement.classList.remove("no-scroll","novi-overlay--open"),this.isVideo=!1,"function"==typeof this.onDestroy&&this.onDestroy())};this.constructOverlay=function(){this.setupBackdrop(),this.setupOverlay(),this.setupOverlayContainer(),this.setupCloseButton(),document.documentElement.classList.add("no-scroll"),"function"==typeof this.onLoaded&&this.onLoaded()},this.setupBackdrop=function(){this.backdrop=document.createElement("div"),this.backdrop.classList.add("novi-backdrop"),this.backdrop.id="js-novi-backdrop",this.backdrop.addEventListener("click",function(e){(e.target.classList.contains("novi-overlay")||e.target.classList.contains("novi-overlay__container"))&&f()}),document.querySelector("body").appendChild(this.backdrop)},this.setupOverlay=function(){this.overlayElem=document.createElement("div"),this.overlayElem.classList.add("novi-overlay"),this.overlayElem.id="js-novi-overlay",this.hasOwnProperty("className")&&this.overlayElem.classList.add(this.className),this.backdrop.appendChild(this.overlayElem)},this.setupOverlayContainer=function(){this.overlayContainer=document.createElement("div"),this.overlayContainer.classList.add("novi-overlay__container"),this.overlayContent=document.createElement("div"),this.overlayContent.classList.add("novi-overlay__content"),this.isVideo&&this.overlayContent.classList.add("novi-overlay__content--video"),this.overlayContent.innerHTML=m,this.overlayContainer.appendChild(this.overlayContent),this.overlayElem.appendChild(this.overlayContainer)},this.setupCloseButton=function(){var e=document.createElement("button");e.classList.add("novi-overlay-close","button--close"),e.type="button",e.id="js-novi-overlay-close",e.addEventListener("click",f()),document.addEventListener("keydown",function(e){27===e.keyCode&&f()}),this.overlayContent.appendChild(e)},this.get=function(e){return new Promise(function(t,o){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){n.status>=200&&n.status<400?t(n.response):o(Error(n.statusText))},n.onerror=function(){o(Error("Network Error"))},n.send()})}}document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("#js-overlay-trigger");t.addEventListener("click",function(o){o.preventDefault(),new e({selector:t.getAttribute("data-element"),className:"selector-overlay",onCreate:function(){console.log("created")},onLoaded:function(){console.log("loaded")},onDestroy:function(){console.log("Destroyed")}}).create()});for(var o=document.querySelectorAll(".js-video-overlay-trigger"),n=0;n<o.length;n++)o[n].addEventListener("click",function(e){e.preventDefault();var t=e.target;novicell.overlay.create({videoId:t.getAttribute("data-video-id"),type:t.getAttribute("data-type"),autoplay:1,class:"video-overlay"})})})});
