import React,{Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

//we can only return a single html element, thats why we wrap it in a div element
class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      lastIndex : 0 //creating an index as state for each appoinment
    }
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
          this.setState(
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
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments appointments={this.state.myAppointments}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
