import './App.scss';
import axios from 'axios';
import Navbar from './NavBar';
import PostsDisplay from './PostsDisplay';
import SideOptions from './SideOptions';
import { useState, useEffect } from 'react';

function App() {
  const [allPosts, setAllPosts] = useState(null)
    useEffect(() => {
        (async()=>{
            const results = await axios.get('http://localhost:5000').then(
                (data)=>{setAllPosts(data.data)})
        })()
    }, []);
  return (
    <div className="App">
      <Navbar/>
      <div className="contents">
      <PostsDisplay posts = {allPosts}/>
      <SideOptions/>
      </div>
    </div>
  );
}

export default App;
