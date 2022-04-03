import './App.scss';
import Navbar from './NavBar';
import PostsDisplay from './PostsDisplay';
import SideOptions from './SideOptions';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="contents">
      <PostsDisplay/>
      <SideOptions/>
      </div>
    </div>
  );
}

export default App;
