import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Hello from '../sample/js/Hello'

describe("Hello World", () => {
  it("should render the component", () => {

    let hello = TestUtils.renderIntoDocument(<Hello/>);

    let content = ReactDOM.findDOMNode(hello).textContent;

    expect(content).toContain("Hello World");
  });
});
