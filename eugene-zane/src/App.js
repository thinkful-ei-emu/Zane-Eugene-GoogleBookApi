import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm'
import ListContainer from './ListContainer'

class App extends React.Component {
  
  state={
    books:[],
    searchTerm:null,
    filter:'All',
    printType:'No Filter',
  }

  fetchRepos=(searchTerm)=>{
this.setState()
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then(res=>res.json())
    .then(repos=>this.setState({repos}))

  }
  
  
  render(){
  
  return (
    <div className="App">
      <Header />
      <SearchForm/>
      <ListContainer/>
      
    </div>
  );
}
}
export default App;
