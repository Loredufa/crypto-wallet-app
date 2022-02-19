
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Favorite from './components/Favorite';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
    <Route path= '/' element={<Home/>} />
    <Route path= '/favorite' element={<Favorite/>} />
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
