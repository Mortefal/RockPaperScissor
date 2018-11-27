import React from "react";
import renderer from 'react-test-renderer';
import Digit from "../Digit";

it('renders correctly', () => {
    const tree = renderer
        .create(<Digit/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});