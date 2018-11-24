import React from 'react';
import './Button.css';
class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
                <button className="Round-button" value={this.state.name} onClick={(e) => this.handleClick(e)}>{this.state.name}</button>
            </div>
        );
    }

}
export default Button;