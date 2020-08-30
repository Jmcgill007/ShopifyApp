module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log('submission', this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", field => {\n      return value => this.setState({\n        [field]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToggle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? 'Disable' : 'Enable';\n    const textStatus = enabled ? 'enabled' : 'disabled';\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Default discount\",\n      description: \"Add a product to Sample App, it will automatically be discounted.\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      sectioned: true\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n      onSubmit: this.handleSubmit\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"FormLayout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n      value: discount,\n      onChange: this.handleChange('discount'),\n      label: \"Discount percentage\",\n      type: \"discount\"\n    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Stack\"], {\n      distribution: \"trailing\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      primary: true,\n      submit: true\n    }, \"Save\")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].AnnotatedSection, {\n      title: \"Price updates\",\n      description: \"Temporarily disable all Sample App price updates\"\n    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"SettingToggle\"], {\n      action: {\n        content: contentStatus,\n        onAction: this.handleToggle\n      },\n      enabled: enabled\n    }, \"This setting is\", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"TextStyle\"], {\n      variation: \"strong\"\n    }, textStatus), \".\"))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWQtbGF5b3V0LmpzPzAxNzciXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImZpZWxkIiwidmFsdWUiLCJyZW5kZXIiLCJjb250ZW50U3RhdHVzIiwidGV4dFN0YXR1cyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQWFBLE1BQU1BLGVBQU4sU0FBOEJDLDRDQUFLLENBQUNDLFNBQXBDLENBQThDO0FBQUE7QUFBQTs7QUFBQSxtQ0FDbEM7QUFDTkMsY0FBUSxFQUFFLEtBREo7QUFFTkMsYUFBTyxFQUFFO0FBRkgsS0FEa0M7O0FBQUEsMENBc0QzQixNQUFNO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixnQkFBUSxFQUFFLEtBQUtHLEtBQUwsQ0FBV0g7QUFEVCxPQUFkO0FBR0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsS0FBS0YsS0FBL0I7QUFDRCxLQTNEeUM7O0FBQUEsMENBNEQxQkcsS0FBRCxJQUFXO0FBQ3hCLGFBQVFDLEtBQUQsSUFBVyxLQUFLTCxRQUFMLENBQWM7QUFBRSxTQUFDSSxLQUFELEdBQVNDO0FBQVgsT0FBZCxDQUFsQjtBQUNELEtBOUR5Qzs7QUFBQSwwQ0ErRDFCLE1BQU07QUFDbkIsV0FBS0wsUUFBTCxDQUFjLENBQUM7QUFBQ0Q7QUFBRCxPQUFELEtBQWU7QUFDM0IsZUFBTztBQUFDQSxpQkFBTyxFQUFFLENBQUNBO0FBQVgsU0FBUDtBQUNELE9BRkQ7QUFHRCxLQW5Fd0M7QUFBQTs7QUFNMUNPLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRVIsY0FBRjtBQUFZQztBQUFaLFFBQXdCLEtBQUtFLEtBQW5DO0FBQ0EsVUFBTU0sYUFBYSxHQUFHUixPQUFPLEdBQUcsU0FBSCxHQUFlLFFBQTVDO0FBQ0EsVUFBTVMsVUFBVSxHQUFHVCxPQUFPLEdBQUcsU0FBSCxHQUFlLFVBQXpDO0FBQ0EsV0FDRSxNQUFDLHFEQUFELFFBQ0UsTUFBQyx1REFBRCxRQUNFLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLFdBQUssRUFBQyxrQkFEUjtBQUVFLGlCQUFXLEVBQUM7QUFGZCxPQUlFLE1BQUMscURBQUQ7QUFBTSxlQUFTO0FBQWYsT0FDRSxNQUFDLHFEQUFEO0FBQU0sY0FBUSxFQUFFLEtBQUtVO0FBQXJCLE9BQ0UsTUFBQywyREFBRCxRQUNFLE1BQUMsMERBQUQ7QUFDRSxXQUFLLEVBQUVYLFFBRFQ7QUFFRSxjQUFRLEVBQUUsS0FBS1ksWUFBTCxDQUFrQixVQUFsQixDQUZaO0FBR0UsV0FBSyxFQUFDLHFCQUhSO0FBSUUsVUFBSSxFQUFDO0FBSlAsTUFERixFQU9FLE1BQUMsc0RBQUQ7QUFBTyxrQkFBWSxFQUFDO0FBQXBCLE9BQ0UsTUFBQyx1REFBRDtBQUFRLGFBQU8sTUFBZjtBQUFnQixZQUFNO0FBQXRCLGNBREYsQ0FQRixDQURGLENBREYsQ0FKRixDQURGLEVBdUJFLE1BQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUNFLFdBQUssRUFBQyxlQURSO0FBRUUsaUJBQVcsRUFBQztBQUZkLE9BSUUsTUFBQyw4REFBRDtBQUNFLFlBQU0sRUFBRTtBQUNOQyxlQUFPLEVBQUVKLGFBREg7QUFFTkssZ0JBQVEsRUFBRSxLQUFLQztBQUZULE9BRFY7QUFLRSxhQUFPLEVBQUVkO0FBTFgsMEJBT2tCLEdBUGxCLEVBUUUsTUFBQywwREFBRDtBQUFXLGVBQVMsRUFBQztBQUFyQixPQUErQlMsVUFBL0IsQ0FSRixNQUpGLENBdkJGLENBREYsQ0FERjtBQTJDRDs7QUFyRHlDOztBQXFFL0JiLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQnV0dG9uLFxuICAgIENhcmQsXG4gICAgRm9ybSxcbiAgICBGb3JtTGF5b3V0LFxuICAgIExheW91dCxcbiAgICBQYWdlLFxuICAgIFNldHRpbmdUb2dnbGUsXG4gICAgU3RhY2ssXG4gICAgVGV4dEZpZWxkLFxuICAgIFRleHRTdHlsZSxcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG4gIFxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGRpc2NvdW50OiAnMTAlJyxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH07XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgZGlzY291bnQsIGVuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/ICdEaXNhYmxlJyA6ICdFbmFibGUnO1xuICAgICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnZW5hYmxlZCcgOiAnZGlzYWJsZWQnO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgICB0aXRsZT1cIkRlZmF1bHQgZGlzY291bnRcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc2NvdW50ZWQuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudCBwZXJjZW50YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvblxuICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIHVwZGF0ZXNcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRlbXBvcmFyaWx5IGRpc2FibGUgYWxsIFNhbXBsZSBBcHAgcHJpY2UgdXBkYXRlc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxuICAgICAgICAgICAgICAgICAgb25BY3Rpb246IHRoaXMuaGFuZGxlVG9nZ2xlLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRoaXMgc2V0dGluZyBpc3snICd9XG4gICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57dGV4dFN0YXR1c308L1RleHRTdHlsZT4uXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvUGFnZT5cbiAgICAgICk7XG4gICAgfVxuICAgIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgfVxuICAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSgoe2VuYWJsZWR9KSA9PiB7XG4gICAgICAgICByZXR1cm4ge2VuYWJsZWQ6ICFlbmFibGVkfVxuICAgICAgIH0pXG4gICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/annotated-layout.js\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });