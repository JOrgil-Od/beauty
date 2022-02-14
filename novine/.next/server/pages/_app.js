(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Beauty\\novine-react-next-ecommerce-templates\\novine\\components\\Shared\\GoTop.js";


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    if (thePosition) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `go-top`,
        onClick: scrollToTop,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: renderGoTopIcon()
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Beauty\\novine-react-next-ecommerce-templates\\novine\\components\\_App\\Layout.js";






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Beauty Skin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Novine is a clean and modern purse React Next JS eCommerce template. This is built on React.js, Next.js, React-Redux, ES6+, Sass and Bootstrap 4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "og:title",
        property: "og:title",
        content: "Novine - React Next eCommerce Templates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "Novine - React Next eCommerce Templates"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "canonical",
        href: "https://novine-react.envytheme.com/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://res.cloudinary.com/dev-empty/image/upload/v1590076309/ppuymfucr4jubqvhqaqt.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_4__.Slide
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_3__.default, {
      scrollStepInPx: "100",
      delayInMs: "10.50"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../public/styles/bootstrap.min.css */ "./public/styles/bootstrap.min.css");
/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/styles/fontawesome.min.css */ "./public/styles/fontawesome.min.css");
/* harmony import */ var _public_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../public/styles/animate.min.css */ "./public/styles/animate.min.css");
/* harmony import */ var _public_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_styles_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/styles/slick.css */ "./public/styles/slick.css");
/* harmony import */ var _public_styles_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/styles/slick-theme.css */ "./public/styles/slick-theme.css");
/* harmony import */ var _public_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_styles_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_styles_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../public/styles/style.css */ "./public/styles/style.css");
/* harmony import */ var _public_styles_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_styles_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_styles_responsive_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../public/styles/responsive.css */ "./public/styles/responsive.css");
/* harmony import */ var _public_styles_responsive_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_styles_responsive_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store_reducers_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store/reducers/reducers */ "./store/reducers/reducers.js");

var _jsxFileName = "D:\\Beauty\\novine-react-next-ecommerce-templates\\novine\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // import withRedux from 'next-redux-wrapper';



const MyApp = ({
  Component,
  pageProps
}) => {
  const store = (0,_store_reducers_reducers__WEBPACK_IMPORTED_MODULE_13__.useStore)(pageProps.initialReduxState);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_11__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_12__.Provider, {
      store: store,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./store/actions/action-types/action-names.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/action-names.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TO_CART": function() { return /* binding */ ADD_TO_CART; },
/* harmony export */   "REMOVE_ITEM": function() { return /* binding */ REMOVE_ITEM; },
/* harmony export */   "SUB_QUANTITY": function() { return /* binding */ SUB_QUANTITY; },
/* harmony export */   "ADD_QUANTITY": function() { return /* binding */ ADD_QUANTITY; },
/* harmony export */   "ADD_SHIPPING": function() { return /* binding */ ADD_SHIPPING; },
/* harmony export */   "ADD_QUANTITY_WITH_NUMBER": function() { return /* binding */ ADD_QUANTITY_WITH_NUMBER; },
/* harmony export */   "ORDER_FORM": function() { return /* binding */ ORDER_FORM; },
/* harmony export */   "CHECKOUT_CHARGE": function() { return /* binding */ CHECKOUT_CHARGE; },
/* harmony export */   "RESET_CART": function() { return /* binding */ RESET_CART; },
/* harmony export */   "ADD_TO_COMPARE": function() { return /* binding */ ADD_TO_COMPARE; },
/* harmony export */   "REMOVE_ITEM_FROM_COMPARE": function() { return /* binding */ REMOVE_ITEM_FROM_COMPARE; }
/* harmony export */ });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_TO_COMPARE = 'ADD_TO_COMPARE';
const REMOVE_ITEM_FROM_COMPARE = 'REMOVE_ITEM_FROM_COMPARE';

/***/ }),

/***/ "./store/json-data/products.js":
/*!*************************************!*\
  !*** ./store/json-data/products.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "products": function() { return /* binding */ products; },
/* harmony export */   "productsCollectionSix": function() { return /* binding */ productsCollectionSix; },
/* harmony export */   "productsCollectionSeven": function() { return /* binding */ productsCollectionSeven; },
/* harmony export */   "productsCollectionEight": function() { return /* binding */ productsCollectionEight; },
/* harmony export */   "productsCollectionNine": function() { return /* binding */ productsCollectionNine; },
/* harmony export */   "productsCollectionTen": function() { return /* binding */ productsCollectionTen; },
/* harmony export */   "productsCollectionEleven": function() { return /* binding */ productsCollectionEleven; },
/* harmony export */   "productsCovid19": function() { return /* binding */ productsCovid19; },
/* harmony export */   "productsGrocery": function() { return /* binding */ productsGrocery; },
/* harmony export */   "productsElectronics": function() { return /* binding */ productsElectronics; },
/* harmony export */   "productsFurniture": function() { return /* binding */ productsFurniture; }
/* harmony export */ });
const products = [{
  id: 1,
  title: "Linen crochet trim t-shirt",
  price: 190,
  image: "/images/img1.jpg",
  imageHover: "/images/img-hover1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 2,
  title: "Neck empire sleeve t-shirts",
  price: 120,
  image: "/images/img2.jpg",
  imageHover: "/images/img-hover2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 3,
  title: "Mermaid pencil midi lace",
  price: 160,
  image: "/images/img3.jpg",
  imageHover: "/images/img-hover3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 4,
  title: "Criss-cross V neck bodycon",
  price: 130,
  image: "/images/img4.jpg",
  imageHover: "/images/img-hover4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 5,
  title: "The cosmic cornucopia",
  price: 90,
  image: "/images/img5.jpg",
  imageHover: "/images/img-hover5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 6,
  title: "Tenku remastered",
  price: 180,
  image: "/images/img6.jpg",
  imageHover: "/images/img-hover6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 7,
  title: "Women's sherpa lined hoodie",
  price: 330,
  image: "/images/img7.jpg",
  imageHover: "/images/img-hover7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 8,
  title: "Belted chino trousers polo",
  price: 140,
  image: "/images/img8.jpg",
  imageHover: "/images/img-hover8.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 9,
  title: "The cosmic cornucopia",
  price: 430,
  image: "/images/img1.jpg",
  imageHover: "/images/img-hover1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 10,
  title: "Tenku remastered",
  price: 650,
  image: "/images/img2.jpg",
  imageHover: "/images/img-hover2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 11,
  title: "Women's sherpa lined hoodie",
  price: 230,
  image: "/images/img3.jpg",
  imageHover: "/images/img-hover3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 12,
  title: "Linen crochet trim t-shirt",
  price: 670,
  image: "/images/img4.jpg",
  imageHover: "/images/img-hover4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 13,
  title: "Neck empire sleeve t-shirts",
  price: 120,
  image: "/images/img5.jpg",
  imageHover: "/images/img-hover5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 14,
  title: "Mermaid pencil midi lace",
  price: 540,
  image: "/images/img6.jpg",
  imageHover: "/images/img-hover6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 15,
  title: "Criss-cross V neck bodycon",
  price: 230,
  image: "/images/img7.jpg",
  imageHover: "/images/img-hover7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 16,
  title: "Belted chino trousers polo",
  price: 530,
  image: "/images/img8.jpg",
  imageHover: "/images/img-hover8.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCollectionSix = [{
  id: 17,
  title: "Linen crochet trim",
  price: 190,
  image: "/images/sunglasses-image/sunglasses-img1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 18,
  title: "Neck empire sleeve",
  price: 120,
  image: "/images/sunglasses-image/sunglasses-img2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 19,
  title: "Mermaid pencil midi",
  price: 160,
  image: "/images/sunglasses-image/sunglasses-img3.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCollectionSeven = [{
  id: 20,
  title: "Linen Crochet Trim",
  price: 190,
  image: "/images/product-image/product-img1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 21,
  title: "Heartland Alabama",
  price: 300,
  image: "/images/product-image/product-img2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 22,
  title: "Mermaid pencil midi",
  price: 250,
  image: "/images/product-image/product-img3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 23,
  title: "Criss-cross",
  price: 160,
  image: "/images/product-image/product-img4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 24,
  title: "V neck bodycon",
  price: 214,
  image: "/images/product-image/product-img5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 25,
  title: "Cosmic Cornucopia",
  price: 120,
  image: "/images/product-image/product-img6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 26,
  title: "Tenku Remastered",
  price: 540,
  image: "/images/product-image/product-img7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 27,
  title: "Lined Hoodie",
  price: 180,
  image: "/images/product-image/product-img8.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCollectionEight = [{
  id: 28,
  title: "Linen Crochet Trim",
  price: 190,
  image: "/images/product-image/product-img1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 29,
  title: "Heartland Alabama",
  price: 300,
  image: "/images/product-image/product-img2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 30,
  title: "Mermaid Pencil Midi",
  price: 250,
  image: "/images/product-image/product-img3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 31,
  title: "Criss-cross",
  price: 160,
  image: "/images/product-image/product-img4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 32,
  title: "Vneck Bodycon",
  price: 214,
  image: "/images/product-image/product-img5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 33,
  title: "Cosmic Cornucopia",
  price: 120,
  image: "/images/product-image/product-img6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 34,
  title: "Tenku Remastered",
  price: 540,
  image: "/images/product-image/product-img7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 35,
  title: "Lined Hoodie",
  price: 180,
  image: "/images/product-image/product-img8.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCollectionNine = [{
  id: 36,
  title: "Linen Crochet Trim",
  price: 190,
  image: "/images/product-image/product-img1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 37,
  title: "Heartland Alabama",
  price: 300,
  image: "/images/product-image/product-img2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 38,
  title: "Mermaid Pencil Midi",
  price: 250,
  image: "/images/product-image/product-img3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 39,
  title: "Criss-cross",
  price: 160,
  image: "/images/product-image/product-img4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 40,
  title: "Vneck Bodycon",
  price: 214,
  image: "/images/product-image/product-img5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 41,
  title: "Cosmic Cornucopia",
  price: 120,
  image: "/images/product-image/product-img6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 42,
  title: "Tenku Remastered",
  price: 540,
  image: "/images/product-image/product-img7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 43,
  title: "Lined Hoodie",
  price: 180,
  image: "/images/product-image/product-img8.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCollectionTen = [{
  id: 44,
  title: "Linen Crochet Trim",
  price: 190,
  image: "/images/product-image/product-img1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 45,
  title: "Heartland Alabama",
  price: 300,
  image: "/images/product-image/product-img2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 46,
  title: "Mermaid Pencil Midi",
  price: 250,
  image: "/images/product-image/product-img3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 47,
  title: "Criss-cross",
  price: 160,
  image: "/images/product-image/product-img4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 48,
  title: "Vneck Bodycon",
  price: 214,
  image: "/images/product-image/product-img5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 49,
  title: "Cosmic Cornucopia",
  price: 120,
  image: "/images/product-image/product-img6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 50,
  title: "Tenku Remastered",
  price: 540,
  image: "/images/product-image/product-img7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 51,
  title: "Lined Hoodie",
  price: 180,
  image: "/images/product-image/product-img8.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCollectionEleven = [{
  id: 52,
  title: "Linen Crochet Trim",
  price: 190,
  image: "/images/product-image/product-img1.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 53,
  title: "Heartland Alabama",
  price: 300,
  image: "/images/product-image/product-img2.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 54,
  title: "Mermaid Pencil Midi",
  price: 250,
  image: "/images/product-image/product-img3.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 55,
  title: "Criss-cross",
  price: 160,
  image: "/images/product-image/product-img4.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 56,
  title: "Vneck Bodycon",
  price: 214,
  image: "/images/product-image/product-img5.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 57,
  title: "Cosmic Cornucopia",
  price: 120,
  image: "/images/product-image/product-img6.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 58,
  title: "Tenku Remastered",
  price: 540,
  image: "/images/product-image/product-img7.jpg",
  quickView: "/images/quick-view-img.jpg"
}, {
  id: 59,
  title: "Lined Hoodie",
  price: 180,
  image: "/images/product-image/product-img8.jpg",
  quickView: "/images/quick-view-img.jpg"
}];
const productsCovid19 = [{
  id: 60,
  title: "Hand Sanitizer",
  price: 20,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
}, {
  id: 61,
  title: "Heartland Alabama",
  price: 18,
  image: "https://demaxin.s3.amazonaws.com/cd19-1-1589215924614.jpg",
  imageHover: "https://demaxin.s3.amazonaws.com/cd19-1-1589215924614.jpg"
}, {
  id: 62,
  title: "Medical Gloves",
  price: 25,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-3-1589216152026.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-3-1589216152026.jpg"
}, {
  id: 63,
  title: "Drugs",
  price: 30,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-4-1589216248208.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-4-1589216248208.jpg"
}, {
  id: 64,
  title: "Safety Goggles",
  price: 30,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-5-1589216332060.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-5-1589216332060.jpg"
}, {
  id: 65,
  title: "Vaccine",
  price: 49,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-6-1589216382981.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-6-1589216382981.jpg"
}];
const productsGrocery = [{
  id: 66,
  title: "Chicken With Bone",
  price: 20,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product4-1592652387800.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product4-1592652387800.jpg"
}, {
  id: 67,
  title: "Fresh Meat",
  price: 18,
  image: "https://demaxin.s3.amazonaws.com/grocery-product1-1592651678044.jpg",
  imageHover: "https://demaxin.s3.amazonaws.com/grocery-product1-1592651678044.jpg"
}, {
  id: 68,
  title: "Fresh Chicken",
  price: 25,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product2-1592651722940.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product2-1592651722940.jpg"
}, {
  id: 69,
  title: "Potatoes",
  price: 30,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product6-1592652493288.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product6-1592652493288.jpg"
}, {
  id: 70,
  title: "Capsicum",
  price: 30,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product3-1592651770371.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product3-1592651770371.jpg"
}, {
  id: 71,
  title: "Lemon",
  price: 49,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product7-1592652572634.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/grocery-product7-1592652572634.jpg"
}];
const productsElectronics = [{
  id: 72,
  title: "Macbook Air",
  price: 1000,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product7-1592295245178.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product7-1592295245178.jpg"
}, {
  id: 73,
  title: "iPhone 11",
  price: 500,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product2-1592287529862.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product2-1592287529862.jpg"
}, {
  id: 74,
  title: "iMac Pro",
  price: 25,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product3-1592287681712.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product3-1592287681712.jpg"
}, {
  id: 75,
  title: "Smart Watch",
  price: 230,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product6-1592295158729.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product6-1592295158729.jpg"
}, {
  id: 76,
  title: "iPhone 11",
  price: 700,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product4-1592295043599.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/electronics-product4-1592295043599.jpg"
}, {
  id: 77,
  title: "Smartwatch Watchstrap",
  price: 299,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/Untitled-1-1592662802752.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/Untitled-1-1592662802752.jpg"
}];
const productsFurniture = [{
  id: 78,
  title: "Dericka Accent Chair",
  price: 220,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product2-1592455605054.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product2-1592455605054.jpg"
}, {
  id: 79,
  title: "Soletren Oversized Chair",
  price: 350,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product8-1592455967279.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product8-1592455967279.jpg"
}, {
  id: 80,
  title: "Flair Chair",
  price: 110,
  image: "https://demaxin.s3.amazonaws.com/furniture-product1-1592455508806.jpg",
  imageHover: "https://demaxin.s3.amazonaws.com/furniture-product1-1592455508806.jpg"
}, {
  id: 81,
  title: "Dorsten Oversized Chair",
  price: 330,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product3-1592455668243.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product3-1592455668243.jpg"
}, {
  id: 82,
  title: "Linon Blair Chair",
  price: 450,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product4-1592455733332.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product4-1592455733332.jpg"
}, {
  id: 83,
  title: "Modern Alt Blue Arm Chair",
  price: 299,
  image: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product6-1592455909573.jpg",
  imageHover: "https://demaxin.s3.ap-south-1.amazonaws.com/furniture-product6-1592455909573.jpg"
}];

