(function() {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 8813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SingleProductPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
;// CONCATENATED MODULE: ./components/SingleProduct.js







const ProductStyles = external_styled_components_default().div.withConfig({
  displayName: "SingleProduct__ProductStyles",
  componentId: "sc-1kapz8w-0"
})(["display:grid;grid-auto-columns:1fr;grid-auto-flow:column;max-width:var(--maxWidth);justify-content:center;align-items:top;gap:2rem;img{width:100%;object-fit:contain;}"]);
const SINGLE_ITEM_QUERY = (external_graphql_tag_default())`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`; // eslint-disable-next-line react/prop-types

function SingleProduct({
  id
}) {
  const {
    data,
    loading,
    error
  } = (0,client_.useQuery)(SINGLE_ITEM_QUERY, {
    variables: {
      id
    }
  });
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
    error: error
  });
  const {
    Product
  } = data;
  console.log(Product);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProductStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["Sick Fits | ", Product.name]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: Product.photo.image.publicUrlTransformed,
      alt: Product.photo.altText
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "details",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: Product.name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: Product.description
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/product/[id].js

 // eslint-disable-next-line react/prop-types

function SingleProductPage({
  query
}) {
  // eslint-disable-next-line react/prop-types
  return /*#__PURE__*/jsx_runtime_.jsx(SingleProduct, {
    id: query.id
  });
}

/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [847], function() { return __webpack_exec__(8813); });
module.exports = __webpack_exports__;

})();