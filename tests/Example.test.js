import React from 'react';
import { Example } from "../src/index";
import renderer from 'react-test-renderer';

const emptyFn = () => {};

it('renders correctely', () => {
    const component = renderer.create(
        <Example
            label="Label"
            className="my-class-name"
            onClick={emptyFn}
        />
    );
    
    expect(component.toJSON()).toMatchSnapshot();
});