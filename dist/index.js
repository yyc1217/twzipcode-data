'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _locales = require('./locales');

var _locales2 = _interopRequireDefault(_locales);

var _acceptLanguage = require('accept-language');

var _acceptLanguage2 = _interopRequireDefault(_acceptLanguage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_acceptLanguage2.default.languages(_locales2.default);

/**
 * Read data.
 * @param {string} locale
 */
var of = function of(locale) {
  locale = locale.toLowerCase();
  var counties = require('./' + locale + '/counties');
  var zipcodes = require('./' + locale + '/zipcodes');

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

exports.default = function () {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  locale = _acceptLanguage2.default.get(locale);
  return data(of(locale));
};