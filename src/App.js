import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/card-list/card-list';
import './App.css';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      }));
  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  }

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
   
    return (
      <>
        <h1 className="heading">Monsters Rolodex</h1>
        <SearchBox ChangeHandler = {onSearchChange} placeholder='search monsters' className='search-box'/>
        <CardList monsters={monsters} searchString={searchString} />
      </>
    );
  }
}

export default App;
