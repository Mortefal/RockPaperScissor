import React from "react";
import renderer from 'react-test-renderer';
import Digit from "../Components/Digit";

it('renders correctly', () => {
    const tree = renderer
        .create(<Digit/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});