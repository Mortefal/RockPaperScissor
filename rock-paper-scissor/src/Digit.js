import React from 'react';

class Digit extends React.Component{
    render() {
        return (
            <div>
                <label>{this.props.digit}</label>
            </div>
        );
    }
}
export default Digit;