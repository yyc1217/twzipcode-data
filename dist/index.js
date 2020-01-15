"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _locales = _interopRequireDefault(require("./locales"));

var _acceptLanguage = _interopRequireDefault(require("accept-language"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_acceptLanguage["default"].languages(_locales["default"]);
/**
 * Read data.
 * @param {string} locale
 */


var of = function of(locale) {
  locale = locale.toLowerCase();

  var counties = require("./".concat(locale, "/counties"));

  var zipcodes = require("./".concat(locale, "/zipcodes"));

  return {
    counties: counties,
    zipcodes: zipcodes
  };
};
/**
 * Construct response format.
 * @param {Object} options
 */


var data = function data(_ref) {
  var counties = _ref.counties,
      zipcodes = _ref.zipcodes,
      groupByCounty = _ref.groupByCounty,
      keyById = _ref.keyById;
  return {
    counties: counties,
    zipcodes: zipcodes
  };
};

var _default = function _default() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
  locale = _acceptLanguage["default"].get(locale);
  return data(of(locale));
};

exports["default"] = _default;