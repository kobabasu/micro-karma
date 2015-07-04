'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _sampleHello = require('../sample/Hello');

var _sampleHello2 = _interopRequireDefault(_sampleHello);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe('Hello World', function () {
  it('should render the component', function () {
    var hello = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(_sampleHello2['default'], null));
    var content = _reactAddons2['default'].findDOMNode(hello).textContent;

    expect(content).toContain('ANA GiFT');
  });
});