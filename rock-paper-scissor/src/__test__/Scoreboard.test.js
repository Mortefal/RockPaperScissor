import React from "react";
import renderer from 'react-test-renderer';
import Scoreboard from "../Scoreboard";

it('renders correctly', () => {
    const tree = renderer
        .create(<Scoreboard/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});