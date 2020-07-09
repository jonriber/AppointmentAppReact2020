import React,{Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

import {without} from 'lodash';

//we can only return a single html element, thats why we wrap it in a div element
class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay:false,
      lastIndex : 0 //creating an index as state for each appoinment
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);// binding deleteAppointment so we can use this inside the method, referring to the method itself
    this.toggleForm = this.toggleForm.bind(this); //another binding for method
  };

  toggleForm() {
    this.setState(
      { formDisplay: !this.state.formDisplay }
    )
  };
  //created this method to delete something from the array
  //it gets a appointment as an argument (itemId)
  deleteAppointment(apt) {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts,apt); //updating tempApts using without method

    //now setting a new state with the updated version of tempApts =)
    this.setState({
      myAppointments:tempApts
    });
  }
  componentDidMount() {
    fetch('./data.json') //get data from somewhere
      .then(response => response.json()) //transform this response in json file
        .then(result => { //generate apts
          const apts = result.map(item => {
            item.aptId = this.state.lastIndex; // created an appoinment id
            this.setState({lastIndex:this.state.lastIndex+1}); //setState to change the state as we go through the array of objects
            return item;
          })
          this.setState( //we have to use setState because we can´t assign a value directly to state as a usual variable
          { myAppointments: apts }
        )
        });
        
  }

  render() {
    // //expression to list elements inside component
    // const listItems = this.state.myAppointments.map(item => (
    //   <div>{item.petName}</div>

    // ));

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments formDisplay = {this.state.formDisplay} toggleForm={this.toggleForm}/>
                <SearchAppointments />
                <ListAppointments appointments={this.state.myAppointments}
                deleteAppointment={this.deleteAppointment}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
