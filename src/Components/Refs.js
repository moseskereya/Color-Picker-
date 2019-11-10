import React, { Component } from 'react';
class Refs extends Component {
    constructor(props) {
        super(props);
       this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    clickHandlder  = () =>{
        alert(this.inputRef.current.value)
    }
    render() { 
        return ( 
            <div>
                <input type="" name="" 
                ref ={this.inputRef}/>
                <button onClick={this.clickHandlder}>Click</button>
            </div>
         );
    }
}
 
export default Refs;