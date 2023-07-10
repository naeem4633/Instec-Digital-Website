import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-body">
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;