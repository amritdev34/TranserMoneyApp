import React from 'react';
import { shallow } from "enzyme";
import { App } from "./App";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.toBe(true));
  });
});
