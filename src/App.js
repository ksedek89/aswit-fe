import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './js/login/Login'
import Dashboard from './Dashboard'
import Navigation from './Navigation'

const App = () =>
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/"  element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    </BrowserRouter>

export default App;