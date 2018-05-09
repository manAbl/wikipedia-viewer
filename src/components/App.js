import React, { Component } from 'react';
import Viewer from './Viewer/viewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      displayedArticle: '',
    };
  this.gettingArticle = this.gettingArticle.bind(this);
  }
  gettingArticle() {
    const {searchQuery} = this.state;

    const API = 'https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm'
    const body = { method: 'GET' };

    const myRequest = new Request(API, body);
      fetch(myRequest)
        .then(response => response.json())
        .then(data => this.setState({ displayedArticle: data }))
  }
  render() {
    return (
     <MainPage searchQuery={this.state.searchQuery} />
    );
  }
}

export default App;
