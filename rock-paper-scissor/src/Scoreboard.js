import React from 'react';
import Digit from './Digit';

class Scoreboard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {user, computer} = this.props;
        return (
            <div>
                <Digit digit={user}/>
                <Digit digit={computer}/>
            </div>
        );
    }

}
export default Scoreboard;