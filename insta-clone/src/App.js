import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    }
  }

  render(){
    // console.log(dummyData)
    return(
    <div className='App'>
       <SearchBar />
       <PostContainer posts={this.state.posts}
    </div>
     
    );
  }
}

export default App