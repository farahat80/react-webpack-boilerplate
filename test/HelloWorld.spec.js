import React from 'react';
import HelloWorld from '../src/js/HelloWorld';

describe('Hello World Component', () => {
  const wrapper = shallow(<HelloWorld />);

  it('should render a <p> tag', () => {
    expect(wrapper.contains(<p>Hello World Component.</p>)).to.equal(true);
  });
});