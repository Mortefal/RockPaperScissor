import Header from '../Header';
import React from "react";
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<Header/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});