import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/Login'
import Dashboard from './Dashboard'
import AboutMe from "./about-me/AboutMe";
import Podcast from "./podcast/Podcast";

const App = () =>
    <BrowserRouter>
        <div className='wrapper'>
            <Routes>
                <Route path="/"  element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/o-mnie" element={<AboutMe/>}/>
                <Route path="/podcast" element={<Podcast/>}/>
            </Routes>
        </div>
    </BrowserRouter>

export default App;