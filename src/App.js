import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/partials/NavBar';
import Blog from './components/routes/Blog';
import Blogs from './components/routes/Blogs';
import EditBlog from './components/routes/EditBlog';
import Home from './components/routes/Home';
import NewBlog from './components/routes/NewBlog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route 
           path='/'
           element={<Home />}
          />
          <Route 
           path='/blogs'
           element={<Blogs />}
          />
          <Route 
           path='/blogs/:id'
           element={<Blog />}
          />
          <Route 
           path='/blogs/new'
           element={<NewBlog />}
          />
          <Route 
           path='/blogs/:id/edit'
           element={<EditBlog />}
          />
        </Routes>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
