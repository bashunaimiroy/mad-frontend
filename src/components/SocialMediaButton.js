import React, { Component } from 'react';
import FontAwesome from "react-fontawesome"

class SocialMediaButton extends Component {
    render() {
        return (<div className="SocialMediaButton">
            <a href={this.props.url}>
                {/* {this.props.name} */}
                <FontAwesome size="3x" name={this.props.name} />
            </a>
            </div>)
            
    }
}
export default SocialMediaButton