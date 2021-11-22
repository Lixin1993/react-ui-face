"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;
var _default = {
  get Button() {
    return require('./Button')["default"];
  },

  get FullButton() {
    return require('./FullButton')["default"];
  } // inject point


};
exports["default"] = _default;