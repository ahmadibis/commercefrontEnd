(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/styles/CartStyles.js

const CartStyles = external_styled_components_default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ var styles_CartStyles = (CartStyles);
;// CONCATENATED MODULE: ./components/styles/CloseButton.js

const CloseButton = external_styled_components_default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
;// CONCATENATED MODULE: ./components/styles/Supreme.js

const Supreme = external_styled_components_default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ var styles_Supreme = (Supreme);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(4849);
// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4653);
;// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted, but they could still be in your cart

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./lib/cartState.js


const LocalStateContext = /*#__PURE__*/(0,external_react_.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!
  // Closed cart by default
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,external_react_.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  });
} // make a custom hook for accessing the cart local state


function useCart() {
  // We use a consumer here to access the local state
  const all = (0,external_react_.useContext)(LocalStateContext);
  return all;
}


// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./components/RemoveFromCart.js


/** @format */



const BigButton = external_styled_components_default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (external_graphql_tag_default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,client_.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id
    },
    update // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },

  });
  return /*#__PURE__*/jsx_runtime_.jsx(BigButton, {
    onClick: removeFromCart,
    disabled: loading,
    type: "button",
    title: "Remove This Item from Cart",
    children: "\xD7"
  });
}
;// CONCATENATED MODULE: external "@stripe/stripe-js"
var stripe_js_namespaceObject = require("@stripe/stripe-js");;
;// CONCATENATED MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_namespaceObject = require("@stripe/react-stripe-js");;
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(2441);
;// CONCATENATED MODULE: ./components/styles/SickButton.js

const SickButton = external_styled_components_default().button.withConfig({
  displayName: "SickButton",
  componentId: "sc-l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ var styles_SickButton = ((/* unused pure expression or super */ null && (SickButton)));
;// CONCATENATED MODULE: ./components/Checkout.js



/* eslint-disable react/jsx-no-bind */











const CheckoutFormStyles = external_styled_components_default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const CREATE_ORDER_MUTATION = (external_graphql_tag_default())`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
const stripeLib = (0,stripe_js_namespaceObject.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const stripe = (0,react_stripe_js_namespaceObject.useStripe)();
  const elements = (0,react_stripe_js_namespaceObject.useElements)();
  const router = (0,client_router.useRouter)();
  const {
    closeCart
  } = useCart();
  const [checkout, {
    error: graphQLError
  }] = (0,client_.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: User/* CURRENT_USER_QUERY */.z
    }]
  });

  async function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    setLoading(true);
    console.log('We gotta do some work..'); // 2. Start the page transition

    external_nprogress_default().start(); // 3. Create the payment method via stripe (Token comes back here if successful)

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(react_stripe_js_namespaceObject.CardElement)
    });
    console.log(paymentMethod); // 4. Handle any errors from stripe

    if (error) {
      setError(error);
      external_nprogress_default().done();
      return; // stops the checkout from happening
    } // 5. Send the token from step 3 to our keystone server, via a custom mutation!


    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    });
    console.log(`Finished with the order!!`);
    console.log(order); // 6. Change the page to view the order

    router.push({
      pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id
      }
    }); // 7. Close the cart

    closeCart(); // 8. turn the loader off

    setLoading(false);
    external_nprogress_default().done();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckoutFormStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_namespaceObject.CardNumberElement, {}), /*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_namespaceObject.CardExpiryElement, {}), /*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_namespaceObject.CardExpiryElement, {})]
  });
}

function Checkout() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_namespaceObject.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/jsx_runtime_.jsx(CheckoutForm, {})
  });
}


;// CONCATENATED MODULE: ./components/Cart.js












const CartItemStyles = external_styled_components_default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const {
    product
  } = cartItem;
  if (!product) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CartItemStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: product.name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [(0,formatMoney/* default */.Z)(product.price * cartItem.quantity), "-", /*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,formatMoney/* default */.Z)(product.price), " each"]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(RemoveFromCart, {
      id: cartItem.id
    })]
  });
}

function Cart() {
  const me = (0,User/* useUser */.a)();
  const {
    cartOpen,
    closeCart
  } = useCart();
  if (!me) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_CartStyles, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Supreme, {
        children: [me.name, "'s Cart"]
      }), /*#__PURE__*/jsx_runtime_.jsx(styles_CloseButton, {
        onClick: closeCart,
        children: "\xD7"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/jsx_runtime_.jsx(CartItem, {
        cartItem: cartItem
      }, cartItem.id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: (0,formatMoney/* default */.Z)(calcTotalPrice(me.cart))
      }), /*#__PURE__*/jsx_runtime_.jsx(Checkout, {})]
    })]
  });
}
;// CONCATENATED MODULE: external "react-transition-group"
var external_react_transition_group_namespaceObject = require("react-transition-group");;
;// CONCATENATED MODULE: ./components/CartCount.js


/* eslint-disable react/prop-types */


const Dot = external_styled_components_default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-0"
})(["background:var(--red);color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
const AnimationStyles = external_styled_components_default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-1"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(AnimationStyles, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_namespaceObject.TransitionGroup, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_namespaceObject.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Dot, {
          children: count
        })
      }, count)
    })
  });
}
;// CONCATENATED MODULE: ./components/SignOut.js




const SIGN_OUT_MUTATION = (external_graphql_tag_default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,client_.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: User/* CURRENT_USER_QUERY */.z
    }]
  });
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  });
}
;// CONCATENATED MODULE: ./components/styles/NavStyles.js

const NavStyles = external_styled_components_default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ var styles_NavStyles = (NavStyles);
;// CONCATENATED MODULE: ./components/Nav.js




/** @format */






function Nav() {
  const user = (0,User/* useUser */.a)();
  const {
    openCart
  } = useCart();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_NavStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/products",
      children: "Products"
    }), user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/sell",
        children: "Sell"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/orders",
        children: "Orders"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/account",
        children: "Account"
      }), /*#__PURE__*/jsx_runtime_.jsx(SignOut, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        type: "button",
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/jsx_runtime_.jsx(CartCount, {
          count: user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)
        })]
      })]
    }), !user && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signin",
        children: "Sign In"
      })
    })]
  });
}
;// CONCATENATED MODULE: external "downshift"
var external_downshift_namespaceObject = require("downshift");;
;// CONCATENATED MODULE: external "lodash.debounce"
var external_lodash_debounce_namespaceObject = require("lodash.debounce");;
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_namespaceObject);
;// CONCATENATED MODULE: ./components/styles/DropDown.js

const DropDown = external_styled_components_default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGray);"]);
const DropDownItem = external_styled_components_default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid var(--lightGray);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,external_styled_components_.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = external_styled_components_default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

;// CONCATENATED MODULE: ./components/Search.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */






const SEARCH_PRODUCTS_QUERY = (external_graphql_tag_default())`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Search() {
  const router = (0,client_router.useRouter)();
  const [findItems, {
    loading,
    data,
    error
  }] = (0,client_.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  });
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = external_lodash_debounce_default()(findItems, 350);
  (0,external_downshift_namespaceObject.resetIdCounter)();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = (0,external_downshift_namespaceObject.useCombobox)({
    items,

    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },

    onSelectedItemChange({
      selectedItem
    }) {
      router.push({
        pathname: `/product/${selectedItem.id}`
      });
    },

    itemToString: item => (item === null || item === void 0 ? void 0 : item.name) || ''
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an Item',
        id: 'search',
        className: loading ? 'loading' : ''
      })))
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map((item, index) => /*#__PURE__*/(0,external_react_.createElement)(DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
        item,
        index
      })), {}, {
        key: item.id,
        highlighted: index === highlightedIndex
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: item.photo.image.publicUrlTransformed,
        alt: item.name,
        width: "50"
      }), item.name)), isOpen && !items.length && !loading && /*#__PURE__*/(0,jsx_runtime_.jsxs)(DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      })]
    }))]
  });
}
;// CONCATENATED MODULE: ./components/Header.js



