
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Pagge404';
import Post from './pages/Post';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/videos/:id' element={<Post />} />
        <Route path="*" element={<Page404>No existe</Page404>} />
      </Routes>
    </Router>
  )
}

export default App;
