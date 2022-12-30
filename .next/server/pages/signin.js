(function() {
var exports = {};
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 4653:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ useUser; },
/* harmony export */   "z": function() { return /* binding */ CURRENT_USER_QUERY; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/** @format */

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}


/***/ }),

/***/ 7444:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SignInPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
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
// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4653);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
;// CONCATENATED MODULE: ./components/SignIn.js



/* eslint-disable react/jsx-no-bind */






const SIGNIN_MUTATION = (external_graphql_tag_default())`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
function SignIn() {
  const {
    inputs,
    handleChange,
    resetForm
  } = (0,useForm/* default */.Z)({
    email: '',
    password: ''
  });
  const [signin, {
    data,
    loading
  }] = (0,client_.useMutation)(SIGNIN_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    refetchQueries: [{
      query: User/* CURRENT_USER_QUERY */.z
    }]
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    console.log(inputs);
    const res = await signin();
    console.log(res);
    resetForm(); // Send the email and password to the graphqlAPI
  }

  const error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === 'UserAuthenticationWithPasswordFailure' ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Sign Into Your Account"
    }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
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
        children: "Sign In!"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/SignUp.js








const SIGNUP_MUTATION = (external_graphql_tag_default())`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;
function SignUp() {
  const {
    inputs,
    handleChange,
    resetForm
  } = (0,useForm/* default */.Z)({
    email: '',
    name: '',
    password: ''
  });
  const [signup, {
    data,
    loading,
    error
  }] = (0,client_.useMutation)(SIGNUP_MUTATION, {
    variables: inputs // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm(); // Send the email and password to the graphqlAPI
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-bind
    (0,jsx_runtime_.jsxs)(Form/* default */.Z, {
      method: "POST",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Sign Up For an Account"
      }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
        error: error
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
        children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          children: ["Signed up with ", data.createUser.email, " - Please Go Head and Sign in!"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
          htmlFor: "email",
          children: ["Your Name", /*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "text",
            name: "name",
            placeholder: "Your Name",
            autoComplete: "name",
            value: inputs.name,
            onChange: handleChange
          })]
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
          children: "Sign In!"
        })]
      })]
    })
  );
}
;// CONCATENATED MODULE: ./pages/signin.js



/** @format */




const GridStyles = external_styled_components_default().div.withConfig({
  displayName: "signin__GridStyles",
  componentId: "sc-1iz4eat-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:2rem;"]);
function SignInPage() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GridStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SignIn, {}), /*#__PURE__*/jsx_runtime_.jsx(SignUp, {}), /*#__PURE__*/jsx_runtime_.jsx(RequestReset/* default */.Z, {})]
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
var __webpack_exports__ = __webpack_require__.X(0, [847,72,142], function() { return __webpack_exec__(7444); });
module.exports = __webpack_exports__;

})();