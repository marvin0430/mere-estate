import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes path={'/'} element={<Home />} />
            <Routes path={'/sign-in'} element={<SignIn />} />
            <Routes path={'/sign-out'} element={<SignUp />} />
            <Routes path={'/about'} element={<About />} />
            <Routes path={'/profile'} element={<Profile />} />
        </BrowserRouter>
    );
}

export default App;