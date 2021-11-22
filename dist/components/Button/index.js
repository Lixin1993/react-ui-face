"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FullButton = _interopRequireDefault(require("../FullButton"));

require("./index.scss");

import React from "react";
var __jsx = React.createElement;

var Button = function Button(props) {
  var type = props.type;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_FullButton["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "falcon-button ".concat(type),
    style: props.style
  }, props.children || 'btn'));
};

var _default = Button;
exports["default"] = _default;