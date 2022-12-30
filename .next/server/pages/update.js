(function() {
var exports = {};
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 5768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ UpdatePage; }
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
// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(3804);
;// CONCATENATED MODULE: ./components/UpdateProduct.js



/* eslint-disable react/prop-types */





const SINGLE_PRODUCT_QUERY = (external_graphql_tag_default())`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = (external_graphql_tag_default())`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;
function UpdateProduct({
  id
}) {
  // 1. We need to get the existing product
  const {
    data,
    error,
    loading
  } = (0,client_.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  }); // 2. We need to get the mutation to update the product

  const [updateProduct, {
    data: updateData,
    error: updateError,
    loading: updateLoading
  }] = (0,client_.useMutation)(UPDATE_PRODUCT_MUTATION); // 2.5 Create some state for the form inputs:

  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,useForm/* default */.Z)(data === null || data === void 0 ? void 0 : data.Product);
  console.log(inputs);
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "loading..."
  }); // 3. We need the form to handle the updates

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    onSubmit: async e => {
      e.preventDefault();
      const res = await updateProduct({
        variables: {
          id,
          name: inputs.name,
          description: inputs.description,
          price: inputs.price
        }
      }).catch(console.error);
      console.log(res); // Submit the inputfields to the backend:
      // TODO: Handle Submit!!!
      // const res = await createProduct();
      // clearForm();
      // // Go to that product's page!
      // Router.push({
      //   pathname: `/product/${res.data.createProduct.id}`,
      // });
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error || updateError
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
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
        children: "Update Product"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/update.js


/* eslint-disable react/prop-types */

function UpdatePage({
  query
}) {
  console.log(query);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(UpdateProduct, {
      id: query.id
    })
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
var __webpack_exports__ = __webpack_require__.X(0, [847,72], function() { return __webpack_exec__(5768); });
module.exports = __webpack_exports__;

})();