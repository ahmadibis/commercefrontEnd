(function() {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 8380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SellPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: ./lib/useForm.js
var useForm = __webpack_require__(8363);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
// EXTERNAL MODULE: ./components/Products.js + 6 modules
var Products = __webpack_require__(8334);
// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(3804);
;// CONCATENATED MODULE: ./components/CreateProduct.js



/** @format */






const CREATE_PRODUCT_MUTATION = (external_graphql_tag_default())`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in from the form? And What types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;
function CreateProduct() {
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,useForm/* default */.Z)({
    image: '',
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes!'
  });
  const [createProduct, {
    loading,
    error,
    data
  }] = (0,client_.useMutation)(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{
      query: Products/* ALL_PRODUCTS_QUERY */.$
    }]
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    onSubmit: async e => {
      e.preventDefault();
      console.log(inputs); // Submit the inputfields to the backend:

      await createProduct();
      clearForm();
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/jsx_runtime_.jsx("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: inputs.name,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/jsx_runtime_.jsx("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "+ Add Product"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/sell.js


/** @format */

function SellPage() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(CreateProduct, {})
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

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,847,558,334,72], function() { return __webpack_exec__(8380); });
module.exports = __webpack_exports__;

})();