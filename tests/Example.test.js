import React from 'react';
import { Example } from "../src/index";
import renderer from 'react-test-renderer';

const emptyFn = () => {};

it('renders correctely', () => {
    const component = renderer.create(
        <Example
            label="Example"
            className="example-btn"
            onClick={emptyFn}
        />
    );
    
    expect(component.toJSON()).toMatchSnapshot();
});