/***/ }),

/***/ "./store/reducers/reducers.js":
/*!************************************!*\
  !*** ./store/reducers/reducers.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeStore": function() { return /* binding */ initializeStore; },
/* harmony export */   "useStore": function() { return /* binding */ useStore; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _json_data_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json-data/products */ "./store/json-data/products.js");
/* harmony import */ var _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/action-types/action-names */ "./store/actions/action-types/action-names.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let store;

const initialState = {
  products: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.products,
  productsCollectionSix: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCollectionSix,
  productsCollectionSeven: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCollectionSeven,
  productsCollectionEight: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCollectionEight,
  productsCollectionNine: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCollectionNine,
  productsCollectionTen: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCollectionTen,
  productsCollectionEleven: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCollectionEleven,
  productsCovid19: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsCovid19,
  productsGrocery: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsGrocery,
  productsElectronics: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsElectronics,
  productsFurniture: _json_data_products__WEBPACK_IMPORTED_MODULE_4__.productsFurniture,
  addedItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0
};

const reducers = (state = initialState, action) => {
  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.ADD_TO_CART) {
    let addedItem = state.products.find(item => item.id === action.id) || state.productsCollectionSix.find(item => item.id === action.id) || state.productsCollectionSeven.find(item => item.id === action.id) || state.productsCollectionEight.find(item => item.id === action.id) || state.productsCollectionNine.find(item => item.id === action.id) || state.productsCollectionTen.find(item => item.id === action.id) || state.productsCollectionEleven.find(item => item.id === action.id) || state.productsCovid19.find(item => item.id === action.id) || state.productsGrocery.find(item => item.id === action.id) || state.productsElectronics.find(item => item.id === action.id) || state.productsFurniture.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.ADD_TO_COMPARE) {
    let addedItemToCompare = state.products.find(item => item.id === action.id) || state.productsCollectionSix.find(item => item.id === action.id) || state.productsCollectionSeven.find(item => item.id === action.id) || state.productsCollectionEight.find(item => item.id === action.id) || state.productsCollectionNine.find(item => item.id === action.id) || state.productsCollectionTen.find(item => item.id === action.id) || state.productsCollectionEleven.find(item => item.id === action.id) || state.productsCovid19.find(item => item.id === action.id) || state.productsGrocery.find(item => item.id === action.id) || state.productsElectronics.find(item => item.id === action.id) || state.productsFurniture.find(item => item.id === action.id);
    addedItemToCompare.quantity = 1;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.ADD_QUANTITY_WITH_NUMBER) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.REMOVE_ITEM_FROM_COMPARE) {
    let new_items = state.addedItemsToCompare.filter(item => action.id !== item.id);
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItemsToCompare: new_items
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.ADD_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.SUB_QUANTITY) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.ADD_SHIPPING) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_5__.RESET_CART) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (preloadedState = initialState) => {
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducers, preloadedState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()))));
};

