import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './components/Products/Products'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/products/:proId" element={<Products />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
