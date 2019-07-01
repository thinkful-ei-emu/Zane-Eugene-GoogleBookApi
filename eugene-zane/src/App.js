import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm'
import ListContainer from './ListContainer'

class App extends React.Component {
  
  state={
    books:[],
    searchTerm:null,
    error: null,
    query: {},
    filter:'All',
    printType:'No Filter',
  }

  // https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm

  fetchRepos=()=>{
    const BASE_URL='https://www.googleapis.com/books/v1/volumes?'
    fetch(`${BASE_URL}q=${this.state.query}&Key=AIzaSyDiOsLZg3O58Hd2y8L0bvuuUv-h7Gzszuk`)
    .then(res=> {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then(data => {
      const bookResults = data.items.map(item => {
        let book = {}
        book.author = item.volumeInfo.authors
        book.title = item.volumeInfo.title
        book.description = item.volumeInfo.description
        book.price=!item.saleInfo.listPrice?'':item.saleInfo.listPrice.amount
        book.image=!item.volumeInfo.imageLinks?'':item.volumeInfo.imageLinks.thumbnail
        return book
      })
      this.setState({
        books: bookResults,
        error: null
      })
      console.log(this.state.books)
    })
    .catch(err => this.setState({error: err.message}))
  }

  handleSubmit=(event)=> {
    console.log('Handle Submit Ran')
    this.setState({query: document.getElementById('#searchBar').value})
    this.fetchRepos();

  }
  
  
  
  render(){
  
  return (
    <div className="App">
      <Header />
      <SearchForm handleSubmit={this.handleSubmit}/>
      <ListContainer books={this.state.books}/>
    </div>
  );
}
}
export default App;
