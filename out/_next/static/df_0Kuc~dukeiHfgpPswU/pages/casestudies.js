(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{10:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(5),i=n.n(o);t.a=function(e){var t=e.publicationCategory,n=e.headerImg,a=e.heading;return r.a.createElement("section",{className:"new-home-cards"},r.a.createElement("section",{className:"section-one publication-header",style:{background:"linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(".concat(n,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},r.a.createElement("div",{className:"third-row"},r.a.createElement("div",{className:"container custom-container"},r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"header-text publication-text"},r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement("span",null,a)))))),r.a.createElement("div",{className:"small-upper-line flex"},r.a.createElement("div",{className:"line"}," ")),r.a.createElement("div",{className:"pagename"},r.a.createElement("h4",null,t))),r.a.createElement("div",{className:"empty-div"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"course-text1"},r.a.createElement("div",{onClick:function(){return i.a.back()}},r.a.createElement("i",{className:"fa fa-chevron-left"}," ")),r.a.createElement("p",null,"BACK TO PREVIOUS ")))))}},11:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e,t){for(var n=0,a=0,r=[],o=[];n<=e.length;)a<t?(void 0!==e[n]&&o.push(e[n]),a++,n++):(a=0,r.push(o),o=[]);return 0!==o.length&&r.push(o),r}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},14:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(21),i=(a=o)&&a.__esModule?a:{default:a},l=n(22),c=n(23),s=n(13);var u={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=r({},u,e)},this.goToTop=function(){0!==(0,c.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,n){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=n},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,n=e.offset,a=e.keepLastAnchorHash,r=(0,c.getBestAnchorGivenScrollLocation)(t.anchors,n);r&&(0,s.getHash)()!==r?(t.forcedHash=!0,(0,s.updateHash)(r,!1)):r||a||(0,s.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,s.getHash)())},this.goToSection=function(e){var n=t.anchors[e];n?(0,i.default)(n,{duration:t.config.scrollDuration,offset:t.config.offset}):(n=document.getElementById(e))&&(0,i.default)(n,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=u,this.scrollHandler=(0,l.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,l.debounce)(this.handleHashChange,1)}},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(27),o=(a=r)&&a.__esModule?a:{default:a};t.default=o.default},16:function(e,t,n){"use strict";var a=n(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=function(){return Math.random().toString(36).substring(2)},i=function(e){var t=e.animate,n=e.ariaLabel,i=e.children,l=e.className,c=e.height,s=e.preserveAspectRatio,u=e.primaryColor,f=e.primaryOpacity,p=e.rtl,d=e.secondaryColor,h=e.secondaryOpacity,m=e.speed,b=e.style,y=e.uniquekey,g=e.width,v=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["animate","ariaLabel","children","className","height","preserveAspectRatio","primaryColor","primaryOpacity","rtl","secondaryColor","secondaryOpacity","speed","style","uniquekey","width"]),E=y?y+"-idClip":o(),w=y?y+"-idGradient":o(),O=p?["1; -3","2; -2","3; -1"]:["-3; 1","-2; 2","-1; 3"];return Object(a.createElement)("svg",r({role:"img",style:b,className:l,"aria-labelledby":n,viewBox:"0 0 "+g+" "+c,preserveAspectRatio:s},v),Object(a.createElement)("title",null,n),Object(a.createElement)("rect",{x:"0",y:"0",width:g,height:c,clipPath:"url(#"+E+")",style:{fill:"url(#"+w+")"}}),Object(a.createElement)("defs",null,Object(a.createElement)("clipPath",{id:E},i),Object(a.createElement)("linearGradient",{id:w},Object(a.createElement)("stop",{offset:"0%",stopColor:u,stopOpacity:f},t&&Object(a.createElement)("animate",{attributeName:"offset",values:O[0],dur:m+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"50%",stopColor:d,stopOpacity:h},t&&Object(a.createElement)("animate",{attributeName:"offset",values:O[1],dur:m+"s",repeatCount:"indefinite"})),Object(a.createElement)("stop",{offset:"100%",stopColor:u,stopOpacity:f},t&&Object(a.createElement)("animate",{attributeName:"offset",values:O[2],dur:m+"s",repeatCount:"indefinite"})))))},l={animate:!0,ariaLabel:"Loading interface...",height:130,preserveAspectRatio:"xMidYMid meet",primaryColor:"#f0f0f0",primaryOpacity:1,rtl:!1,secondaryColor:"#e0e0e0",secondaryOpacity:1,speed:2,width:400},c=function(e){return Object(a.createElement)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:e.width,height:e.height})},s=function(e){var t=r({},l,e),n=e.children?e.children:Object(a.createElement)(c,t);return Object(a.createElement)(i,t,n)};t.a=s},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=s(r),i=s(n(30)),l=s(n(1)),c=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.id=e.id||e.children.ref,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=i.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);c.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){c.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.id;return o.default.cloneElement(t,{ref:t.ref||n})}}]),t}();u.propTypes={children:l.default.node,id:l.default.string},t.default=u},21:function(e,t,n){
/*!
 * Jump.js 1.0.1 - A small, modern, dependency-free smooth scrolling library.
 * Copyright (c) 2016 Michael Cavalea - https://github.com/callmecavs/jump.js
 * License: MIT
 */
e.exports=function(){"use strict";var e=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};return function(){function n(e){return e.getBoundingClientRect().top+o}function a(e){p||(p=e),h=c(d=e-p,o,u,f),window.scrollTo(0,h),d<f?requestAnimationFrame(a):(window.scrollTo(0,o+u),r&&s&&(r.setAttribute("tabindex","-1"),r.focus()),"function"==typeof m&&m(),p=!1)}var r=void 0,o=void 0,i=void 0,l=void 0,c=void 0,s=void 0,u=void 0,f=void 0,p=void 0,d=void 0,h=void 0,m=void 0;return function(p){var d=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(f=d.duration||1e3,l=d.offset||0,m=d.callback,c=d.easing||e,s=d.a11y||!1,o=window.scrollY||window.pageYOffset,void 0===p?"undefined":t(p)){case"number":r=void 0,s=!1,i=o+p;break;case"object":i=n(r=p);break;case"string":r=document.querySelector(p),i=n(r)}switch(u=i-o+l,t(d.duration)){case"number":f=d.duration;break;case"function":f=d.duration(u)}requestAnimationFrame(a)}}()}()},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=arguments;t.debounce=function(e,t,n){var r=void 0;return function(){var o=a,i=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(void 0,o)},t),i&&e.apply(void 0,o)}}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},r=t.getElementOffset=function(e){var t=a(),n=e.getBoundingClientRect(),r=n.top,o=n.bottom;return{top:Math.floor(r+t),bottom:Math.floor(o+t)}},o=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a(),o=r(e).top+t;return n>=o&&n<o+e.offsetHeight},i=t.checkLocationRelevance=function(e,t){var n=r(e),a=n.top,o=n.bottom,i=r(t),l=i.top,c=i.bottom;return a===l?o===c?e<t:c<o:l>a},l=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!i(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var n=void 0,a=void 0;return Object.keys(e).forEach(function(r){var i=e[r];o(i,t)&&(a&&!l(a,i)||(a=i,n=r))}),n}},25:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(2),i=n.n(o),l=n(15),c=n.n(l),s=n(11),u=n(16),f=n(6),p=n.n(f);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return a=this,r=(e=b(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==d(r)&&"function"!=typeof r?g(a):r,v(g(g(n)),"state",{categoryList:[],publications:null,publicationDestructure:null,totalPages:null,final:null}),v(g(g(n)),"returnData",function(e){n.setState({final:n.state.publicationDestructure[e.selected]}),Object(f.configureAnchors)({offset:-60,scrollDuration:1e3}),Object(f.goToAnchor)("scroll")}),v(g(g(n)),"checkChange",function(e){var t=h(n.state.categoryList),a=t[e].check;t[e].check=!a,n.setState({categoryList:t}),n.setDisplay()}),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.publications,n=e.categoryList;this.setState({publications:h(t),categoryList:h(n)},function(){this.setDisplay()})}},{key:"setDisplay",value:function(){var e=this,t=this.state.publications,n=!0,a=[],r=null;this.state.categoryList.forEach(function(e){!0===e.check&&(n=!1)}),n?r=Object(s.a)(t,10):(this.state.publications&&this.state.publications.forEach(function(t){var n=0;t.selectTags.forEach(function(r){0===n&&e.state.categoryList.forEach(function(e){r===e.id&&!0===e.check&&(a.push(t),n=1)})})}),r=Object(s.a)(a,10)),this.setState({publicationDestructure:r,final:r[0],totalPages:r.length})}},{key:"render",value:function(){var e=this,t=this.state,n=t.categoryList,a=t.final,o=t.totalPages,l=this.props,s=l.publicationCategory,f=l.page,d=null,h=null;return n&&(h=n.map(function(t,n){return r.a.createElement("li",{key:n,onClick:function(){return e.checkChange(n)}},r.a.createElement("input",{type:"checkbox",checked:t.check}),r.a.createElement("span",null,t.name))})),a&&(d=a.map(function(e,t){return r.a.createElement("div",{key:t,className:"post-casestudy"},r.a.createElement("div",{className:"img-dev"},r.a.createElement(i.a,{href:f+e.slug},r.a.createElement("a",null,r.a.createElement("img",{src:e.featuredImage?e.featuredImage.url:"/static/images/placeholder.png"})))),r.a.createElement("div",null,r.a.createElement(i.a,{href:f+e.slug},r.a.createElement("a",null,e.title)),r.a.createElement(i.a,{href:f+e.slug},r.a.createElement("a",null,"Read More"))))})),d&&r.a.createElement("section",{className:"casestudy"},r.a.createElement(p.a,{id:"scroll"},r.a.createElement("div",null)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"casestudy-primary"},r.a.createElement("div",null,r.a.createElement("div",{className:"casestudy-text"},r.a.createElement("span",null,s),r.a.createElement("span",null,"Filter by topic categories"),r.a.createElement("div",{className:"list-dev"},r.a.createElement("ul",null,h&&h)))),r.a.createElement("div",null,d||r.a.createElement("div",{className:"loading-publications"},r.a.createElement(u.a,{height:160,width:550,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"81",y:"12",rx:"3",ry:"3",width:"350",height:"6.4"}),r.a.createElement("rect",{x:"81",y:"30",rx:"3",ry:"3",width:"380",height:"6.4"}),r.a.createElement("rect",{x:"81",y:"48",rx:"3",ry:"3",width:"201",height:"6.4"}),r.a.createElement("rect",{x:"79.5",y:"49.27",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"11.5",y:"10.27",rx:"0",ry:"0",width:"61",height:"51"}),r.a.createElement("rect",{x:"81",y:"12",rx:"3",ry:"3",width:"350",height:"6.4"}),r.a.createElement("rect",{x:"81",y:"30",rx:"3",ry:"3",width:"380",height:"6.4"}),r.a.createElement("rect",{x:"81",y:"48",rx:"3",ry:"3",width:"201",height:"6.4"}),r.a.createElement("rect",{x:"79.5",y:"49.27",rx:"0",ry:"0",width:"0",height:"0"}),r.a.createElement("rect",{x:"11.5",y:"10.27",rx:"0",ry:"0",width:"61",height:"51"}))),r.a.createElement(c.a,{previousLabel:r.a.createElement("i",{className:"fa fa-chevron-left "}," "),nextLabel:r.a.createElement("i",{className:"fa fa-chevron-right "}," "),breakLabel:". . .",breakClassName:"break-me",pageCount:o,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.returnData,containerClassName:"digit-icons main",subContainerClassName:"container column",activeClassName:"p-one"})))))}}])&&m(n.prototype,o),l&&m(n,l),t}();t.a=E},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=s(r),i=s(n(1)),l=s(n(28)),c=s(n(29));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePreviousPage=function(e){var t=n.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&n.handlePageSelected(t-1,e)},n.handleNextPage=function(e){var t=n.state.selected,a=n.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<a-1&&n.handlePageSelected(t+1,e)},n.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,n.state.selected!==e&&(n.setState({selected:e}),n.callCallback(e))},n.handleBreakClick=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var a=n.state.selected;n.handlePageSelected(a<e?n.getForwardJump():n.getBackwardJump(),t)},n.callCallback=function(e){void 0!==n.props.onPageChange&&"function"==typeof n.props.onPageChange&&n.props.onPageChange({selected:e})},n.pagination=function(){var e=[],t=n.props,a=t.pageRangeDisplayed,r=t.pageCount,i=t.marginPagesDisplayed,l=t.breakLabel,s=t.breakClassName,u=n.state.selected;if(r<=a)for(var f=0;f<r;f++)e.push(n.getPageElement(f));else{var p=a/2,d=a-p;u>r-a/2?p=a-(d=r-u):u<a/2&&(d=a-(p=u));var h=void 0,m=void 0,b=void 0,y=function(e){return n.getPageElement(e)};for(h=0;h<r;h++)(m=h+1)<=i?e.push(y(h)):m>r-i?e.push(y(h)):h>=u-p&&h<=u+d?e.push(y(h)):l&&e[e.length-1]!==b&&(b=o.default.createElement(c.default,{key:h,breakLabel:l,breakClassName:s,onClick:n.handleBreakClick.bind(null,h)}),e.push(b))}return e},n.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,n=e.disableInitialCallback;void 0===t||n||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,n=t.pageCount,a=e+t.pageRangeDisplayed;return a>=n?n-1:a}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,n=t.hrefBuilder,a=t.pageCount;if(n&&e!==this.state.selected&&e>=0&&e<a)return n(e+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,n=this.props,a=n.pageClassName,r=n.pageLinkClassName,i=n.activeClassName,c=n.activeLinkClassName,s=n.extraAriaContext;return o.default.createElement(l.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:a,pageLinkClassName:r,activeClassName:i,activeLinkClassName:c,extraAriaContext:s,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,n=e.previousClassName,a=e.nextClassName,r=e.pageCount,i=e.containerClassName,l=e.previousLinkClassName,c=e.previousLabel,s=e.nextLinkClassName,u=e.nextLabel,f=this.state.selected,p=n+(0===f?" "+t:""),d=a+(f===r-1?" "+t:"");return o.default.createElement("ul",{className:i},o.default.createElement("li",{className:p},o.default.createElement("a",{onClick:this.handlePreviousPage,className:l,href:this.hrefBuilder(f-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},c)),this.pagination(),o.default.createElement("li",{className:d},o.default.createElement("a",{onClick:this.handleNextPage,className:s,href:this.hrefBuilder(f+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},u)))}}]),t}();u.propTypes={pageCount:i.default.number.isRequired,pageRangeDisplayed:i.default.number.isRequired,marginPagesDisplayed:i.default.number.isRequired,previousLabel:i.default.node,nextLabel:i.default.node,breakLabel:i.default.oneOfType([i.default.string,i.default.node]),hrefBuilder:i.default.func,onPageChange:i.default.func,initialPage:i.default.number,forcePage:i.default.number,disableInitialCallback:i.default.bool,containerClassName:i.default.string,pageClassName:i.default.string,pageLinkClassName:i.default.string,activeClassName:i.default.string,activeLinkClassName:i.default.string,previousClassName:i.default.string,nextClassName:i.default.string,previousLinkClassName:i.default.string,nextLinkClassName:i.default.string,disabledClassName:i.default.string,breakClassName:i.default.string},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=u},28:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){var t=e.pageClassName,n=e.pageLinkClassName,a=e.onClick,r=e.href,i="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),l=null;return e.selected&&(l="page",i="Page "+e.page+" is your current page",t=void 0!==t?t+" "+e.activeClassName:e.activeClassName,void 0!==n?(n=n,void 0!==e.activeLinkClassName&&(n=n+" "+e.activeLinkClassName)):n=e.activeLinkClassName),o.default.createElement("li",{className:t},o.default.createElement("a",{onClick:a,role:"button",className:n,href:r,tabIndex:"0","aria-label":i,"aria-current":l,onKeyPress:a},e.page))}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){var t=e.breakLabel,n=e.breakClassName||"break",a=e.onClick;return o.default.createElement("li",{className:n},o.default.createElement("a",{onClick:a,role:"button",tabIndex:"0",onKeyPress:a},t))}},31:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(0),i=n.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(){var e,n,a,r,o,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,p=new Array(u),d=0;d<u;d++)p[d]=arguments[d];return a=this,n=!(r=(e=s(t)).call.apply(e,[this].concat(p)))||"object"!==l(r)&&"function"!=typeof r?f(a):r,o=f(f(n)),c={publishedPapers:"",scientificStudies:"",articles:""},(i="state")in o?Object.defineProperty(o,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[i]=c,n}var n,a,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentWillMount",value:function(){switch(this.props.publicationCategory){case"Published Papers":this.setState({publishedPapers:"active",scientificStudies:"",articles:""});break;case"Case Studies":this.setState({publishedPapers:"",scientificStudies:"active",articles:""});break;case"Articles":this.setState({publishedPapers:"",scientificStudies:"",articles:"active"})}}},{key:"render",value:function(){var e=this.state,t=e.publishedPapers,n=e.scientificStudies,a=e.articles;return i.a.createElement("section",{className:"public-img"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"primary-container"},i.a.createElement("div",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"active"},"Evidence")))),i.a.createElement("div",{style:{background:"linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url('/static/images/buffalo.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,i.a.createElement("a",{className:"active"},"Publications"))),i.a.createElement("li",null,i.a.createElement("span",null,i.a.createElement(r.a,{href:"/published-papers"},i.a.createElement("a",{className:t},"Published Papers")))),i.a.createElement("li",null,i.a.createElement("span",null,i.a.createElement(r.a,{href:"/casestudies"},i.a.createElement("a",{className:n},"Case Studies")))),i.a.createElement("li",null,i.a.createElement("span",null,i.a.createElement(r.a,{href:"/articles"},i.a.createElement("a",{className:a},"Articles")))))))))}}])&&c(n.prototype,a),p&&c(n,p),t}();t.a=p},331:function(e,t,n){__NEXT_REGISTER_PAGE("/casestudies",function(){return e.exports=n(381),{page:e.exports.default}})},381:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(18),n(9)),i=n(5),l=n(7),c=n(10),s=n(12),u=n(31),f=n(25),p=n(4),d=n(3),h=n.n(d);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(){var e,n,a,r,o,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return a=this,n=!(r=(e=g(t)).call.apply(e,[this].concat(s)))||"object"!==m(r)&&"function"!=typeof r?E(a):r,o=E(E(n)),l={error:null},(i="state")in o?Object.defineProperty(o,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[i]=l,n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.dispatch,a=t.pages,r=t.publications,o=t.tags;a||h.a.get(p.a+"pages").then(function(e){n({type:"pages",payLoad:{pages:e.data.pages}})}).catch(function(t){console.log("error ",t),e.setState({error:"404 About Us Page Not Found"})}),o||h.a.get(p.a+"tags").then(function(e){n({type:"tags",payLoad:{tags:e.data.tags}})}).catch(function(t){console.log("error",t),e.setState({error:"404 Not Found"})}),r||h.a.get(p.a+"publications").then(function(e){var t=b(e.data.publications).reverse();n({type:"publications",payLoad:{publications:t}})}).catch(function(t){console.log("error",t),e.setState({error:"Not Found"})})}},{key:"render",value:function(){var e=this.state.error,t=this.props,n=t.pages,a=t.tags,o=t.publications,i=[],p=[];o&&o.forEach(function(e){"case-studies"===e.publicationCategory&&(e.selectTags.forEach(function(e){p.push(e)}),i.push(e))});var d=[],h=[],m=[];p&&(d=p.filter(function(e,t){return p.indexOf(e)===t}));var y=[];return 0!==d.length&&d.forEach(function(e){return a&&a.forEach(function(t){e===t._id&&y.push({id:e,name:t.title,check:!1})})}),null!==n&&n.length>0&&n.forEach(function(e,t){"one"===e.templateOrder&&"publication"===e.type?h=b(h).concat([r.a.createElement(c.a,{publicationCategory:"Case Studies",key:t,headerImg:e&&e.featuredImage&&e.featuredImage.url,heading:"PUBLICATIONS"})]):"publication"===e.type&&(m=b(m).concat([r.a.createElement(s.a,{featuredImage:e.featuredImage,headerImageLabel:e.headerImageLabel&&e.headerImageLabel,metaTitle:e.metaTitle&&e.metaTitle,leadText:e.leadText&&e.leadText,content:e.content&&e.content})]))}),r.a.createElement("div",null,h.length>0?h:e?r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("h1",null,r.a.createElement("strong",null,e)))):r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))),m.length>0&&m,r.a.createElement(u.a,{publicationCategory:"Case Studies"}),i&&i.length>0&&r.a.createElement(f.a,{publications:i&&i,categoryList:y,publicationCategory:"Case Studies",page:"/casestudy-detail/"}),r.a.createElement(l.a,null))}}])&&y(n.prototype,o),i&&y(n,i),t}(),O=n(8);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,N(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,a["Component"]),n=t,(o=[{key:"render",value:function(){return r.a.createElement(O.a,null,function(e){var t=e.dispatch,n=e.pages,a=e.publications,o=e.tags;return r.a.createElement(w,{dispatch:t,pages:n,publications:a,tags:o})})}}])&&k(n.prototype,o),i&&k(n,i),t}();function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function L(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L(this,T(t).apply(this,arguments))}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,a["Component"]),n=t,(i=[{key:"render",value:function(){return r.a.createElement(o.a,{type:"caseStudies"},r.a.createElement(_,null))}}])&&x(n.prototype,i),l&&x(n,l),t}();t.default=Object(i.withRouter)(D)},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.removeHash=t.goToAnchor=t.configureAnchors=t.goToTop=void 0;var a=n(13);Object.defineProperty(t,"goToAnchor",{enumerable:!0,get:function(){return a.updateHash}}),Object.defineProperty(t,"removeHash",{enumerable:!0,get:function(){return a.removeHash}});var r=n(20);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(r).default}});var o=i(n(14));function i(e){return e&&e.__esModule?e:{default:e}}t.goToTop=o.default.goToTop,t.configureAnchors=o.default.configure}},[[331,1,0]]]);