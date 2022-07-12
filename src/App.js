import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


class App extends Component {

  constructor () {
    console.log("making page!")
    super();
    this.state = {
      books: []
    }

  }

  componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(response => response.json())
      .then(books => {
        console.log(books)
        this.setState({
          books: books 
        })
      })
  }

  render () {
    return (
      <div className="App">
        <Header/>
        <Main books = {this.state.books}/>
        <Footer />
      </div>
    );
  }
  
}

export default App;
