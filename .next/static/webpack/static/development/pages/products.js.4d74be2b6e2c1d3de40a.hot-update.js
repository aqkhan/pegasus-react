webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/product/productDetail/index.js":
/*!***************************************************!*\
  !*** ./components/product/productDetail/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestDemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../requestDemo */ "./components/requestDemo/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ProductDetail =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductDetail, _Component);

  function ProductDetail() {
    _classCallCheck(this, ProductDetail);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductDetail).apply(this, arguments));
  }

  _createClass(ProductDetail, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      consol.log(nextProps.slug); // axios('http://54.234.86.247:3000/api/products')
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "first-section product-det"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "third-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "EMPOWER ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "DS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "DELIVERY SYSTEM"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/2018-09-12.png",
        className: "head-img1"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fourth-row text-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "SPECIFICATIONS"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "SPECIFICATIONS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Application-Specific Treatment Attachments: 4", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Includes: Patented Laser-Contact Ball", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Fiber: Premium, Double-sheathed, and Rubber Coated", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Handpiece: Finger Switch"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-8 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " learnmore-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Empower DS provides the versatility you need to treat your toughest cases. Four application-", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "specific treatment heads, the patented laser-contact ball and the toughest fiber available make ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Pegasus therapy lasers clinically practical and ruggedly durable. A heavy duty, extended-length ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "fiber allows you to safely and easily treat patients without moving the system. Pegasus's ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "superior Platinum warranty keeps your investment safe for 36 months. The comprehensive, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\"bumper-to-bumper\" warranty includes a loaner provision and covers the entire system ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "including the treatment heads, handpieces, and fiber."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "REQUEST A DEMO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "TALK TO A REP ")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "yellow-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row view-area"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/ptc-400px.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "view-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Pegasus Therapy Compact (PTC)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "VIEW PRODUCT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/34.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "view-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Pegasus Therapy LASER (PTL)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "VIEW PRODUCT")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-2"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "prodct"
      }, "PRODUCTS"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "Second-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container custom-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row images-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0 "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/doctorwithhourse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/straight-egyptian-arabians-horse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/whitehourse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/695128.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/straight-egyptian-arabians-horse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/345446.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/British-Horse-Racing-Frankel-Jockey-Wallpaper.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 col-lg-3 p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-overlay"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/hourse.jpg",
        className: "image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "overlay"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "08.12.19"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "FEATURED ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CONTENT ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "TITLE HERE")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_requestDemo__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return ProductDetail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

/***/ })

})
//# sourceMappingURL=products.js.4d74be2b6e2c1d3de40a.hot-update.js.map