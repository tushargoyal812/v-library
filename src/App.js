import "./App.css";
import { Home } from "./pages/home/home";
import {Routes,Route} from 'react-router-dom'
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
