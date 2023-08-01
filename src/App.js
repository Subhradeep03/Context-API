import logo from './logo.svg';
import './App.css';
import Test from './Test';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Test2 from './Test2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path='/test' element={<Test2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
