//START: IMPORTS
import React, {Component} from 'react';
import './customers.css';
//END: IMPORTS

//START: CLASS
class Customers extends Component{
  //start: Constructor Method
  constructor(){
    super();
    //Initialise State Values
    this.state={ 
      customers:[]
    }
  }
  //end: Constructor Method

  //start: Lifecycle Methods
  componentDidMount(){ 
    //runs automatically when component is mounted
    fetch('/api/customers')
    .then(res=>res.json())
    .then(customers =>this.setState({customers},()=>console.log('Customers fetched...', customers)));

  }
  //end: Lifecycle Methods

  //start: Render Method
  render(){
    return (
      <div>
        <h2>Customers</h2>
        <ul>{this.state.customers.map(customer=><li key={customer.id}>{customer.firstName} {customer.lastName}</li>)}</ul>
      </div>
    )
  };
  //end: Render Method
}
//START: CLASS

//START: EXPORTS
export default Customers;
//END: EXPORTS