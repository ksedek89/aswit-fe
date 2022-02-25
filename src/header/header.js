import '../css/header/header.css'
import logo from '../img/logo_bez_tla.png'
import fb from '../img/fb.png'
import instagram from '../img/instagram.png'
import spotify from '../img/spotify.png'
import {useNavigate} from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    return(
        <div  className='header'>
            <img onClick={() => navigate('/')}  className='logo' src={logo}/>
            <a className='newsletter' href="#">Newsletter</a>
            <div className='medias'>
                <img className='media' src={instagram}/>
                <img className='media' src={fb}/>
                <img className='media' src={spotify}/>
            </div>
            <button className='find-button' >Szukaj</button>
        </div>
    )
}

export default Header