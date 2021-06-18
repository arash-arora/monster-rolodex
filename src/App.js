import {CardList} from "./components/card-list/card-list.component"
import './App.css';
import React, {Component} from "react"
import { SearchBox } from "./components/search/searchField.component";
 
class App extends Component {
  // declaring empty array 
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this) //binding this keyword to handleChange
  }
  

  //fetch api
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // returns the response in json format
  .then(users => this.setState({monster: users}))
} //when react puts our component o n the page, it renders it onto the DOM for the first time and call whatever block of code we write inside this function

handleChange = (event) => { //bind the this keyword automatically
    return this.setState({searchField: event.target.value})
}

// handleClick() {
//   console.log("target");
// }

// rendering
  render() {
    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase()) //includes method just check if the passed string is contained in the string, where the method is called
    })
    return ( 
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder="search monsters" 
         handleChange={this.handleChange} />
         {/* <button onClick={this.handleClick} />  */}
        <CardList name = {filteredMonsters} />
      </div>
    )
  };
}

export default App;
