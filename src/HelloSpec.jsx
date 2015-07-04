import React from 'react/addons'
import Hello from '../sample/Hello'

var TestUtils = React.addons.TestUtils;

describe("Hello World", () => {
  it("should render the component", () => {

    let hello = TestUtils.renderIntoDocument(<Hello/>);

    let content = React.findDOMNode(hello).textContent;

    expect(content).toContain("ANA GiFT");
  });
});
