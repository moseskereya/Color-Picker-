import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
class Color extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            backgroundcolor:"#fff"
         }
    }

    colorPick = (color) => {
        this.setState({
            backgroundcolor:color.hex
        })
    }

 render() { 
        return ( 
            <div>
                <SketchPicker
                color={this.state.backgroundcolor}
                onChangeComplete={this.colorPick}
               width="100p%"
               height="300px"
                />
            </div>
         );
    }
}
 
export default Color;