/** @format */





const Logo = external_styled_components_default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;background:red;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = external_styled_components_default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderStyles, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bar",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Sick fits"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-bar",
      children: /*#__PURE__*/jsx_runtime_.jsx(Search, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Cart, {})]
  });
}
;// CONCATENATED MODULE: ./components/Page.js



/** @format */


const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:62.5%;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',}"]);
const InnerStyles = external_styled_components_default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children,
  cool
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(InnerStyles, {
      children: children
    })]
  });
}
;// CONCATENATED MODULE: external "@apollo/link-error"
var link_error_namespaceObject = require("@apollo/link-error");;
;// CONCATENATED MODULE: external "@apollo/client/react/ssr"
var ssr_namespaceObject = require("@apollo/client/react/ssr");;
;// CONCATENATED MODULE: external "apollo-upload-client"
var external_apollo_upload_client_namespaceObject = require("apollo-upload-client");;
;// CONCATENATED MODULE: external "next-with-apollo"
var external_next_with_apollo_namespaceObject = require("next-with-apollo");;
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_namespaceObject);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4985);
// EXTERNAL MODULE: ./components/Pagination.js + 1 modules
var Pagination = __webpack_require__(4912);
;// CONCATENATED MODULE: ./lib/paginationField.js

function paginationField() {
  return {
    keyArgs: false,

    // tells apollo we will take care of everything
    read(existing = [], {
      args,
      cache
    }) {
      var _data$_allProductsMet;

      console.log({
        existing,
        args,
        cache
      });
      const {
        skip,
        first
      } = args; // Read the number of items on the page from the cache

      const data = cache.readQuery({
        query: Pagination/* PAGINATION_QUERY */.V
      });
      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first); // Check if we have existing items

      const items = existing.slice(skip, skip + first).filter(x => x); // If
      // There are items
      // AND there aren't enough items to satisfy how many were requested
      // AND we are on the last page
      // THEN JUST SEND IT

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      } // If there are items, just reutrn them from the cache, and we don't need to go to the network


      if (items.length) {
        console.log(`There are ${items.length} items in the cache! Gonna send them to apollo`);
        return items;
      }

      return false; // fallback to network
      // First thing it does it asks the read function for those items.
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here, (network request)
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip,
        first
      } = args; // This runs when the Apollo client comes back from the network with our product

      console.log(`MErging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : []; // eslint-disable-next-line no-plusplus

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged); // Finally we return the merged items from the cache,

      return merged;
    }

  };
}
;// CONCATENATED MODULE: ./lib/withData.js
/** @format */






 // handling the erros

function createClient({
  headers,
  initialState
}) {
  return new client_.ApolloClient({
    link: client_.ApolloLink.from([(0,link_error_namespaceObject.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,external_apollo_upload_client_namespaceObject.createUploadLink)({
      uri:  false ? 0 : config/* prodEndpoint */.W,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new client_.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: paginationField()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient, {
  getDataFromTree: ssr_namespaceObject.getDataFromTree
}));
;// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @format */



 // eslint-disable-next-line import/order




router_default().events.on('routeChangeStart', () => external_nprogress_default().start());
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done()); // eslint-disable-next-line react/prop-types

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/jsx_runtime_.jsx(CartStateProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Page, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
      })
    })
  });
} // tell nextjs to fetch all queries in all children component
// boiler plate


MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  } // gives us our query variable at page level /products/2


  pageProps.query = ctx.query;
  return {
    pageProps
  };
}; // wrapped our whole app with the provider
// so it can hand over our data to all components around
// we then have to export our app with the config of apollo wrapped around our app


/* harmony default export */ var _app = (withData(MyApp));

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,847,558,912], function() { return __webpack_exec__(2097); });
module.exports = __webpack_exports__;

})();