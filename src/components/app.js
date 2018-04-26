import React, { Component } from 'react';
import { connect } from 'react-redux'

import BookList from '../containers/book-list'

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>

    );
  }
}

function mapStateToProps(state) {
  //the object returned below will show up as props inside BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList)
