import React, { Component } from 'react';
import {ListBox} from 'primereact/listbox';
class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cars:""
         }
    }

    render() { 
        const cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
        
        return ( 
            <div className="App1">
                <h3>Filtered  car names</h3>
                <ListBox value={this.state.car} filter={true} options={cars} onChange={(e) => this.setState({car: e.value})}/>
            </div>
         );
    }
}
 
export default App1;