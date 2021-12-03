import './header.css';
import logo from './logo.png'
import {useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    let counter = 1;
    let randomTextes = [
        'Życia nie można wybrać, ale można z niego coś zrobić.',
        'Ludzie budują za dużo murów, a za mało mostów',
        'To smutne, że głupcy są tacy pewni siebie, a ludzie rozsądni tacy pełni wątpliwości.',
        'Nigdy nie jest za późno, by stać się tym, kim chcemy być.',
        'Mówienie tak bardzo przeszkadza w myśleniu.',
        'Nasze życie jest takim, jakim uczyniły je nasze myśli.'
    ];
    const[text, setText] = useState(randomTextes[0]);

    function logToApp() {
        navigate('/login')
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(counter >= randomTextes.length){
                counter = 0;
            }
            setText(randomTextes[counter]);
            counter = counter + 1;
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return <div className='header'>
        <img className="img-logo" src={logo} alt="logo" />
        <div className='header-title'>
            <div className='title'>AS w IT i wszystko o tym  jak rozpocząć przygodę w świecie IT</div>
            <div className='smart-quote'>{text}</div>
        </div>
        <button  onClick={() => logToApp()}  className='login-button'>Zaloguj się</button>
    </div>
}

export default Header


