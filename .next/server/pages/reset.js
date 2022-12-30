(function() {
var exports = {};
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 4540:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ResetPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/RequestReset.js
var RequestReset = __webpack_require__(5142);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(3804);
// EXTERNAL MODULE: ./lib/useForm.js
var useForm = __webpack_require__(8363);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
;// CONCATENATED MODULE: ./components/Reset.js



/* eslint-disable react/jsx-no-bind */

/* eslint-disable react/prop-types */





const RESET_MUTATION = (external_graphql_tag_default())`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;
function Reset({
  token
}) {
  var _data$redeemUserPassw;

  const {
    inputs,
    handleChange,
    resetForm
  } = (0,useForm/* default */.Z)({
    email: '',
    password: '',
    token
  });
  const [reset, {
    data,
    loading,
    error
  }] = (0,client_.useMutation)(RESET_MUTATION, {
    variables: inputs
  });
  const successfulError = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;
  console.log(error);

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    console.log(inputs);
    const res = await reset().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm(); // Send the email and password to the graphqlAPI
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Reset Your Password"
    }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error || successfulError
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Success! You can Now sign in"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Request Reset!"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/reset.js



/* eslint-disable react/prop-types */


function ResetPage({
  query
}) {
  if (!(query !== null && query !== void 0 && query.token)) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Sorry you must supply a token"
      }), /*#__PURE__*/jsx_runtime_.jsx(RequestReset/* default */.Z, {})]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "RESET YOUR PASSWORD"
    }), /*#__PURE__*/jsx_runtime_.jsx(Reset, {
      token: query.token
    })]
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
var __webpack_exports__ = __webpack_require__.X(0, [847,72,142], function() { return __webpack_exec__(4540); });
module.exports = __webpack_exports__;

})();