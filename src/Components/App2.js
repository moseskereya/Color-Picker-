import React, { Component } from 'react';
import axios from "axios"
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userId:"",
            title:"",
            body:""
         }
    }

    postValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    } 

    Formsubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post(`https://jsonplaceholder.typicode.com/posts`, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    render() { 
        const {userId, body, title} = this.state
        return ( 
            <div>
              <form onSubmit={this.Formsubmit}>
                  <input type="text" name="userId" onChange={this.postValues}
                   value={userId}/><br/>
                  <input type="text" name="title" onChange={this.postValues}
                  value={title}/><br/>
                  <input type="text" name="body" onChange={this.postValues}
                  value={body} /><br/>
                  <button type="submit">submit </button>
              </form>
            </div>
         );
    }
}
 
export default App2;