"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),main=function(){console.log("Ready!");var e=function(){function e(){_classCallCheck(this,e),this.buttons={start:new r("play","btn--green","Play!"),higher:new r("higher","btn--green","Higher!"),lower:new r("lower","btn--red","Lower!"),correct:new r("correct","btn--blue","Correct!")},this.text={intro:new n("Let's play a number guessing game.")},this.mainMenu={game__content:[this.text.intro],game__buttons:[this.buttons.start,this.buttons.higher]}}return _createClass(e,[{key:"render",value:function(){var e=this,t=(document.getElementsByClassName("game__buttons")[0],function(t){e.mainMenu[t].forEach(function(e){return e.render(t)})});for(var n in this.mainMenu)t(n)}}]),e}(),t=function(){function e(){_classCallCheck(this,e),this.element}return _createClass(e,[{key:"render",value:function(e){e||console.error("Target not defined!",e),console.log(e);var t=document.getElementsByClassName(e)[0];t||console.error("Target element is undefined!",t),console.log("Rendering: ",this.element," to target: ",t),t.appendChild(this.element)}}]),e}(),n=function(e){function t(e){_classCallCheck(this,t);var n=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.element=document.createElement("p"),n.element.innerText=e,n.element.classList.add("text"),n}return _inherits(t,e),t}(t),r=function(e){function t(e,n,r){_classCallCheck(this,t);var o=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.element=document.createElement("button"),o.element.innerText=r,o.element.setAttribute("id",e),o.element.classList.add("btn",n),o.element.addEventListener("click",function(e){return console.log(e.target)}),o}return _inherits(t,e),_createClass(t,[{key:"get",value:function(){return this.element}},{key:"hide",value:function(){this.element.setAttribute("disabled","disabled"),this.element.style.display="none"}},{key:"show",value:function(){this.element.removeAttribute("disabled"),this.element.style.dsiplay="inline-block"}}]),t}(t),o=function(){function t(){_classCallCheck(this,t),this.status="stopped",this.lastNumber=0,this.currentNumber=0,this.numbersGuessed=[],this.maxNumber=100}return _createClass(t,[{key:"init",value:function(){var t=new e;t.render()}},{key:"randomNumber",value:function(){return Math.floor(Math.random()*this.maxNumber)+1}}]),t}(),s=new o;s.init()}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJVSUhhbmRsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiYnV0dG9ucyIsInN0YXJ0IiwiQnV0dG9uIiwiaGlnaGVyIiwibG93ZXIiLCJjb3JyZWN0IiwiaW50cm8iLCJUZXh0IiwibWFpbk1lbnUiLCJnYW1lX19jb250ZW50IiwidGV4dCIsImdhbWVfX2J1dHRvbnMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl90aGlzIiwieCIsImZvckVhY2giLCJlbGVtZW50IiwicmVuZGVyIiwiX2xvb3AiLCJVSUVsZW1lbnQiLCJ0YXJnZXQiLCJlcnJvciIsInRhcmdldEVsZW1lbnQiLCJfVUlFbGVtZW50IiwiX3RoaXMyIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiX2luaGVyaXRzIiwiX1VJRWxlbWVudDIiLCJpZCIsImNsYXNzTmFtZSIsIl90aGlzMyIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZGlzcGxheSIsInN0eWxlIiwiZHNpcGxheSIsIkdhbWUiLCJzdGF0dXMiLCJsYXN0TnVtYmVyIiwiY3VycmVudE51bWJlciIsIm1heE51bWJlciIsIlVJIiwiZ2FtZSIsImluaXQiXSwibWFwcGluZ3MiOiI0M0JBQUlBLEtBQVEsV0FDWEMsUUFBUUMsSUFBSSxTQURLLElBR1hDLEdBSFcsV0FJaEIsUUFBQUEsS0FBY0MsZ0JBQUFDLEtBQUFGLEdBQ2JFLEtBQUtDLFNBQ0pDLE1BQU8sR0FBSUMsR0FBTyxPQUFRLGFBQWMsU0FDeENDLE9BQVEsR0FBSUQsR0FBTyxTQUFVLGFBQWMsV0FDM0NFLE1BQU8sR0FB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ekQsRUF6Q0l5RCxHQUFBakMsWUE5Q0ZSLElBQUEsZUFBQUMsTUFBQSxXQWlEZixNQUFLTSxNQUFBQSxNQUFRZSxLQUFBQSxTQUFicEMsS0FBQXNELFdBQUEsTUFqRGVKLEtBK0ZiTSxFQUFPLEdBQUlOLEVBL0ZFTSxHQUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1haW4gPSAoKCkgPT4ge1xyXG5cdGNvbnNvbGUubG9nKFwiUmVhZHkhXCIpO1xyXG5cclxuXHRjbGFzcyBVSUhhbmRsZXIge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHRoaXMuYnV0dG9ucyA9IHtcclxuXHRcdFx0XHRzdGFydDogbmV3IEJ1dHRvbigncGxheScsICdidG4tLWdyZWVuJywgJ1BsYXkhJyksXHJcblx0XHRcdFx0aGlnaGVyOiBuZXcgQnV0dG9uKCdoaWdoZXInLCAnYnRuLS1ncmVlbicsICdIaWdoZXIhJyksXHJcblx0XHRcdFx0bG93ZXI6IG5ldyBCdXR0b24oJ2xvd2VyJywgJ2J0bi0tcmVkJywgJ0xvd2VyIScpLFxyXG5cdFx0XHRcdGNvcnJlY3Q6IG5ldyBCdXR0b24oJ2NvcnJlY3QnLCAnYnRuLS1ibHVlJywgJ0NvcnJlY3QhJylcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy50ZXh0ID0ge1xyXG5cdFx0XHRcdGludHJvOiBuZXcgVGV4dCgnTGV0XFwncyBwbGF5IGEgbnVtYmVyIGd1ZXNzaW5nIGdhbWUuJyksXHJcblx0XHRcdH07XHJcblx0XHRcdHRoaXMubWFpbk1lbnUgPSB7XHJcblx0XHRcdFx0Z2FtZV9fY29udGVudDogW3RoaXMudGV4dC5pbnRyb10sXHJcblx0XHRcdFx0Z2FtZV9fYnV0dG9uczogW3RoaXMuYnV0dG9ucy5zdGFydCwgdGhpcy5idXR0b25zLmhpZ2hlcl1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHRcdHJlbmRlcigpIHtcclxuXHRcdFx0dmFyIGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lX19idXR0b25zJylbMF07XHJcblx0XHRcdGZvcihsZXQgeCBpbiB0aGlzLm1haW5NZW51KSB7XHJcblx0XHRcdFx0dGhpcy5tYWluTWVudVt4XS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbmRlcih4KSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjbGFzcyBVSUVsZW1lbnQge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudDtcclxuXHRcdH1cclxuXHRcdHJlbmRlcih0YXJnZXQpIHtcclxuXHRcdFx0aWYoIXRhcmdldCkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUYXJnZXQgbm90IGRlZmluZWQhXCIsIHRhcmdldCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2codGFyZ2V0KTtcclxuXHRcdFx0dmFyIHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRhcmdldClbMF07XHJcblx0XHRcdGlmKCF0YXJnZXRFbGVtZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIlRhcmdldCBlbGVtZW50IGlzIHVuZGVmaW5lZCFcIiwgdGFyZ2V0RWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coXCJSZW5kZXJpbmc6IFwiLCB0aGlzLmVsZW1lbnQsIFwiIHRvIHRhcmdldDogXCIsIHRhcmdldEVsZW1lbnQpO1xyXG5cdFx0XHR0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbGFzcyBUZXh0IGV4dGVuZHMgVUlFbGVtZW50IHtcclxuXHRcdGNvbnN0cnVjdG9yKHRleHQpIHtcclxuXHRcdFx0c3VwZXIoKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dDtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjbGFzcyBCdXR0b24gZXh0ZW5kcyBVSUVsZW1lbnQge1xyXG5cdFx0Y29uc3RydWN0b3IoaWQsIGNsYXNzTmFtZSwgdGV4dCkge1xyXG5cdFx0XHRzdXBlcigpO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XHJcblx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnRuJywgY2xhc3NOYW1lKTtcclxuXHJcblx0XHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldCkpO1xyXG5cdFx0fVxyXG5cdFx0Z2V0KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xyXG5cdFx0fVxyXG5cdFx0aGlkZSgpIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHR9XHJcblx0XHRzaG93KCkge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQuc3R5bGUuZHNpcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNsYXNzIEdhbWUge1xyXG5cdFx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRcdHRoaXMuc3RhdHVzID0gJ3N0b3BwZWQnO1xyXG5cdFx0XHR0aGlzLmxhc3ROdW1iZXIgPSAwO1xyXG5cdFx0XHR0aGlzLmN1cnJlbnROdW1iZXIgPSAwO1xyXG5cdFx0XHR0aGlzLm51bWJlcnNHdWVzc2VkID0gW107XHJcblxyXG5cdFx0XHR0aGlzLm1heE51bWJlciA9IDEwMDtcclxuXHRcdH1cclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdHZhciBVSSA9IG5ldyBVSUhhbmRsZXI7XHJcblx0XHRcdFVJLnJlbmRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmFuZG9tTnVtYmVyKCkge1xyXG5cdFx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tYXhOdW1iZXIpICsgMTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgZ2FtZSA9IG5ldyBHYW1lO1xyXG5cdGdhbWUuaW5pdCgpO1xyXG59KSgpOyJdfQ==
