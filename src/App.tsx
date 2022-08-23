import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Rectangle from './components/ViewRectangle/Rectangle';
import Post from './components/Post/Post';
import PostContainer from './components/PostContainer/PostContainer';

const App: React.FC = () => {
  return (
  <div className='App'>
    <Header />
    <Rectangle />
    <Post author='' publishedAt='' title='' />
  </div>
  );
}

export default App;