const initializeStore = preloadedState => {
  var _store2;

  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (true) return _store; // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
const useStore = initialState => {
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeStore(initialState), [initialState]);
  return store;
};

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/animate.min.css":
/*!***************************************!*\
  !*** ./public/styles/animate.min.css ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/bootstrap.min.css":
/*!*****************************************!*\
  !*** ./public/styles/bootstrap.min.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/fontawesome.min.css":
/*!*******************************************!*\
  !*** ./public/styles/fontawesome.min.css ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/responsive.css":
/*!**************************************!*\
  !*** ./public/styles/responsive.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/slick-theme.css":
/*!***************************************!*\
  !*** ./public/styles/slick-theme.css ***!
  \***************************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/slick.css":
/*!*********************************!*\
  !*** ./public/styles/slick.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "./public/styles/style.css":
/*!*********************************!*\
  !*** ./public/styles/style.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZpbmUtcmVhY3QtbmV4dC8uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wLmpzIiwid2VicGFjazovL25vdmluZS1yZWFjdC1uZXh0Ly4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly9ub3ZpbmUtcmVhY3QtbmV4dC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbm92aW5lLXJlYWN0LW5leHQvLi9zdG9yZS9hY3Rpb25zL2FjdGlvbi10eXBlcy9hY3Rpb24tbmFtZXMuanMiLCJ3ZWJwYWNrOi8vbm92aW5lLXJlYWN0LW5leHQvLi9zdG9yZS9qc29uLWRhdGEvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vbm92aW5lLXJlYWN0LW5leHQvLi9zdG9yZS9yZWR1Y2Vycy9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9ub3ZpbmUtcmVhY3QtbmV4dC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25vdmluZS1yZWFjdC1uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9ub3ZpbmUtcmVhY3QtbmV4dC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vbm92aW5lLXJlYWN0LW5leHQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL25vdmluZS1yZWFjdC1uZXh0L2V4dGVybmFsIFwicmVhY3QtdG9vbHRpcFwiIiwid2VicGFjazovL25vdmluZS1yZWFjdC1uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbm92aW5lLXJlYWN0LW5leHQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL25vdmluZS1yZWFjdC1uZXh0L2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vbm92aW5lLXJlYWN0LW5leHQvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwiUmVhY3QiLCJ0aW1lb3V0UmVmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNjcm9sbFRvVG9wIiwic2V0SW50ZXJ2YWwiLCJkZWxheUluTXMiLCJyZW5kZXJHb1RvcEljb24iLCJMYXlvdXQiLCJjaGlsZHJlbiIsIlNsaWRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSIsInVzZVN0b3JlIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRSIsInByb2R1Y3RzIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiaW1hZ2UiLCJpbWFnZUhvdmVyIiwicXVpY2tWaWV3IiwicHJvZHVjdHNDb2xsZWN0aW9uU2l4IiwicHJvZHVjdHNDb2xsZWN0aW9uU2V2ZW4iLCJwcm9kdWN0c0NvbGxlY3Rpb25FaWdodCIsInByb2R1Y3RzQ29sbGVjdGlvbk5pbmUiLCJwcm9kdWN0c0NvbGxlY3Rpb25UZW4iLCJwcm9kdWN0c0NvbGxlY3Rpb25FbGV2ZW4iLCJwcm9kdWN0c0NvdmlkMTkiLCJwcm9kdWN0c0dyb2NlcnkiLCJwcm9kdWN0c0VsZWN0cm9uaWNzIiwicHJvZHVjdHNGdXJuaXR1cmUiLCJpbml0aWFsU3RhdGUiLCJhZGRlZEl0ZW1zIiwiYWRkZWRJdGVtc1RvQ29tcGFyZSIsInRvdGFsIiwic2hpcHBpbmciLCJyZWR1Y2VycyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiZXhpc3RlZF9pdGVtIiwicXVhbnRpdHkiLCJuZXdUb3RhbCIsImFkZGVkSXRlbVRvQ29tcGFyZSIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsImluaXRTdG9yZSIsInByZWxvYWRlZFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwiX3N0b3JlIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUlDLEtBQUQsSUFBVztBQUVyQixRQUFNLENBQUNDLFdBQUQsRUFBY0MsY0FBZCxJQUFnQ0MscURBQUEsQ0FBZSxLQUFmLENBQXRDO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRCxtREFBQSxDQUFhLElBQWIsQ0FBbkI7QUFFQUEsd0RBQUEsQ0FBZ0IsTUFBTTtBQUNsQkUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxNQUFNO0FBQ3RDLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN0Qk4sc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxPQUZELE1BRU87QUFDSEEsc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJELEVBUUcsRUFSSDs7QUFVQSxRQUFNTyxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFJRixNQUFNLENBQUNHLFdBQVAsS0FBdUIsQ0FBM0IsRUFBNkI7QUFDekJDLG1CQUFhLENBQUNQLFVBQVUsQ0FBQ1EsT0FBWixDQUFiO0FBQ0g7O0FBQ0RMLFVBQU0sQ0FBQ00sTUFBUCxDQUFjLENBQWQsRUFBaUJOLE1BQU0sQ0FBQ0csV0FBUCxHQUFxQlYsS0FBSyxDQUFDYyxjQUE1QztBQUNILEdBTEQ7O0FBT0EsUUFBTUMsV0FBVyxHQUFHLE1BQU07QUFDdEJYLGNBQVUsQ0FBQ1EsT0FBWCxHQUFxQkksV0FBVyxDQUFDUCxZQUFELEVBQWVULEtBQUssQ0FBQ2lCLFNBQXJCLENBQWhDO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUMxQixRQUFHakIsV0FBSCxFQUFlO0FBQ1gsMEJBQ0k7QUFBSyxpQkFBUyxFQUFHLFFBQWpCO0FBQTBCLGVBQU8sRUFBRWMsV0FBbkM7QUFBQSxnQ0FDSTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFNSDtBQUNKLEdBVEQ7O0FBV0Esc0JBQ0k7QUFBQSxjQUNLRyxlQUFlO0FBRHBCLG1CQURKO0FBS0gsQ0ExQ0Q7O0FBNENBLCtEQUFlbkIsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1vQixNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFVRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZ0JBQVEsRUFBQyxVQUZYO0FBR0UsZUFBTyxFQUFDO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQWVFO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBbUJFO0FBQU0sV0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBSSxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJGLGVBb0JFO0FBQ0UsZ0JBQVEsRUFBQyxVQURYO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBNkJHQSxRQTdCSCxlQStCRSw4REFBQywwREFBRDtBQUFnQixnQkFBVSxFQUFFQyxpREFBS0E7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkYsZUFpQ0UsOERBQUMsa0RBQUQ7QUFBTyxvQkFBYyxFQUFDLEtBQXRCO0FBQTRCLGVBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDRjtBQUFBLGtCQURGO0FBcUNELENBdENEOztBQXVDQSwrREFBZUYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBRUE7O0FBQ0E7O0FBRUEsTUFBTUcsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBOEI7QUFDeEMsUUFBTUMsS0FBSyxHQUFHQyxtRUFBUSxDQUFDRixTQUFTLENBQUNHLGlCQUFYLENBQXRCO0FBQ0Esc0JBQ0ksOERBQUMsNERBQUQ7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFVLFdBQUssRUFBRUYsS0FBakI7QUFBQSw2QkFDSSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FURDs7QUFXQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ08sTUFBTU0sV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLE1BQU1DLFFBQVEsR0FBRyxDQUNwQjtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsNEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDSUwsSUFBRSxFQUFFLENBRFI7QUFFSUMsT0FBSyxFQUFFLDZCQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSxrQkFKWDtBQUtJQyxZQUFVLEVBQUUsd0JBTGhCO0FBTUlDLFdBQVMsRUFBRTtBQU5mLENBVG9CLEVBaUJwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsMEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqQm9CLEVBeUJwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsNEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6Qm9CLEVBaUNwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsdUJBRlg7QUFHSUMsT0FBSyxFQUFFLEVBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqQ29CLEVBeUNwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsa0JBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6Q29CLEVBaURwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsNkJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqRG9CLEVBeURwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsNEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6RG9CLEVBaUVwQjtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsdUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqRW9CLEVBeUVwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsa0JBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6RW9CLEVBaUZwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsNkJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqRm9CLEVBeUZwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsNEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6Rm9CLEVBaUdwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsNkJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqR29CLEVBeUdwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsMEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6R29CLEVBaUhwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsNEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0FqSG9CLEVBeUhwQjtBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsNEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtCQUpYO0FBS0lDLFlBQVUsRUFBRSx3QkFMaEI7QUFNSUMsV0FBUyxFQUFFO0FBTmYsQ0F6SG9CLENBQWpCO0FBbUlBLE1BQU1DLHFCQUFxQixHQUFHLENBQ2pDO0FBQ0lOLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxvQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsOENBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FEaUMsRUFRakM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG9CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSw4Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQVJpQyxFQWVqQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUscUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLDhDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBZmlDLENBQTlCO0FBd0JBLE1BQU1FLHVCQUF1QixHQUFHLENBQ25DO0FBQ0lQLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxvQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FEbUMsRUFRbkM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG1CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQVJtQyxFQWVuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUscUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBZm1DLEVBc0JuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0F0Qm1DLEVBNkJuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBN0JtQyxFQW9DbkM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG1CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQXBDbUMsRUEyQ25DO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxrQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0EzQ21DLEVBa0RuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FsRG1DLENBQWhDO0FBMkRBLE1BQU1HLHVCQUF1QixHQUFHLENBQ25DO0FBQ0lSLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxvQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FEbUMsRUFRbkM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG1CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQVJtQyxFQWVuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUscUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBZm1DLEVBc0JuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0F0Qm1DLEVBNkJuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0E3Qm1DLEVBb0NuQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsbUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBcENtQyxFQTJDbkM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLGtCQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQTNDbUMsRUFrRG5DO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxjQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQWxEbUMsQ0FBaEM7QUEyREEsTUFBTUksc0JBQXNCLEdBQUcsQ0FDbEM7QUFDSVQsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG9CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQURrQyxFQVFsQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsbUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBUmtDLEVBZWxDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxxQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0Fma0MsRUFzQmxDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxhQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQXRCa0MsRUE2QmxDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQTdCa0MsRUFvQ2xDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxtQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FwQ2tDLEVBMkNsQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsa0JBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBM0NrQyxFQWtEbEM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLGNBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBbERrQyxDQUEvQjtBQTJEQSxNQUFNSyxxQkFBcUIsR0FBRyxDQUNqQztBQUNJVixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsb0JBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBRGlDLEVBUWpDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxtQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FSaUMsRUFlakM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLHFCQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQWZpQyxFQXNCakM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLGFBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBdEJpQyxFQTZCakM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBN0JpQyxFQW9DakM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG1CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQXBDaUMsRUEyQ2pDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxrQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0EzQ2lDLEVBa0RqQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FsRGlDLENBQTlCO0FBMkRBLE1BQU1NLHdCQUF3QixHQUFHLENBQ3BDO0FBQ0lYLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxvQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0FEb0MsRUFRcEM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG1CQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQVJvQyxFQWVwQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUscUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBZm9DLEVBc0JwQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0F0Qm9DLEVBNkJwQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsd0NBSlg7QUFLSUUsV0FBUyxFQUFFO0FBTGYsQ0E3Qm9DLEVBb0NwQztBQUNJTCxJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsbUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLHdDQUpYO0FBS0lFLFdBQVMsRUFBRTtBQUxmLENBcENvQyxFQTJDcEM7QUFDSUwsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLGtCQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQTNDb0MsRUFrRHBDO0FBQ0lMLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxjQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSx3Q0FKWDtBQUtJRSxXQUFTLEVBQUU7QUFMZixDQWxEb0MsQ0FBakM7QUEyREEsTUFBTU8sZUFBZSxHQUFHLENBQzNCO0FBQ0laLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxnQkFGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsc0VBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBRDJCLEVBUTNCO0FBQ0lKLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxtQkFGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsMkRBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBUjJCLEVBZTNCO0FBQ0lKLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxnQkFGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsc0VBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBZjJCLEVBc0IzQjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsT0FGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsc0VBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBdEIyQixFQTZCM0I7QUFDSUosSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSxFQUhYO0FBSUlDLE9BQUssRUFBRSxzRUFKWDtBQUtJQyxZQUFVLEVBQUU7QUFMaEIsQ0E3QjJCLEVBb0MzQjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsU0FGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsc0VBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBcEMyQixDQUF4QjtBQTZDQSxNQUFNUyxlQUFlLEdBQUcsQ0FDM0I7QUFDSWIsSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLG1CQUZYO0FBR0lDLE9BQUssRUFBRSxFQUhYO0FBSUlDLE9BQUssRUFBRSxnRkFKWDtBQUtJQyxZQUFVLEVBQUU7QUFMaEIsQ0FEMkIsRUFRM0I7QUFDSUosSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLFlBRlg7QUFHSUMsT0FBSyxFQUFFLEVBSFg7QUFJSUMsT0FBSyxFQUFFLHFFQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQVIyQixFQWUzQjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsZ0ZBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBZjJCLEVBc0IzQjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsVUFGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsZ0ZBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBdEIyQixFQTZCM0I7QUFDSUosSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLFVBRlg7QUFHSUMsT0FBSyxFQUFFLEVBSFg7QUFJSUMsT0FBSyxFQUFFLGdGQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQTdCMkIsRUFvQzNCO0FBQ0lKLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxPQUZYO0FBR0lDLE9BQUssRUFBRSxFQUhYO0FBSUlDLE9BQUssRUFBRSxnRkFKWDtBQUtJQyxZQUFVLEVBQUU7QUFMaEIsQ0FwQzJCLENBQXhCO0FBNkNBLE1BQU1VLG1CQUFtQixHQUFHLENBQy9CO0FBQ0lkLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxhQUZYO0FBR0lDLE9BQUssRUFBRSxJQUhYO0FBSUlDLE9BQUssRUFBRSxvRkFKWDtBQUtJQyxZQUFVLEVBQUU7QUFMaEIsQ0FEK0IsRUFRL0I7QUFDSUosSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLFdBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLG9GQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQVIrQixFQWUvQjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsVUFGWDtBQUdJQyxPQUFLLEVBQUUsRUFIWDtBQUlJQyxPQUFLLEVBQUUsb0ZBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBZitCLEVBc0IvQjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsb0ZBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBdEIrQixFQTZCL0I7QUFDSUosSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLFdBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLG9GQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQTdCK0IsRUFvQy9CO0FBQ0lKLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSx1QkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsMEVBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBcEMrQixDQUE1QjtBQTZDQSxNQUFNVyxpQkFBaUIsR0FBRyxDQUM3QjtBQUNJZixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsc0JBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtGQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQUQ2QixFQVE3QjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsMEJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtGQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQVI2QixFQWU3QjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUsYUFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsdUVBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBZjZCLEVBc0I3QjtBQUNJSixJQUFFLEVBQUUsRUFEUjtBQUVJQyxPQUFLLEVBQUUseUJBRlg7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsT0FBSyxFQUFFLGtGQUpYO0FBS0lDLFlBQVUsRUFBRTtBQUxoQixDQXRCNkIsRUE2QjdCO0FBQ0lKLElBQUUsRUFBRSxFQURSO0FBRUlDLE9BQUssRUFBRSxtQkFGWDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxPQUFLLEVBQUUsa0ZBSlg7QUFLSUMsWUFBVSxFQUFFO0FBTGhCLENBN0I2QixFQW9DN0I7QUFDSUosSUFBRSxFQUFFLEVBRFI7QUFFSUMsT0FBSyxFQUFFLDJCQUZYO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLE9BQUssRUFBRSxrRkFKWDtBQUtJQyxZQUFVLEVBQUU7QUFMaEIsQ0FwQzZCLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemtCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0EsSUFBSW5CLEtBQUo7QUFFQTtBQVlBLE1BQU0rQixZQUFZLEdBQUc7QUFDakJqQixVQUFRLEVBQUVBLHlEQURPO0FBRWpCTyx1QkFBcUIsRUFBRUEsc0VBRk47QUFHakJDLHlCQUF1QixFQUFFQSx3RUFIUjtBQUlqQkMseUJBQXVCLEVBQUVBLHdFQUpSO0FBS2pCQyx3QkFBc0IsRUFBRUEsdUVBTFA7QUFNakJDLHVCQUFxQixFQUFFQSxzRUFOTjtBQU9qQkMsMEJBQXdCLEVBQUVBLHlFQVBUO0FBUWpCQyxpQkFBZSxFQUFFQSxnRUFSQTtBQVNqQkMsaUJBQWUsRUFBRUEsZ0VBVEE7QUFVakJDLHFCQUFtQixFQUFFQSxvRUFWSjtBQVdqQkMsbUJBQWlCLEVBQUVBLGtFQVhGO0FBWWpCRSxZQUFVLEVBQUMsRUFaTTtBQWFqQkMscUJBQW1CLEVBQUMsRUFiSDtBQWNqQkMsT0FBSyxFQUFFLENBZFU7QUFlakJDLFVBQVEsRUFBRTtBQWZPLENBQXJCOztBQWtCQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHTixZQUFULEVBQXVCTyxNQUF2QixLQUFrQztBQUUvQyxNQUFHQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JwQywyRUFBbkIsRUFBK0I7QUFDM0IsUUFBSXFDLFNBQVMsR0FBR0gsS0FBSyxDQUFDdkIsUUFBTixDQUFlMkIsSUFBZixDQUFvQkMsSUFBSSxJQUFJQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUEvQyxLQUNic0IsS0FBSyxDQUFDaEIscUJBQU4sQ0FBNEJvQixJQUE1QixDQUFpQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUE1RCxDQURhLElBRWJzQixLQUFLLENBQUNmLHVCQUFOLENBQThCbUIsSUFBOUIsQ0FBbUNDLElBQUksSUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBOUQsQ0FGYSxJQUdic0IsS0FBSyxDQUFDZCx1QkFBTixDQUE4QmtCLElBQTlCLENBQW1DQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTlELENBSGEsSUFJYnNCLEtBQUssQ0FBQ2Isc0JBQU4sQ0FBNkJpQixJQUE3QixDQUFrQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUE3RCxDQUphLElBS2JzQixLQUFLLENBQUNaLHFCQUFOLENBQTRCZ0IsSUFBNUIsQ0FBaUNDLElBQUksSUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBNUQsQ0FMYSxJQU1ic0IsS0FBSyxDQUFDWCx3QkFBTixDQUErQmUsSUFBL0IsQ0FBb0NDLElBQUksSUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBL0QsQ0FOYSxJQU9ic0IsS0FBSyxDQUFDVixlQUFOLENBQXNCYyxJQUF0QixDQUEyQkMsSUFBSSxJQUFJQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUF0RCxDQVBhLElBUWJzQixLQUFLLENBQUNULGVBQU4sQ0FBc0JhLElBQXRCLENBQTJCQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQXRELENBUmEsSUFTYnNCLEtBQUssQ0FBQ1IsbUJBQU4sQ0FBMEJZLElBQTFCLENBQStCQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTFELENBVGEsSUFVYnNCLEtBQUssQ0FBQ1AsaUJBQU4sQ0FBd0JXLElBQXhCLENBQTZCQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQXhELENBVkgsQ0FEMkIsQ0FZM0I7O0FBQ0EsUUFBSTRCLFlBQVksR0FBR04sS0FBSyxDQUFDTCxVQUFOLENBQWlCUyxJQUFqQixDQUFzQkMsSUFBSSxJQUFJSixNQUFNLENBQUN2QixFQUFQLEtBQWMyQixJQUFJLENBQUMzQixFQUFqRCxDQUFuQjs7QUFDQSxRQUFHNEIsWUFBSCxFQUFnQjtBQUNaSCxlQUFTLENBQUNJLFFBQVYsSUFBc0IsQ0FBdEI7QUFDQSw2Q0FDT1AsS0FEUDtBQUVJSCxhQUFLLEVBQUVHLEtBQUssQ0FBQ0gsS0FBTixHQUFjTSxTQUFTLENBQUN2QjtBQUZuQztBQUlILEtBTkQsTUFNTztBQUNIdUIsZUFBUyxDQUFDSSxRQUFWLEdBQXFCLENBQXJCLENBREcsQ0FFSDs7QUFDQSxVQUFJQyxRQUFRLEdBQUdSLEtBQUssQ0FBQ0gsS0FBTixHQUFjTSxTQUFTLENBQUN2QixLQUF2QztBQUVBLDZDQUNPb0IsS0FEUDtBQUVJTCxrQkFBVSxFQUFFLENBQUMsR0FBR0ssS0FBSyxDQUFDTCxVQUFWLEVBQXNCUSxTQUF0QixDQUZoQjtBQUdJTixhQUFLLEVBQUdXO0FBSFo7QUFNSDtBQUNKOztBQUVELE1BQUdQLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQjNCLDhFQUFuQixFQUFrQztBQUM5QixRQUFJa0Msa0JBQWtCLEdBQUdULEtBQUssQ0FBQ3ZCLFFBQU4sQ0FBZTJCLElBQWYsQ0FBb0JDLElBQUksSUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBL0MsS0FDdEJzQixLQUFLLENBQUNoQixxQkFBTixDQUE0Qm9CLElBQTVCLENBQWlDQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTVELENBRHNCLElBRXRCc0IsS0FBSyxDQUFDZix1QkFBTixDQUE4Qm1CLElBQTlCLENBQW1DQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTlELENBRnNCLElBR3RCc0IsS0FBSyxDQUFDZCx1QkFBTixDQUE4QmtCLElBQTlCLENBQW1DQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTlELENBSHNCLElBSXRCc0IsS0FBSyxDQUFDYixzQkFBTixDQUE2QmlCLElBQTdCLENBQWtDQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTdELENBSnNCLElBS3RCc0IsS0FBSyxDQUFDWixxQkFBTixDQUE0QmdCLElBQTVCLENBQWlDQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTVELENBTHNCLElBTXRCc0IsS0FBSyxDQUFDWCx3QkFBTixDQUErQmUsSUFBL0IsQ0FBb0NDLElBQUksSUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBL0QsQ0FOc0IsSUFPdEJzQixLQUFLLENBQUNWLGVBQU4sQ0FBc0JjLElBQXRCLENBQTJCQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQXRELENBUHNCLElBUXRCc0IsS0FBSyxDQUFDVCxlQUFOLENBQXNCYSxJQUF0QixDQUEyQkMsSUFBSSxJQUFJQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUF0RCxDQVJzQixJQVN0QnNCLEtBQUssQ0FBQ1IsbUJBQU4sQ0FBMEJZLElBQTFCLENBQStCQyxJQUFJLElBQUlBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTFELENBVHNCLElBVXRCc0IsS0FBSyxDQUFDUCxpQkFBTixDQUF3QlcsSUFBeEIsQ0FBNkJDLElBQUksSUFBSUEsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBeEQsQ0FWSDtBQVlBK0Isc0JBQWtCLENBQUNGLFFBQW5CLEdBQThCLENBQTlCO0FBRUEsMkNBQ09QLEtBRFA7QUFFSUoseUJBQW1CLEVBQUUsQ0FBQyxHQUFHSSxLQUFLLENBQUNKLG1CQUFWLEVBQStCYSxrQkFBL0I7QUFGekI7QUFJSDs7QUFFRCxNQUFHUixNQUFNLENBQUNDLElBQVAsS0FBZ0IvQix3RkFBbkIsRUFBNEM7QUFDeEMsUUFBSWdDLFNBQVMsR0FBR0gsS0FBSyxDQUFDdkIsUUFBTixDQUFlMkIsSUFBZixDQUFvQkMsSUFBSSxJQUFJQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUEvQyxDQUFoQixDQUR3QyxDQUV4Qzs7QUFDQSxRQUFJNEIsWUFBWSxHQUFHTixLQUFLLENBQUNMLFVBQU4sQ0FBaUJTLElBQWpCLENBQXNCQyxJQUFJLElBQUdKLE1BQU0sQ0FBQ3ZCLEVBQVAsS0FBYzJCLElBQUksQ0FBQzNCLEVBQWhELENBQW5COztBQUNBLFFBQUc0QixZQUFILEVBQ0E7QUFDSUgsZUFBUyxDQUFDSSxRQUFWLElBQXNCTixNQUFNLENBQUNTLEdBQTdCO0FBQ0EsNkNBQ09WLEtBRFA7QUFFSUgsYUFBSyxFQUFFRyxLQUFLLENBQUNILEtBQU4sR0FBY00sU0FBUyxDQUFDdkIsS0FBVixHQUFrQnFCLE1BQU0sQ0FBQ1M7QUFGbEQ7QUFJSCxLQVBELE1BT087QUFDSFAsZUFBUyxDQUFDSSxRQUFWLEdBQXFCTixNQUFNLENBQUNTLEdBQTVCLENBREcsQ0FFSDs7QUFDQSxVQUFJRixRQUFRLEdBQUdSLEtBQUssQ0FBQ0gsS0FBTixHQUFjTSxTQUFTLENBQUN2QixLQUFWLEdBQWtCcUIsTUFBTSxDQUFDUyxHQUF0RDtBQUVBLDZDQUNPVixLQURQO0FBRUlMLGtCQUFVLEVBQUUsQ0FBQyxHQUFHSyxLQUFLLENBQUNMLFVBQVYsRUFBc0JRLFNBQXRCLENBRmhCO0FBR0lOLGFBQUssRUFBR1c7QUFIWjtBQU1IO0FBQ0o7O0FBRUQsTUFBR1AsTUFBTSxDQUFDQyxJQUFQLEtBQWdCbkMsMkVBQW5CLEVBQStCO0FBQzNCLFFBQUk0QyxZQUFZLEdBQUdYLEtBQUssQ0FBQ0wsVUFBTixDQUFpQlMsSUFBakIsQ0FBc0JDLElBQUksSUFBR0osTUFBTSxDQUFDdkIsRUFBUCxLQUFjMkIsSUFBSSxDQUFDM0IsRUFBaEQsQ0FBbkI7QUFDQSxRQUFJa0MsU0FBUyxHQUFHWixLQUFLLENBQUNMLFVBQU4sQ0FBaUJrQixNQUFqQixDQUF3QlIsSUFBSSxJQUFHSixNQUFNLENBQUN2QixFQUFQLEtBQWMyQixJQUFJLENBQUMzQixFQUFsRCxDQUFoQixDQUYyQixDQUkzQjs7QUFDQSxRQUFJOEIsUUFBUSxHQUFHUixLQUFLLENBQUNILEtBQU4sR0FBZWMsWUFBWSxDQUFDL0IsS0FBYixHQUFxQitCLFlBQVksQ0FBQ0osUUFBaEU7QUFFQSwyQ0FDT1AsS0FEUDtBQUVJTCxnQkFBVSxFQUFFaUIsU0FGaEI7QUFHSWYsV0FBSyxFQUFFVztBQUhYO0FBS0g7O0FBRUQsTUFBR1AsTUFBTSxDQUFDQyxJQUFQLEtBQWdCMUIsd0ZBQW5CLEVBQTRDO0FBQ3hDLFFBQUlvQyxTQUFTLEdBQUdaLEtBQUssQ0FBQ0osbUJBQU4sQ0FBMEJpQixNQUExQixDQUFpQ1IsSUFBSSxJQUFHSixNQUFNLENBQUN2QixFQUFQLEtBQWMyQixJQUFJLENBQUMzQixFQUEzRCxDQUFoQjtBQUVBLDJDQUNPc0IsS0FEUDtBQUVJSix5QkFBbUIsRUFBRWdCO0FBRnpCO0FBSUg7O0FBRUQsTUFBR1gsTUFBTSxDQUFDQyxJQUFQLEtBQWdCakMsNEVBQW5CLEVBQWdDO0FBQzVCLFFBQUlrQyxTQUFTLEdBQUdILEtBQUssQ0FBQ3ZCLFFBQU4sQ0FBZTJCLElBQWYsQ0FBb0JDLElBQUksSUFBR0EsSUFBSSxDQUFDM0IsRUFBTCxLQUFZdUIsTUFBTSxDQUFDdkIsRUFBOUMsQ0FBaEI7QUFDQXlCLGFBQVMsQ0FBQ0ksUUFBVixJQUFzQixDQUF0QjtBQUNBLFFBQUlDLFFBQVEsR0FBR1IsS0FBSyxDQUFDSCxLQUFOLEdBQWNNLFNBQVMsQ0FBQ3ZCLEtBQXZDO0FBQ0EsMkNBQ09vQixLQURQO0FBRUlILFdBQUssRUFBRVc7QUFGWDtBQUlIOztBQUVELE1BQUdQLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQmxDLDRFQUFuQixFQUFnQztBQUM1QixRQUFJbUMsU0FBUyxHQUFHSCxLQUFLLENBQUN2QixRQUFOLENBQWUyQixJQUFmLENBQW9CQyxJQUFJLElBQUdBLElBQUksQ0FBQzNCLEVBQUwsS0FBWXVCLE1BQU0sQ0FBQ3ZCLEVBQTlDLENBQWhCLENBRDRCLENBRTVCOztBQUNBLFFBQUd5QixTQUFTLENBQUNJLFFBQVYsS0FBdUIsQ0FBMUIsRUFBNEI7QUFDeEIsVUFBSUssU0FBUyxHQUFHWixLQUFLLENBQUNMLFVBQU4sQ0FBaUJrQixNQUFqQixDQUF3QlIsSUFBSSxJQUFFQSxJQUFJLENBQUMzQixFQUFMLEtBQVl1QixNQUFNLENBQUN2QixFQUFqRCxDQUFoQjtBQUNBLFVBQUk4QixRQUFRLEdBQUdSLEtBQUssQ0FBQ0gsS0FBTixHQUFjTSxTQUFTLENBQUN2QixLQUF2QztBQUNBLDZDQUNPb0IsS0FEUDtBQUVJTCxrQkFBVSxFQUFFaUIsU0FGaEI7QUFHSWYsYUFBSyxFQUFFVztBQUhYO0FBS0gsS0FSRCxNQVFPO0FBQ0hMLGVBQVMsQ0FBQ0ksUUFBVixJQUFzQixDQUF0QjtBQUNBLFVBQUlDLFFBQVEsR0FBR1IsS0FBSyxDQUFDSCxLQUFOLEdBQWNNLFNBQVMsQ0FBQ3ZCLEtBQXZDO0FBQ0EsNkNBQ09vQixLQURQO0FBRUlILGFBQUssRUFBRVc7QUFGWDtBQUlIO0FBRUo7O0FBRUQsTUFBR1AsTUFBTSxDQUFDQyxJQUFQLEtBQWdCaEMsNEVBQW5CLEVBQWdDO0FBQzVCLDJDQUNPOEIsS0FEUDtBQUVJRixjQUFRLEVBQUVFLEtBQUssQ0FBQ0YsUUFBTixJQUFrQjtBQUZoQztBQUlIOztBQUVELE1BQUdHLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixjQUFuQixFQUFrQztBQUM5QiwyQ0FDT0YsS0FEUDtBQUVJRixjQUFRLEVBQUVFLEtBQUssQ0FBQ0YsUUFBTixJQUFrQjtBQUZoQztBQUlIOztBQUVELE1BQUdHLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQjVCLDBFQUFuQixFQUE4QjtBQUMxQiwyQ0FDTzBCLEtBRFA7QUFFSUwsZ0JBQVUsRUFBRSxFQUZoQjtBQUdJRSxXQUFLLEVBQUUsQ0FIWDtBQUlJQyxjQUFRLEVBQUU7QUFKZDtBQU1ILEdBUEQsTUFTSztBQUNELFdBQU9FLEtBQVA7QUFDSDtBQUNKLENBbktEOztBQXFLQSxNQUFNYyxTQUFTLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHckIsWUFBbEIsS0FBbUM7QUFDakQsU0FBT3NCLGtEQUFXLENBQ2RqQixRQURjLEVBRWRnQixjQUZjLEVBR2RFLDZFQUFtQixDQUFDQyxzREFBZSxDQUFDQyxvREFBRCxDQUFoQixDQUhMLENBQWxCO0FBS0gsQ0FORDs7QUFRTyxNQUFNQyxlQUFlLEdBQUlMLGNBQUQsSUFBb0I7QUFBQTs7QUFDL0MsTUFBSU0sTUFBTSxjQUFHMUQsS0FBSCw2Q0FBWW1ELFNBQVMsQ0FBQ0MsY0FBRCxDQUEvQixDQUQrQyxDQUcvQztBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlwRCxLQUF0QixFQUE2QjtBQUN6QjBELFVBQU0sR0FBR1AsU0FBUyxpQ0FDWG5ELEtBQUssQ0FBQzJELFFBQU4sRUFEVyxHQUVYUCxjQUZXLEVBQWxCLENBRHlCLENBS3pCOztBQUNBcEQsU0FBSyxHQUFHNEQsU0FBUjtBQUNILEdBWjhDLENBYy9DOzs7QUFDQSxZQUFtQyxPQUFPRixNQUFQLENBZlksQ0FnQi9DOztBQUNBLE1BQUksQ0FBQzFELEtBQUwsRUFBWUEsS0FBSyxHQUFHMEQsTUFBUjtBQUVaLFNBQU9BLE1BQVA7QUFDSCxDQXBCTTtBQXNCQSxNQUFNekQsUUFBUSxHQUFJOEIsWUFBRCxJQUFrQjtBQUN0QyxRQUFNL0IsS0FBSyxHQUFHNkQsOENBQU8sQ0FBQyxNQUFNSixlQUFlLENBQUMxQixZQUFELENBQXRCLEVBQXNDLENBQUNBLFlBQUQsQ0FBdEMsQ0FBckI7QUFDQSxTQUFPL0IsS0FBUDtBQUNILENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclBQLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgR29Ub3AgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gcHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgcHJvcHMuZGVsYXlJbk1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhlUG9zaXRpb24pe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bnby10b3BgfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcnJvdy11cFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEdvVG9wIGZyb20gXCIuLi9TaGFyZWQvR29Ub3BcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIFNsaWRlIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSBcInJlYWN0LXRvb2x0aXBcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFJlYWN0VG9vbHRpcCAvPlxyXG5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkJlYXV0eSBTa2luPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgc2hyaW5rLXRvLWZpdD1ub1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJOb3ZpbmUgaXMgYSBjbGVhbiBhbmQgbW9kZXJuIHB1cnNlIFJlYWN0IE5leHQgSlMgZUNvbW1lcmNlIHRlbXBsYXRlLiBUaGlzIGlzIGJ1aWx0IG9uIFJlYWN0LmpzLCBOZXh0LmpzLCBSZWFjdC1SZWR1eCwgRVM2KywgU2FzcyBhbmQgQm9vdHN0cmFwIDQuXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwib2c6dGl0bGVcIlxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp0aXRsZVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiTm92aW5lIC0gUmVhY3QgTmV4dCBlQ29tbWVyY2UgVGVtcGxhdGVzXCJcclxuICAgICAgICA+PC9tZXRhPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjpjYXJkXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJOb3ZpbmUgLSBSZWFjdCBOZXh0IGVDb21tZXJjZSBUZW1wbGF0ZXNcIlxyXG4gICAgICAgID48L21ldGE+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vbm92aW5lLXJlYWN0LmVudnl0aGVtZS5jb20vXCI+PC9saW5rPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXYtZW1wdHkvaW1hZ2UvdXBsb2FkL3YxNTkwMDc2MzA5L3BwdXltZnVjcjRqdWJxdmhxYXF0LmpwZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIHRyYW5zaXRpb249e1NsaWRlfSAvPlxyXG5cclxuICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJpbXBvcnQgJy9wdWJsaWMvc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcvcHVibGljL3N0eWxlcy9mb250YXdlc29tZS5taW4uY3NzJztcclxuaW1wb3J0ICcvcHVibGljL3N0eWxlcy9hbmltYXRlLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy9wdWJsaWMvc3R5bGVzL3NsaWNrLmNzcyc7XHJcbmltcG9ydCAnL3B1YmxpYy9zdHlsZXMvc2xpY2stdGhlbWUuY3NzJztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJztcclxuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy9wdWJsaWMvc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnL3B1YmxpYy9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL19BcHAvTGF5b3V0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUocGFnZVByb3BzLmluaXRpYWxSZWR1eFN0YXRlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcclxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcclxuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZID0gJ0FERF9RVUFOVElUWSc7XHJcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgT1JERVJfRk9STSA9ICdPUkRFUl9GT1JNJztcclxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJztcclxuZXhwb3J0IGNvbnN0IEFERF9UT19DT01QQVJFID0gJ0FERF9UT19DT01QQVJFJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRSA9ICdSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUnOyIsImV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogXCJMaW5lbiBjcm9jaGV0IHRyaW0gdC1zaGlydFwiLFxyXG4gICAgICAgIHByaWNlOiAxOTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWcxLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXIxLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiBcIk5lY2sgZW1waXJlIHNsZWV2ZSB0LXNoaXJ0c1wiLFxyXG4gICAgICAgIHByaWNlOiAxMjAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWcyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXIyLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiBcIk1lcm1haWQgcGVuY2lsIG1pZGkgbGFjZVwiLFxyXG4gICAgICAgIHByaWNlOiAxNjAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWczLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXIzLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHRpdGxlOiBcIkNyaXNzLWNyb3NzIFYgbmVjayBib2R5Y29uXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzMCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ltZzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL2ltZy1ob3ZlcjQuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdGl0bGU6IFwiVGhlIGNvc21pYyBjb3JudWNvcGlhXCIsXHJcbiAgICAgICAgcHJpY2U6IDkwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaW1nNS5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvaW1nLWhvdmVyNS5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICB0aXRsZTogXCJUZW5rdSByZW1hc3RlcmVkXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ltZzYuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL2ltZy1ob3ZlcjYuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgdGl0bGU6IFwiV29tZW4ncyBzaGVycGEgbGluZWQgaG9vZGllXCIsXHJcbiAgICAgICAgcHJpY2U6IDMzMCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ltZzcuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL2ltZy1ob3ZlcjcuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgdGl0bGU6IFwiQmVsdGVkIGNoaW5vIHRyb3VzZXJzIHBvbG9cIixcclxuICAgICAgICBwcmljZTogMTQwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaW1nOC5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvaW1nLWhvdmVyOC5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICB0aXRsZTogXCJUaGUgY29zbWljIGNvcm51Y29waWFcIixcclxuICAgICAgICBwcmljZTogNDMwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaW1nMS5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvaW1nLWhvdmVyMS5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTAsXHJcbiAgICAgICAgdGl0bGU6IFwiVGVua3UgcmVtYXN0ZXJlZFwiLFxyXG4gICAgICAgIHByaWNlOiA2NTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWcyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXIyLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxMSxcclxuICAgICAgICB0aXRsZTogXCJXb21lbidzIHNoZXJwYSBsaW5lZCBob29kaWVcIixcclxuICAgICAgICBwcmljZTogMjMwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaW1nMy5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvaW1nLWhvdmVyMy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTIsXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZW4gY3JvY2hldCB0cmltIHQtc2hpcnRcIixcclxuICAgICAgICBwcmljZTogNjcwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvaW1nNC5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcIi9pbWFnZXMvaW1nLWhvdmVyNC5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTMsXHJcbiAgICAgICAgdGl0bGU6IFwiTmVjayBlbXBpcmUgc2xlZXZlIHQtc2hpcnRzXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyMCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL2ltZzUuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCIvaW1hZ2VzL2ltZy1ob3ZlcjUuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgIHRpdGxlOiBcIk1lcm1haWQgcGVuY2lsIG1pZGkgbGFjZVwiLFxyXG4gICAgICAgIHByaWNlOiA1NDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWc2LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXI2LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNSxcclxuICAgICAgICB0aXRsZTogXCJDcmlzcy1jcm9zcyBWIG5lY2sgYm9keWNvblwiLFxyXG4gICAgICAgIHByaWNlOiAyMzAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWc3LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXI3LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxNixcclxuICAgICAgICB0aXRsZTogXCJCZWx0ZWQgY2hpbm8gdHJvdXNlcnMgcG9sb1wiLFxyXG4gICAgICAgIHByaWNlOiA1MzAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9pbWc4LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiL2ltYWdlcy9pbWctaG92ZXI4LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0NvbGxlY3Rpb25TaXggPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDE3LFxyXG4gICAgICAgIHRpdGxlOiBcIkxpbmVuIGNyb2NoZXQgdHJpbVwiLFxyXG4gICAgICAgIHByaWNlOiAxOTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zdW5nbGFzc2VzLWltYWdlL3N1bmdsYXNzZXMtaW1nMS5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMTgsXHJcbiAgICAgICAgdGl0bGU6IFwiTmVjayBlbXBpcmUgc2xlZXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyMCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3N1bmdsYXNzZXMtaW1hZ2Uvc3VuZ2xhc3Nlcy1pbWcyLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxOSxcclxuICAgICAgICB0aXRsZTogXCJNZXJtYWlkIHBlbmNpbCBtaWRpXCIsXHJcbiAgICAgICAgcHJpY2U6IDE2MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3N1bmdsYXNzZXMtaW1hZ2Uvc3VuZ2xhc3Nlcy1pbWczLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0NvbGxlY3Rpb25TZXZlbiA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMjAsXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZW4gQ3JvY2hldCBUcmltXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWcxLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyMSxcclxuICAgICAgICB0aXRsZTogXCJIZWFydGxhbmQgQWxhYmFtYVwiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMi5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjIsXHJcbiAgICAgICAgdGl0bGU6IFwiTWVybWFpZCBwZW5jaWwgbWlkaVwiLFxyXG4gICAgICAgIHByaWNlOiAyNTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjMsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3Jpc3MtY3Jvc3NcIixcclxuICAgICAgICBwcmljZTogMTYwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzQuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDI0LFxyXG4gICAgICAgIHRpdGxlOiBcIlYgbmVjayBib2R5Y29uXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxNCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc1LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyNSxcclxuICAgICAgICB0aXRsZTogXCJDb3NtaWMgQ29ybnVjb3BpYVwiLFxyXG4gICAgICAgIHByaWNlOiAxMjAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNi5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjYsXHJcbiAgICAgICAgdGl0bGU6IFwiVGVua3UgUmVtYXN0ZXJlZFwiLFxyXG4gICAgICAgIHByaWNlOiA1NDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMjcsXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZWQgSG9vZGllXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc4LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0NvbGxlY3Rpb25FaWdodCA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMjgsXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZW4gQ3JvY2hldCBUcmltXCIsXHJcbiAgICAgICAgcHJpY2U6IDE5MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWcxLmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyOSxcclxuICAgICAgICB0aXRsZTogXCJIZWFydGxhbmQgQWxhYmFtYVwiLFxyXG4gICAgICAgIHByaWNlOiAzMDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMi5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMzAsXHJcbiAgICAgICAgdGl0bGU6IFwiTWVybWFpZCBQZW5jaWwgTWlkaVwiLFxyXG4gICAgICAgIHByaWNlOiAyNTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMzEsXHJcbiAgICAgICAgdGl0bGU6IFwiQ3Jpc3MtY3Jvc3NcIixcclxuICAgICAgICBwcmljZTogMTYwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzQuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMyLFxyXG4gICAgICAgIHRpdGxlOiBcIlZuZWNrIEJvZHljb25cIixcclxuICAgICAgICBwcmljZTogMjE0LFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzUuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMzLFxyXG4gICAgICAgIHRpdGxlOiBcIkNvc21pYyBDb3JudWNvcGlhXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyMCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc2LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzNCxcclxuICAgICAgICB0aXRsZTogXCJUZW5rdSBSZW1hc3RlcmVkXCIsXHJcbiAgICAgICAgcHJpY2U6IDU0MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc3LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzNSxcclxuICAgICAgICB0aXRsZTogXCJMaW5lZCBIb29kaWVcIixcclxuICAgICAgICBwcmljZTogMTgwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzguanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzQ29sbGVjdGlvbk5pbmUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDM2LFxyXG4gICAgICAgIHRpdGxlOiBcIkxpbmVuIENyb2NoZXQgVHJpbVwiLFxyXG4gICAgICAgIHByaWNlOiAxOTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMS5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMzcsXHJcbiAgICAgICAgdGl0bGU6IFwiSGVhcnRsYW5kIEFsYWJhbWFcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzIuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDM4LFxyXG4gICAgICAgIHRpdGxlOiBcIk1lcm1haWQgUGVuY2lsIE1pZGlcIixcclxuICAgICAgICBwcmljZTogMjUwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzMuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDM5LFxyXG4gICAgICAgIHRpdGxlOiBcIkNyaXNzLWNyb3NzXCIsXHJcbiAgICAgICAgcHJpY2U6IDE2MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc0LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0MCxcclxuICAgICAgICB0aXRsZTogXCJWbmVjayBCb2R5Y29uXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxNCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc1LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0MSxcclxuICAgICAgICB0aXRsZTogXCJDb3NtaWMgQ29ybnVjb3BpYVwiLFxyXG4gICAgICAgIHByaWNlOiAxMjAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNi5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNDIsXHJcbiAgICAgICAgdGl0bGU6IFwiVGVua3UgUmVtYXN0ZXJlZFwiLFxyXG4gICAgICAgIHByaWNlOiA1NDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNDMsXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZWQgSG9vZGllXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc4LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0NvbGxlY3Rpb25UZW4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQ0LFxyXG4gICAgICAgIHRpdGxlOiBcIkxpbmVuIENyb2NoZXQgVHJpbVwiLFxyXG4gICAgICAgIHByaWNlOiAxOTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMS5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNDUsXHJcbiAgICAgICAgdGl0bGU6IFwiSGVhcnRsYW5kIEFsYWJhbWFcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzIuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQ2LFxyXG4gICAgICAgIHRpdGxlOiBcIk1lcm1haWQgUGVuY2lsIE1pZGlcIixcclxuICAgICAgICBwcmljZTogMjUwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzMuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQ3LFxyXG4gICAgICAgIHRpdGxlOiBcIkNyaXNzLWNyb3NzXCIsXHJcbiAgICAgICAgcHJpY2U6IDE2MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc0LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0OCxcclxuICAgICAgICB0aXRsZTogXCJWbmVjayBCb2R5Y29uXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxNCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc1LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0OSxcclxuICAgICAgICB0aXRsZTogXCJDb3NtaWMgQ29ybnVjb3BpYVwiLFxyXG4gICAgICAgIHByaWNlOiAxMjAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNi5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNTAsXHJcbiAgICAgICAgdGl0bGU6IFwiVGVua3UgUmVtYXN0ZXJlZFwiLFxyXG4gICAgICAgIHByaWNlOiA1NDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNTEsXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZWQgSG9vZGllXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc4LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0NvbGxlY3Rpb25FbGV2ZW4gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUyLFxyXG4gICAgICAgIHRpdGxlOiBcIkxpbmVuIENyb2NoZXQgVHJpbVwiLFxyXG4gICAgICAgIHByaWNlOiAxOTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nMS5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNTMsXHJcbiAgICAgICAgdGl0bGU6IFwiSGVhcnRsYW5kIEFsYWJhbWFcIixcclxuICAgICAgICBwcmljZTogMzAwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzIuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDU0LFxyXG4gICAgICAgIHRpdGxlOiBcIk1lcm1haWQgUGVuY2lsIE1pZGlcIixcclxuICAgICAgICBwcmljZTogMjUwLFxyXG4gICAgICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvZHVjdC1pbWFnZS9wcm9kdWN0LWltZzMuanBnXCIsXHJcbiAgICAgICAgcXVpY2tWaWV3OiBcIi9pbWFnZXMvcXVpY2stdmlldy1pbWcuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDU1LFxyXG4gICAgICAgIHRpdGxlOiBcIkNyaXNzLWNyb3NzXCIsXHJcbiAgICAgICAgcHJpY2U6IDE2MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc0LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1NixcclxuICAgICAgICB0aXRsZTogXCJWbmVjayBCb2R5Y29uXCIsXHJcbiAgICAgICAgcHJpY2U6IDIxNCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc1LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1NyxcclxuICAgICAgICB0aXRsZTogXCJDb3NtaWMgQ29ybnVjb3BpYVwiLFxyXG4gICAgICAgIHByaWNlOiAxMjAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNi5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNTgsXHJcbiAgICAgICAgdGl0bGU6IFwiVGVua3UgUmVtYXN0ZXJlZFwiLFxyXG4gICAgICAgIHByaWNlOiA1NDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9kdWN0LWltYWdlL3Byb2R1Y3QtaW1nNy5qcGdcIixcclxuICAgICAgICBxdWlja1ZpZXc6IFwiL2ltYWdlcy9xdWljay12aWV3LWltZy5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNTksXHJcbiAgICAgICAgdGl0bGU6IFwiTGluZWQgSG9vZGllXCIsXHJcbiAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2R1Y3QtaW1hZ2UvcHJvZHVjdC1pbWc4LmpwZ1wiLFxyXG4gICAgICAgIHF1aWNrVmlldzogXCIvaW1hZ2VzL3F1aWNrLXZpZXctaW1nLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0NvdmlkMTkgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYwLFxyXG4gICAgICAgIHRpdGxlOiBcIkhhbmQgU2FuaXRpemVyXCIsXHJcbiAgICAgICAgcHJpY2U6IDIwLFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS0yLTE1ODkyMTYwOTMxMTMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktMi0xNTg5MjE2MDkzMTEzLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2MSxcclxuICAgICAgICB0aXRsZTogXCJIZWFydGxhbmQgQWxhYmFtYVwiLFxyXG4gICAgICAgIHByaWNlOiAxOCxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYW1hem9uYXdzLmNvbS9jZDE5LTEtMTU4OTIxNTkyNDYxNC5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hbWF6b25hd3MuY29tL2NkMTktMS0xNTg5MjE1OTI0NjE0LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2MixcclxuICAgICAgICB0aXRsZTogXCJNZWRpY2FsIEdsb3Zlc1wiLFxyXG4gICAgICAgIHByaWNlOiAyNSxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktMy0xNTg5MjE2MTUyMDI2LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTMtMTU4OTIxNjE1MjAyNi5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNjMsXHJcbiAgICAgICAgdGl0bGU6IFwiRHJ1Z3NcIiwgXHJcbiAgICAgICAgcHJpY2U6IDMwLFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vY2QxOS00LTE1ODkyMTYyNDgyMDguanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNC0xNTg5MjE2MjQ4MjA4LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2NCxcclxuICAgICAgICB0aXRsZTogXCJTYWZldHkgR29nZ2xlc1wiLFxyXG4gICAgICAgIHByaWNlOiAzMCxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNS0xNTg5MjE2MzMyMDYwLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTUtMTU4OTIxNjMzMjA2MC5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNjUsXHJcbiAgICAgICAgdGl0bGU6IFwiVmFjY2luZVwiLFxyXG4gICAgICAgIHByaWNlOiA0OSxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NkMTktNi0xNTg5MjE2MzgyOTgxLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTYtMTU4OTIxNjM4Mjk4MS5qcGdcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNHcm9jZXJ5ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiA2NixcclxuICAgICAgICB0aXRsZTogXCJDaGlja2VuIFdpdGggQm9uZVwiLFxyXG4gICAgICAgIHByaWNlOiAyMCxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDQtMTU5MjY1MjM4NzgwMC5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZ3JvY2VyeS1wcm9kdWN0NC0xNTkyNjUyMzg3ODAwLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2NyxcclxuICAgICAgICB0aXRsZTogXCJGcmVzaCBNZWF0XCIsXHJcbiAgICAgICAgcHJpY2U6IDE4LFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDEtMTU5MjY1MTY3ODA0NC5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDEtMTU5MjY1MTY3ODA0NC5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNjgsXHJcbiAgICAgICAgdGl0bGU6IFwiRnJlc2ggQ2hpY2tlblwiLFxyXG4gICAgICAgIHByaWNlOiAyNSxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDItMTU5MjY1MTcyMjk0MC5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZ3JvY2VyeS1wcm9kdWN0Mi0xNTkyNjUxNzIyOTQwLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2OSxcclxuICAgICAgICB0aXRsZTogXCJQb3RhdG9lc1wiLCBcclxuICAgICAgICBwcmljZTogMzAsXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9ncm9jZXJ5LXByb2R1Y3Q2LTE1OTI2NTI0OTMyODguanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDYtMTU5MjY1MjQ5MzI4OC5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNzAsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2Fwc2ljdW1cIixcclxuICAgICAgICBwcmljZTogMzAsXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9ncm9jZXJ5LXByb2R1Y3QzLTE1OTI2NTE3NzAzNzEuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDMtMTU5MjY1MTc3MDM3MS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNzEsXHJcbiAgICAgICAgdGl0bGU6IFwiTGVtb25cIixcclxuICAgICAgICBwcmljZTogNDksXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9ncm9jZXJ5LXByb2R1Y3Q3LTE1OTI2NTI1NzI2MzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2dyb2NlcnktcHJvZHVjdDctMTU5MjY1MjU3MjYzNC5qcGdcIlxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNFbGVjdHJvbmljcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogNzIsXHJcbiAgICAgICAgdGl0bGU6IFwiTWFjYm9vayBBaXJcIixcclxuICAgICAgICBwcmljZTogMTAwMCxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2VsZWN0cm9uaWNzLXByb2R1Y3Q3LTE1OTIyOTUyNDUxNzguanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2VsZWN0cm9uaWNzLXByb2R1Y3Q3LTE1OTIyOTUyNDUxNzguanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDczLFxyXG4gICAgICAgIHRpdGxlOiBcImlQaG9uZSAxMVwiLFxyXG4gICAgICAgIHByaWNlOiA1MDAsXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9lbGVjdHJvbmljcy1wcm9kdWN0Mi0xNTkyMjg3NTI5ODYyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9lbGVjdHJvbmljcy1wcm9kdWN0Mi0xNTkyMjg3NTI5ODYyLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA3NCxcclxuICAgICAgICB0aXRsZTogXCJpTWFjIFByb1wiLFxyXG4gICAgICAgIHByaWNlOiAyNSxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2VsZWN0cm9uaWNzLXByb2R1Y3QzLTE1OTIyODc2ODE3MTIuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2VsZWN0cm9uaWNzLXByb2R1Y3QzLTE1OTIyODc2ODE3MTIuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDc1LFxyXG4gICAgICAgIHRpdGxlOiBcIlNtYXJ0IFdhdGNoXCIsIFxyXG4gICAgICAgIHByaWNlOiAyMzAsXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9lbGVjdHJvbmljcy1wcm9kdWN0Ni0xNTkyMjk1MTU4NzI5LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9lbGVjdHJvbmljcy1wcm9kdWN0Ni0xNTkyMjk1MTU4NzI5LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA3NixcclxuICAgICAgICB0aXRsZTogXCJpUGhvbmUgMTFcIixcclxuICAgICAgICBwcmljZTogNzAwLFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZWxlY3Ryb25pY3MtcHJvZHVjdDQtMTU5MjI5NTA0MzU5OS5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZWxlY3Ryb25pY3MtcHJvZHVjdDQtMTU5MjI5NTA0MzU5OS5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNzcsXHJcbiAgICAgICAgdGl0bGU6IFwiU21hcnR3YXRjaCBXYXRjaHN0cmFwXCIsXHJcbiAgICAgICAgcHJpY2U6IDI5OSxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL1VudGl0bGVkLTEtMTU5MjY2MjgwMjc1Mi5qcGdcIixcclxuICAgICAgICBpbWFnZUhvdmVyOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vVW50aXRsZWQtMS0xNTkyNjYyODAyNzUyLmpwZ1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0c0Z1cm5pdHVyZSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogNzgsXHJcbiAgICAgICAgdGl0bGU6IFwiRGVyaWNrYSBBY2NlbnQgQ2hhaXJcIixcclxuICAgICAgICBwcmljZTogMjIwLFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZnVybml0dXJlLXByb2R1Y3QyLTE1OTI0NTU2MDUwNTQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Z1cm5pdHVyZS1wcm9kdWN0Mi0xNTkyNDU1NjA1MDU0LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA3OSxcclxuICAgICAgICB0aXRsZTogXCJTb2xldHJlbiBPdmVyc2l6ZWQgQ2hhaXJcIixcclxuICAgICAgICBwcmljZTogMzUwLFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZnVybml0dXJlLXByb2R1Y3Q4LTE1OTI0NTU5NjcyNzkuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Z1cm5pdHVyZS1wcm9kdWN0OC0xNTkyNDU1OTY3Mjc5LmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA4MCxcclxuICAgICAgICB0aXRsZTogXCJGbGFpciBDaGFpclwiLFxyXG4gICAgICAgIHByaWNlOiAxMTAsXHJcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFtYXpvbmF3cy5jb20vZnVybml0dXJlLXByb2R1Y3QxLTE1OTI0NTU1MDg4MDYuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYW1hem9uYXdzLmNvbS9mdXJuaXR1cmUtcHJvZHVjdDEtMTU5MjQ1NTUwODgwNi5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogODEsXHJcbiAgICAgICAgdGl0bGU6IFwiRG9yc3RlbiBPdmVyc2l6ZWQgQ2hhaXJcIiwgXHJcbiAgICAgICAgcHJpY2U6IDMzMCxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Z1cm5pdHVyZS1wcm9kdWN0My0xNTkyNDU1NjY4MjQzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9mdXJuaXR1cmUtcHJvZHVjdDMtMTU5MjQ1NTY2ODI0My5qcGdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogODIsXHJcbiAgICAgICAgdGl0bGU6IFwiTGlub24gQmxhaXIgQ2hhaXJcIixcclxuICAgICAgICBwcmljZTogNDUwLFxyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vZnVybml0dXJlLXByb2R1Y3Q0LTE1OTI0NTU3MzMzMzIuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlcjogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Z1cm5pdHVyZS1wcm9kdWN0NC0xNTkyNDU1NzMzMzMyLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA4MyxcclxuICAgICAgICB0aXRsZTogXCJNb2Rlcm4gQWx0IEJsdWUgQXJtIENoYWlyXCIsXHJcbiAgICAgICAgcHJpY2U6IDI5OSxcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2Z1cm5pdHVyZS1wcm9kdWN0Ni0xNTkyNDU1OTA5NTczLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlSG92ZXI6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9mdXJuaXR1cmUtcHJvZHVjdDYtMTU5MjQ1NTkwOTU3My5qcGdcIlxyXG4gICAgfVxyXG5dIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQge1xyXG4gICAgcHJvZHVjdHMsIFxyXG4gICAgcHJvZHVjdHNDb2xsZWN0aW9uU2l4LCBcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvblNldmVuLCBcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvbkVpZ2h0LCBcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvbk5pbmUsIFxyXG4gICAgcHJvZHVjdHNDb2xsZWN0aW9uVGVuLCBcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvbkVsZXZlbixcclxuICAgIHByb2R1Y3RzQ292aWQxOSxcclxuICAgIHByb2R1Y3RzR3JvY2VyeSxcclxuICAgIHByb2R1Y3RzRWxlY3Ryb25pY3MsXHJcbiAgICBwcm9kdWN0c0Z1cm5pdHVyZVxyXG59IGZyb20gJy4uL2pzb24tZGF0YS9wcm9kdWN0cyc7XHJcblxyXG5sZXQgc3RvcmVcclxuXHJcbmltcG9ydCB7IFxyXG4gICAgQUREX1RPX0NBUlQsXHJcbiAgICBSRU1PVkVfSVRFTSxcclxuICAgIFNVQl9RVUFOVElUWSxcclxuICAgIEFERF9RVUFOVElUWSwgXHJcbiAgICBBRERfU0hJUFBJTkcsXHJcbiAgICBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXHJcbiAgICBSRVNFVF9DQVJULFxyXG4gICAgQUREX1RPX0NPTVBBUkUsXHJcbiAgICBSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkVcclxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9hY3Rpb24tbmFtZXMnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXHJcbiAgICBwcm9kdWN0c0NvbGxlY3Rpb25TaXg6IHByb2R1Y3RzQ29sbGVjdGlvblNpeCxcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvblNldmVuOiBwcm9kdWN0c0NvbGxlY3Rpb25TZXZlbixcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvbkVpZ2h0OiBwcm9kdWN0c0NvbGxlY3Rpb25FaWdodCxcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvbk5pbmU6IHByb2R1Y3RzQ29sbGVjdGlvbk5pbmUsXHJcbiAgICBwcm9kdWN0c0NvbGxlY3Rpb25UZW46IHByb2R1Y3RzQ29sbGVjdGlvblRlbixcclxuICAgIHByb2R1Y3RzQ29sbGVjdGlvbkVsZXZlbjogcHJvZHVjdHNDb2xsZWN0aW9uRWxldmVuLFxyXG4gICAgcHJvZHVjdHNDb3ZpZDE5OiBwcm9kdWN0c0NvdmlkMTksXHJcbiAgICBwcm9kdWN0c0dyb2Nlcnk6IHByb2R1Y3RzR3JvY2VyeSxcclxuICAgIHByb2R1Y3RzRWxlY3Ryb25pY3M6IHByb2R1Y3RzRWxlY3Ryb25pY3MsXHJcbiAgICBwcm9kdWN0c0Z1cm5pdHVyZTogcHJvZHVjdHNGdXJuaXR1cmUsXHJcbiAgICBhZGRlZEl0ZW1zOltdLFxyXG4gICAgYWRkZWRJdGVtc1RvQ29tcGFyZTpbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgc2hpcHBpbmc6IDBcclxufVxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICBcclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ0FSVCl7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxyXG4gICAgICAgIHx8IHN0YXRlLnByb2R1Y3RzQ29sbGVjdGlvblNpeC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIHx8IHN0YXRlLnByb2R1Y3RzQ29sbGVjdGlvblNldmVuLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNDb2xsZWN0aW9uRWlnaHQuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0NvbGxlY3Rpb25OaW5lLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNDb2xsZWN0aW9uVGVuLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNDb2xsZWN0aW9uRWxldmVuLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNDb3ZpZDE5LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNHcm9jZXJ5LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNFbGVjdHJvbmljcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIHx8IHN0YXRlLnByb2R1Y3RzRnVybml0dXJlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKXtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ09NUEFSRSl7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbVRvQ29tcGFyZSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNDb2xsZWN0aW9uU2l4LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNDb2xsZWN0aW9uU2V2ZW4uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0NvbGxlY3Rpb25FaWdodC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIHx8IHN0YXRlLnByb2R1Y3RzQ29sbGVjdGlvbk5pbmUuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0NvbGxlY3Rpb25UZW4uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0NvbGxlY3Rpb25FbGV2ZW4uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0NvdmlkMTkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0dyb2NlcnkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICB8fCBzdGF0ZS5wcm9kdWN0c0VsZWN0cm9uaWNzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgfHwgc3RhdGUucHJvZHVjdHNGdXJuaXR1cmUuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICBcclxuICAgICAgICBhZGRlZEl0ZW1Ub0NvbXBhcmUucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zVG9Db21wYXJlOiBbLi4uc3RhdGUuYWRkZWRJdGVtc1RvQ29tcGFyZSwgYWRkZWRJdGVtVG9Db21wYXJlXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSKXtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XHJcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLnByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFKXtcclxuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtc1RvQ29tcGFyZS5maWx0ZXIoaXRlbT0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtc1RvQ29tcGFyZTogbmV3X2l0ZW1zXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbT0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXHJcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgaWYoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKXtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5wcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDZcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaW5pdFN0b3JlID0gKHByZWxvYWRlZFN0YXRlID0gaW5pdGlhbFN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgcmVkdWNlcnMsXHJcbiAgICAgICAgcHJlbG9hZGVkU3RhdGUsXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xyXG4gICAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IGluaXRTdG9yZShwcmVsb2FkZWRTdGF0ZSlcclxuICBcclxuICAgIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxyXG4gICAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICAgIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xyXG4gICAgICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XHJcbiAgICAgICAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXHJcbiAgICAgICAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgc3RvcmVcclxuICAgICAgICBzdG9yZSA9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9zdG9yZVxyXG4gICAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcclxuICAgIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXHJcbiAgXHJcbiAgICByZXR1cm4gX3N0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXHJcbiAgICByZXR1cm4gc3RvcmVcclxufVxyXG4gICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9vbHRpcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==