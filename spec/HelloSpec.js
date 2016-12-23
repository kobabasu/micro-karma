'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _Hello = require('../sample/js/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Hello World", function () {
  it("should render the component", function () {

    var hello = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_Hello2.default, null));

    var content = _reactDom2.default.findDOMNode(hello).textContent;

    expect(content).toContain("Hello World");
  });
});