
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import IndexPage from './pages/IndexPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}></Route>
        <Route path="/Login" element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
