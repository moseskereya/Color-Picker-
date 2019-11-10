import React, { Component } from 'react';
class Video extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            defaultSerch: "defaultName"
         }
    }
HandleSearch = (event) => {
    this.setState({
        defaultSerch:event.target.value
    })
}
HandleSubmit = (event) =>{
event.preventDefault();
this.props.HandleSubmit(this.state.defaultSerch)
}
    render() { 
        return ( 
            <div>
                <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="video">Video search</label><br/>
                    <input type="" name="video-search" 
                    onChange={this.HandleSearch}
                    value={this.state.defaultSerch}/>
                </form>
            </div>
         );
    }
}
 
export default Video;