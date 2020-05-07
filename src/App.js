import React, { Component } from "react";
import axios from "axios";
import CardList from "./components/card-list/CardList";
import Search from "./components/search-box/Search";
import "./App.css";
class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    //console.log(res.data);
    this.setState({ monsters: res.data });
  }
  searchOnchangeHandler = (e) => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Club</h1>
        <Search
          placeholder='search monsters'
          searchOnchangeHandler={this.searchOnchangeHandler}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
