import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:parseInt(props.age),
        };
    }
    // this method goes inside of the LightSwitch Component

    render() {
        return( 
            
            
               
             <fieldset>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hair}</p>
        
                <button onClick={() => this.setState({ age: this.state.age + 1 })}>Birthday Button for Doe jon</button>
         </fieldset>
        );
    }
}
    
export default PersonCard;