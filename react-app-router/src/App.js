import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter, Link, Router} from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/profile"}>Profile</Link>
            </nav>


            <div className="App">
                <h1>Welcome to React Router!</h1>
                <Routes>
                    {/* 경로가 / 와 일치하면 Home Component 호출 */}
                    <Route path="/" element={<Home />} />
                    {/* 경로가 /profile 와 일치하면 Profile Component 호출 */}
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;
