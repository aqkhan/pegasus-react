(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=r,e.exports=t.default},101:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=function(e,t,n){var r="",u="",d=t;if("string"==typeof t){if(void 0===n)return e.style[(0,a.default)(t)]||(0,i.default)(e).getPropertyValue((0,o.default)(t));(d={})[t]=n}Object.keys(d).forEach(function(t){var n=d[t];n||0===n?(0,s.default)(t)?u+=t+"("+n+") ":r+=(0,o.default)(t)+": "+n+";":(0,l.default)(e,(0,o.default)(t))}),u&&(r+=c.transform+": "+u+";");e.style.cssText+=";"+r};var a=r(n(59)),o=r(n(103)),i=r(n(105)),l=r(n(106)),c=n(45),s=r(n(107));e.exports=t.default},102:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(r,function(e,t){return t.toUpperCase()})};var r=/-(.)/g;e.exports=t.default},103:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=function(e){return(0,a.default)(e).replace(o,"-ms-")};var a=r(n(104)),o=/^ms-/;e.exports=t.default},104:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(r,"-$1").toLowerCase()};var r=/([A-Z])/g;e.exports=t.default},105:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,a.default)(t))&&(t="styleFloat");var r=e.currentStyle[t]||null;if(null==r&&n&&n[t]&&(r=n[t]),i.test(r)&&!o.test(t)){var l=n.left,c=e.runtimeStyle,s=c&&c.left;s&&(c.left=e.currentStyle.left),n.left="fontSize"===t?"1em":r,r=n.pixelLeft+"px",n.left=l,s&&(c.left=s)}return r}}};var a=r(n(59)),o=/^(top|right|bottom|left)$/,i=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},106:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},107:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return!(!e||!r.test(e))};var r=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},17:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}void 0!==e&&e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},186:function(e,t,n){"use strict";var r=n(52),a=n.n(r);function o(){return(o=a.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=n(60),l=n.n(i);function c(e,t){if(null==e)return{};var n,r,a={},o=l()(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var s=n(78),u=n.n(s);function d(e,t){e.prototype=u()(t.prototype),e.prototype.constructor=e,e.__proto__=t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=n(17),m=n.n(p),v=n(0),h=n.n(v),y=n(1),b=n.n(y),E=n(36),g=n.n(E),x=n(47),w=n.n(x),N=n(61),S=n.n(N),O={large:"lg",medium:"md",small:"sm",xsmall:"xs",lg:"lg",md:"md",sm:"sm",xs:"xs"};function I(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return"function"==typeof n[n.length-1]?e.apply(void 0,n):function(t){return e.apply(void 0,n.concat([t]))}}}function _(e,t){var n=(e.bsClass||"").trim();return null==n&&S()(!1),n+(t?"-"+t:"")}var P=I(function(e,t){var n=t.propTypes||(t.propTypes={}),r=t.defaultProps||(t.defaultProps={});return n.bsClass=b.a.string,r.bsClass=e,t});I(function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var r=n.STYLES||[],a=n.propTypes||{};e.forEach(function(e){-1===r.indexOf(e)&&r.push(e)});var i=b.a.oneOf(r);(n.STYLES=r,i._values=r,n.propTypes=o({},a,{bsStyle:i}),void 0!==t)&&((n.defaultProps||(n.defaultProps={})).bsStyle=t);return n}),I(function(e,t,n){"string"!=typeof t&&(n=t,t=void 0);var r=n.SIZES||[],a=n.propTypes||{};e.forEach(function(e){-1===r.indexOf(e)&&r.push(e)});var i=[];r.forEach(function(e){var t=O[e];t&&t!==e&&i.push(t),i.push(e)});var l=b.a.oneOf(i);return l._values=i,n.SIZES=r,n.propTypes=o({},a,{bsSize:l}),void 0!==t&&(n.defaultProps||(n.defaultProps={}),n.defaultProps.bsSize=t),n});function T(e){var t,n=((t={})[_(e)]=!0,t);e.bsSize&&(n[_(e,O[e.bsSize]||e.bsSize)]=!0);return e.bsStyle&&(n[_(e,e.bsStyle)]=!0),n}function C(e){return{bsClass:e.bsClass,bsSize:e.bsSize,bsStyle:e.bsStyle,bsRole:e.bsRole}}function A(e){return"bsClass"===e||"bsSize"===e||"bsStyle"===e||"bsRole"===e}function k(e){var t={};return w()(e).forEach(function(e){var n=e[0],r=e[1];A(n)||(t[n]=r)}),[C(e),t]}var M={componentClass:g.a},j=function(e){function t(){return e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=k(c(e,["componentClass","className"])),a=r[0],i=r[1],l=T(a);return h.a.createElement(t,o({},i,{className:m()(n,l)}))},t}(h.a.Component);j.propTypes=M,j.defaultProps={componentClass:"div"};var L=P("carousel-caption",j),D=n(30),R=n.n(D),$=n(62),V=n.n($),U={direction:b.a.oneOf(["prev","next"]),onAnimateOutEnd:b.a.func,active:b.a.bool,animateIn:b.a.bool,animateOut:b.a.bool,index:b.a.number},z=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).handleAnimateOutEnd=r.handleAnimateOutEnd.bind(f(f(r))),r.state={direction:null},r.isUnmounted=!1,r}d(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){this.props.active!==e.active&&this.setState({direction:null})},n.componentDidUpdate=function(e){var t=this,n=this.props.active,r=e.active;!n&&r&&V.a.end(R.a.findDOMNode(this),this.handleAnimateOutEnd),n!==r&&setTimeout(function(){return t.startAnimation()},20)},n.componentWillUnmount=function(){this.isUnmounted=!0},n.handleAnimateOutEnd=function(){this.isUnmounted||this.props.onAnimateOutEnd&&this.props.onAnimateOutEnd(this.props.index)},n.startAnimation=function(){this.isUnmounted||this.setState({direction:"prev"===this.props.direction?"right":"left"})},n.render=function(){var e=this.props,t=e.direction,n=e.active,r=e.animateIn,a=e.animateOut,i=e.className,l=c(e,["direction","active","animateIn","animateOut","className"]);delete l.onAnimateOutEnd,delete l.index;var s={item:!0,active:n&&!r||a};return t&&n&&r&&(s[t]=!0),this.state.direction&&(r||a)&&(s[this.state.direction]=!0),h.a.createElement("div",o({},l,{className:m()(i,s)}))},t}(h.a.Component);z.propTypes=U,z.defaultProps={active:!1,animateIn:!1,animateOut:!1};var F=z,H={glyph:b.a.string.isRequired},K=function(e){function t(){return e.apply(this,arguments)||this}return d(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,r=t.className,a=k(c(t,["glyph","className"])),i=a[0],l=a[1],s=o({},T(i),((e={})[_(i,n)]=!0,e));return h.a.createElement("span",o({},l,{className:m()(r,s)}))},t}(h.a.Component);K.propTypes=H;var W=P("glyphicon",K);var q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}},null)},Y={href:b.a.string,onClick:b.a.func,onKeyDown:b.a.func,disabled:b.a.bool,role:b.a.string,tabIndex:b.a.oneOfType([b.a.number,b.a.string]),componentClass:g.a};function Z(e){return!e||"#"===e.trim()}var X=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).handleClick=r.handleClick.bind(f(f(r))),r.handleKeyDown=r.handleKeyDown.bind(f(f(r))),r}d(t,e);var n=t.prototype;return n.handleClick=function(e){var t=this.props,n=t.disabled,r=t.href,a=t.onClick;(n||Z(r))&&e.preventDefault(),n?e.stopPropagation():a&&a(e)},n.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},n.render=function(){var e=this.props,t=e.componentClass,n=e.disabled,r=e.onKeyDown,a=c(e,["componentClass","disabled","onKeyDown"]);return Z(a.href)&&(a.role=a.role||"button",a.href=a.href||"#"),n&&(a.tabIndex=-1,a.style=o({pointerEvents:"none"},a.style)),h.a.createElement(t,o({},a,{onClick:this.handleClick,onKeyDown:q(this.handleKeyDown,r)}))},t}(h.a.Component);X.propTypes=Y,X.defaultProps={componentClass:"a"};var G=X;var J={map:function(e,t,n){var r=0;return h.a.Children.map(e,function(e){return h.a.isValidElement(e)?t.call(n,e,r++):e})},forEach:function(e,t,n){var r=0;h.a.Children.forEach(e,function(e){h.a.isValidElement(e)&&t.call(n,e,r++)})},count:function(e){var t=0;return h.a.Children.forEach(e,function(e){h.a.isValidElement(e)&&++t}),t},find:function(e,t,n){var r,a=0;return h.a.Children.forEach(e,function(e){r||h.a.isValidElement(e)&&t.call(n,e,a++)&&(r=e)}),r},filter:function(e,t,n){var r=0,a=[];return h.a.Children.forEach(e,function(e){h.a.isValidElement(e)&&t.call(n,e,r++)&&a.push(e)}),a},every:function(e,t,n){var r=0,a=!0;return h.a.Children.forEach(e,function(e){a&&h.a.isValidElement(e)&&(t.call(n,e,r++)||(a=!1))}),a},some:function(e,t,n){var r=0,a=!1;return h.a.Children.forEach(e,function(e){a||h.a.isValidElement(e)&&t.call(n,e,r++)&&(a=!0)}),a},toArray:function(e){var t=[];return h.a.Children.forEach(e,function(e){h.a.isValidElement(e)&&t.push(e)}),t}},B={slide:b.a.bool,indicators:b.a.bool,interval:b.a.number,controls:b.a.bool,pauseOnHover:b.a.bool,wrap:b.a.bool,onSelect:b.a.func,onSlideEnd:b.a.func,activeIndex:b.a.number,defaultActiveIndex:b.a.number,direction:b.a.oneOf(["prev","next"]),prevIcon:b.a.node,prevLabel:b.a.string,nextIcon:b.a.node,nextLabel:b.a.string},Q={slide:!0,interval:5e3,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,prevIcon:h.a.createElement(W,{glyph:"chevron-left"}),prevLabel:"Previous",nextIcon:h.a.createElement(W,{glyph:"chevron-right"}),nextLabel:"Next"},ee=function(e){function t(t,n){var r;(r=e.call(this,t,n)||this).handleMouseOver=r.handleMouseOver.bind(f(f(r))),r.handleMouseOut=r.handleMouseOut.bind(f(f(r))),r.handlePrev=r.handlePrev.bind(f(f(r))),r.handleNext=r.handleNext.bind(f(f(r))),r.handleItemAnimateOutEnd=r.handleItemAnimateOutEnd.bind(f(f(r)));var a=t.defaultActiveIndex;return r.state={activeIndex:null!=a?a:0,previousActiveIndex:null,direction:null},r.isUnmounted=!1,r}d(t,e);var n=t.prototype;return n.componentDidMount=function(){this.waitForNext()},n.componentWillReceiveProps=function(e){var t=this.getActiveIndex();null!=e.activeIndex&&e.activeIndex!==t&&(clearTimeout(this.timeout),this.setState({previousActiveIndex:t,direction:null!=e.direction?e.direction:this.getDirection(t,e.activeIndex)})),null==e.activeIndex&&this.state.activeIndex>=e.children.length&&this.setState({activeIndex:0,previousActiveIndex:null,direction:null})},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.getActiveIndex=function(){var e=this.props.activeIndex;return null!=e?e:this.state.activeIndex},n.getDirection=function(e,t){return e===t?null:e>t?"prev":"next"},n.handleItemAnimateOutEnd=function(){var e=this;this.setState({previousActiveIndex:null,direction:null},function(){e.waitForNext(),e.props.onSlideEnd&&e.props.onSlideEnd()})},n.handleMouseOut=function(){this.isPaused&&this.play()},n.handleMouseOver=function(){this.props.pauseOnHover&&this.pause()},n.handleNext=function(e){var t=this.getActiveIndex()+1;if(t>J.count(this.props.children)-1){if(!this.props.wrap)return;t=0}this.select(t,e,"next")},n.handlePrev=function(e){var t=this.getActiveIndex()-1;if(t<0){if(!this.props.wrap)return;t=J.count(this.props.children)-1}this.select(t,e,"prev")},n.pause=function(){this.isPaused=!0,clearTimeout(this.timeout)},n.play=function(){this.isPaused=!1,this.waitForNext()},n.select=function(e,t,n){if(clearTimeout(this.timeout),!this.isUnmounted){var r=this.props.slide?this.getActiveIndex():null;n=n||this.getDirection(r,e);var a=this.props.onSelect;if(a&&(a.length>1?(t?(t.persist(),t.direction=n):t={direction:n},a(e,t)):a(e)),null==this.props.activeIndex&&e!==r){if(null!=this.state.previousActiveIndex)return;this.setState({activeIndex:e,previousActiveIndex:r,direction:n})}}},n.waitForNext=function(){var e=this.props,t=e.slide,n=e.interval,r=e.activeIndex;!this.isPaused&&t&&n&&null==r&&(this.timeout=setTimeout(this.handleNext,n))},n.renderControls=function(e){var t=e.wrap,n=e.children,r=e.activeIndex,a=e.prevIcon,o=e.nextIcon,i=e.bsProps,l=e.prevLabel,c=e.nextLabel,s=_(i,"control"),u=J.count(n);return[(t||0!==r)&&h.a.createElement(G,{key:"prev",className:m()(s,"left"),onClick:this.handlePrev},a,l&&h.a.createElement("span",{className:"sr-only"},l)),(t||r!==u-1)&&h.a.createElement(G,{key:"next",className:m()(s,"right"),onClick:this.handleNext},o,c&&h.a.createElement("span",{className:"sr-only"},c))]},n.renderIndicators=function(e,t,n){var r=this,a=[];return J.forEach(e,function(e,n){a.push(h.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return r.select(n,e)}})," ")}),h.a.createElement("ol",{className:_(n,"indicators")},a)},n.render=function(){var e=this,t=this.props,n=t.slide,r=t.indicators,a=t.controls,i=t.wrap,l=t.prevIcon,s=t.prevLabel,u=t.nextIcon,d=t.nextLabel,f=t.className,p=t.children,y=c(t,["slide","indicators","controls","wrap","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),b=this.state,E=b.previousActiveIndex,g=b.direction,x=function(e,t){var n={};t.forEach(function(e){n[e]=!0});var r={};return w()(e).forEach(function(e){var t=e[0],a=e[1];A(t)||n[t]||(r[t]=a)}),[C(e),r]}(y,["interval","pauseOnHover","onSelect","onSlideEnd","activeIndex","defaultActiveIndex","direction"]),N=x[0],S=x[1],O=this.getActiveIndex(),I=o({},T(N),{slide:n});return h.a.createElement("div",o({},S,{className:m()(f,I),onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),r&&this.renderIndicators(p,O,N),h.a.createElement("div",{className:_(N,"inner")},J.map(p,function(t,r){var a=r===O,o=n&&r===E;return Object(v.cloneElement)(t,{active:a,index:r,animateOut:o,animateIn:a&&null!=E&&n,direction:g,onAnimateOutEnd:o?e.handleItemAnimateOutEnd:null})})),a&&this.renderControls({wrap:i,children:p,activeIndex:O,prevIcon:l,prevLabel:s,nextIcon:u,nextLabel:d,bsProps:N}))},t}(h.a.Component);ee.propTypes=B,ee.defaultProps=Q,ee.Caption=L,ee.Item=F;t.a=P("carousel",ee)},24:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},285:function(e,t,n){__NEXT_REGISTER_PAGE("/about-us",function(){return e.exports=n(367),{page:e.exports.default}})},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(0)),a=n(96),o=i(n(98));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(function(e,t,n,o,i){var l=e[t];return r.default.isValidElement(l)?new Error("Invalid "+o+" `"+i+"` of type ReactElement supplied to `"+n+"`,expected an element type (a string , component class, or function component)."):(0,a.isValidElementType)(l)?null:new Error("Invalid "+o+" `"+i+"` of value `"+l+"` supplied to `"+n+"`, expected an element type (a string , component class, or function component).")}),e.exports=t.default},367:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=(n(18),n(7)),i=n(12),l=n(3),c=n.n(l),s=n(186),u=n(2),d=n.n(u),f=n(4);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=function(e){function t(){var e,n,r,a,o,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,s=new Array(c),u=0;u<c;u++)s[u]=arguments[u];return r=this,n=!(a=(e=h(t)).call.apply(e,[this].concat(s)))||"object"!==p(a)&&"function"!=typeof a?b(r):a,o=b(b(n)),l={error:null},(i="state")in o?Object.defineProperty(o,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[i]=l,n}var n,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.dispatch,r=t.pages,a=t.products;r||c.a.get(f.a+"pages").then(function(e){n({type:"pages",payLoad:{pages:e.data.pages}})}).catch(function(t){console.log("error ",t),e.setState({error:"404 About Us Page Not Found"})}),a||c()(f.a+"products").then(function(e){n({type:"products",payLoad:{products:e.data.products}})}).catch(function(t){console.log("error ",t),e.setState({error:"404 Products Not Found"})})}},{key:"render",value:function(){var e=this.props,t=e.products,n=e.pages,r=this.state.error,l=null,c=[],u=[],f=[],p=[];return t&&(l=t.map(function(e,t){return a.a.createElement(s.a.Item,{key:t},a.a.createElement("section",{className:"new-home-cards"},a.a.createElement("section",{className:"section-one publication-header",style:{background:"linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(".concat(e.featuredImage&&e.featuredImage.url,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",backgroundColor:"rgba(247, 187, 12, 0.6)"}},a.a.createElement("div",{className:"third-row"},a.a.createElement("div",{className:"container custom-container"},a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"header-text publication-text home-page"},a.a.createElement("p",null,a.a.createElement("br",null),a.a.createElement("span",null,"PRODUCTS")))))),a.a.createElement("div",{className:"small-upper-line flex"},a.a.createElement("div",{className:"line"})),a.a.createElement("div",{className:"fourth-row"},a.a.createElement("div",{className:"custom-container container"},a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"flex-column learnmore-header"},a.a.createElement("p",null,e.leadText),a.a.createElement(d.a,{href:"/product/"+e.slug},a.a.createElement("a",null,"VIEW")))))))))})),n&&n.length>0&&n.forEach(function(e,t){"one"===e.templateOrder&&"aboutUs"===e.type?c=m(c).concat([a.a.createElement("section",{className:"company-profile"},a.a.createElement("section",{className:"first-section",style:{background:"linear-gradient(rgba(14, 13, 13, 0.77), rgba(10, 9, 9, 0.72)),\n                    url(".concat(e.featuredImage&&e.featuredImage.url,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",backgroundPosition:"center"}},a.a.createElement("div",{className:"fourth-row text-area new"},a.a.createElement("div",{className:" container"},a.a.createElement("div",{className:"row "},a.a.createElement("div",{className:"col-sm-4 p-0"},a.a.createElement("div",{className:"PROFILE"},a.a.createElement("h1",null,e.headerImageLabel&&e.headerImageLabel),a.a.createElement("p",null,e.leadText))),a.a.createElement("div",{className:"col-sm-8 "},a.a.createElement("div",{className:" learnmore-header",dangerouslySetInnerHTML:{__html:e.content}})))),a.a.createElement("div",{className:"container custom-container"},a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"about"},a.a.createElement("h1",null,e.title)))))))]):"two"===e.templateOrder&&"aboutUs"===e.type?u=m(u).concat([a.a.createElement("section",{className:"new-media-detail-containers",key:t},a.a.createElement("section",{className:"second-section hours-img",style:e.featuredImage&&{background:"linear-gradient(rgba(8, 7, 7, 0.90), rgba(10, 9, 9, 0.8)), url(".concat(e.featuredImage&&e.featuredImage.url,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},a.a.createElement("div",{className:"fourth-row text-area"},a.a.createElement("div",{className:" container"},a.a.createElement("div",{className:"row "},a.a.createElement("div",{className:"col-sm-4 p-0"},a.a.createElement("div",{className:"LASER-THREAT"},a.a.createElement("h1",null,e.headerImageLabel),a.a.createElement("p",null,e.leadText))),a.a.createElement("div",{className:"col-sm-8"},a.a.createElement("div",{className:" learnmore-header",dangerouslySetInnerHTML:{__html:e.content}})))),a.a.createElement("div",{className:"container custom-container"},a.a.createElement("div",{className:"row flex"},a.a.createElement("div",{className:"BENEFITS"},a.a.createElement("h1",null,e.metaTitle)))))))]):"three"===e.templateOrder&&"aboutUs"===e.type?f=m(f).concat([a.a.createElement("section",{className:"new-media-detail",key:t},a.a.createElement("section",{className:"first-section hourse-div","data-toggle":"modal","data-target":"#myModal",style:{background:"linear-gradient(rgba(8, 7, 7, 0.72), rgba(10, 9, 9, 0.8)), url(".concat(e.featuredImage&&e.featuredImage.url,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}},a.a.createElement("div",{className:"container custom-container image-section image-container"},a.a.createElement("div",{className:"container width-container"},a.a.createElement("div",{className:"row flex year"},a.a.createElement("div",{className:"col-sm-1"}),a.a.createElement("div",{className:"col-sm-8"},a.a.createElement("div",{className:"quarter"},a.a.createElement("span",null,e.headerImageLabel),a.a.createElement("p",null,e.leadText))),a.a.createElement("div",{className:"col-sm-3"},a.a.createElement("a",null,a.a.createElement("img",{src:"/static/images/images-(3).png",className:"video-icon"})),a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"modal fade",id:"myModal"},a.a.createElement("div",{className:"modal-dialog modal-lg"},a.a.createElement("div",{className:"modal-content modal-content-product"},a.a.createElement("div",{className:"modal-header"},a.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"×")),a.a.createElement("div",{className:"modal-body",dangerouslySetInnerHTML:{__html:e.content}})))))))))))]):"aboutUs"===e.type&&(p=m(p).concat([a.a.createElement(i.a,{featuredImage:e.featuredImage,headerImageLabel:e.headerImageLabel&&e.headerImageLabel,metaTitle:e.metaTitle&&e.metaTitle,leadText:e.leadText&&e.leadText,content:e.content&&e.content})]))}),null!==n&&n.length>0?a.a.createElement("div",null,c.length>0&&c,a.a.createElement("div",{className:"golden-bar"}),u.length>0&&u,f.length>0&&f,p.length>0&&p,l&&a.a.createElement(s.a,{interval:3e3,indicators:!1,controls:!0,pauseOnHover:!1},l),a.a.createElement(o.a,null)):r?a.a.createElement("div",{className:"splash"},a.a.createElement("div",{className:"lds-ellipsis"},a.a.createElement("h1",null,a.a.createElement("strong",null,r)))):a.a.createElement("div",{className:"splash"},a.a.createElement("div",{className:"lds-ellipsis"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))}}])&&v(n.prototype,l),u&&v(n,u),t}(),g=n(8);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,S(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement(g.a,null,function(e){var t=e.dispatch,n=e.pages,r=e.products;return a.a.createElement(E,{dispatch:t,pages:n,products:r})})}}])&&w(n.prototype,o),i&&w(n,i),t}(),_=n(9);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,A(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return a.a.createElement(_.a,{type:"about"},a.a.createElement(I,null))}}])&&T(n.prototype,o),i&&T(n,i),t}();t.default=M},45:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var a,o,i,l,c,s,u,d,f,p,m,v=r(n(100)),h="transform";if(t.transform=h,t.animationEnd=i,t.transitionEnd=o,t.transitionDelay=u,t.transitionTiming=s,t.transitionDuration=c,t.transitionProperty=l,t.animationDelay=m,t.animationTiming=p,t.animationDuration=f,t.animationName=d,v.default){var y=function(){for(var e,t,n=document.createElement("div").style,r={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},a=Object.keys(r),o="",i=0;i<a.length;i++){var l=a[i];if(l+"TransitionProperty"in n){o="-"+l.toLowerCase(),e=r[l]("TransitionEnd"),t=r[l]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:o}}();a=y.prefix,t.transitionEnd=o=y.transitionEnd,t.animationEnd=i=y.animationEnd,t.transform=h=a+"-"+h,t.transitionProperty=l=a+"-transition-property",t.transitionDuration=c=a+"-transition-duration",t.transitionDelay=u=a+"-transition-delay",t.transitionTiming=s=a+"-transition-timing-function",t.animationName=d=a+"-animation-name",t.animationDuration=f=a+"-animation-duration",t.animationTiming=p=a+"-animation-delay",t.animationDelay=m=a+"-animation-timing-function"}var b={transform:h,end:o,property:l,timing:s,delay:u,duration:c};t.default=b},47:function(e,t,n){e.exports=n(93)},59:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=function(e){return(0,a.default)(e.replace(o,"ms-"))};var a=r(n(102)),o=/^-ms-/;e.exports=t.default},61:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,l){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,o,i,l],u=0;(c=new Error(t.replace(/%s/g,function(){return s[u++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},62:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=void 0;var a=r(n(99));t.end=a.default;var o=r(n(45));t.properties=o.default;var i={end:a.default,properties:o.default};t.default=i},93:function(e,t,n){n(94),e.exports=n(19).Object.entries},94:function(e,t,n){var r=n(26),a=n(95)(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},95:function(e,t,n){var r=n(55),a=n(48),o=n(68).f;e.exports=function(e){return function(t){for(var n,i=a(t),l=r(i),c=l.length,s=0,u=[];c>s;)o.call(i,n=l[s++])&&u.push(e?[n,i[n]]:i[n]);return u}}},96:function(e,t,n){"use strict";e.exports=n(97)},97:function(e,t,n){"use strict";
/** @license React v16.6.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case d:case f:case i:case c:case l:return e;default:switch(e=e&&e.$$typeof){case u:case p:case s:return e;default:return t}}case o:return t}}}function b(e){return y(e)===f}t.typeOf=y,t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=a,t.ForwardRef=p,t.Fragment=i,t.Profiler=c,t.Portal=o,t.StrictMode=l,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===c||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return b(e)||y(e)===d},t.isConcurrentMode=b,t.isContextConsumer=function(e){return y(e)===u},t.isContextProvider=function(e){return y(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return y(e)===p},t.isFragment=function(e){return y(e)===i},t.isProfiler=function(e){return y(e)===c},t.isPortal=function(e){return y(e)===o},t.isStrictMode=function(e){return y(e)===l}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var l=a||"<<anonymous>>",c=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+l+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),d=6;d<s;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,l,o,c].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},99:function(e,t,n){"use strict";var r=n(24);t.__esModule=!0,t.default=void 0;var a=r(n(45)),o=r(n(101));function i(e,t,n){var r,o={target:e,currentTarget:e};function i(e){e.target===e.currentTarget&&(clearTimeout(r),e.target.removeEventListener(a.default.end,i),t.call(this))}a.default.end?null==n&&(n=c(e)||0):n=0,a.default.end?(e.addEventListener(a.default.end,i,!1),r=setTimeout(function(){return i(o)},1.5*(n||100))):setTimeout(i.bind(null,o),0)}i._parseDuration=c;var l=i;function c(e){var t=(0,o.default)(e,a.default.duration),n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}t.default=l,e.exports=t.default}},[[285,1,0]]]);