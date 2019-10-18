import React from 'react'

// Setting up PropTypes for faster debuging
import PropTypes from 'prop-types'
import {Book} from './Book'
import {Hiring} from './Hiring'
import {NotHiring} from './NotHiring'


class Library extends React.Component {
  static defaultProps = {
    books: [
      {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": "1000", "release": 1997}
    ]
  }
  // Add constructor for props to set up state
    // super (props) will create new instance of the class for state
    // then state will be a object that contain several keys that similar to props
    // constructor (props){
    // super(props)
    // this.state = {
    //   open: false
    // }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  // }
  // How to change state
  // using setState
  // this.setState({....})
  // call back function ; open: !this.state.open
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data:[],
    loading: false
  }
  // fetching data from rest Api
  componentDidMount(){
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
  }
  componentDidUpdate(){
    console.log("the component just updated")
  }

    toggleOpenClosed = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
    toggleFreeBookmark = () => {
      this.setState(prevState => ({
        freeBookmark: !prevState.freeBookmark
      }))
    }
  render(){
    //const books = this.props.books
    // refactoring the syntax
    console.log(this.state)
    const {books} = this.props
    return (
    <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
            ? "loading..."
            : <div>
                {this.state.data.map(product => {
                return(
                  <div key = {product.id}>
                    <h3>Library Product of the week!</h3>
                    <h4>{product.name}</h4>
                    <img alt={product.name} src={product.image} height={200}/>
                  </div>
                )
                })}
              </div>
          }
        <h1>Today The Library is  {this.state.open ? 'open!': 'closed!'} </h1>
        <button id="b1" onClick = {this.toggleOpenClosed}>Change Open/Closed</button>

        <h3>Free Bookmark Today: {this.state.freeBookmark ? 'yes!' : 'no!'}</h3>
        <button id="b1" onClick = {this.toggleFreeBookmark}>Free Bookmark</button>

          {books.map(
            // set up the key i for a unique id for each book
            (book, i) =>
                <Book
                      key={i}
                      title={book.title}
                      author={book.author}
                      pages={book.pages}
                      release={book.release}
                      freeBookmark={this.state.freeBookmark}
                      />

      )}
    </div>
  )
}
}
Library.propTypes = {
  books: PropTypes.array
}
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  release: PropTypes.number,
  freeBookmark: PropTypes.bool

}
export default Library
