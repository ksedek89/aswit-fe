import { useState} from 'react';
import '../../css/login/login.css'
import logo from '../../common/logo.png'



const Login = () =>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function logToApp() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify({ login: login, password: password})
        };
        fetch('/aswit/api/login', requestOptions)
            .then(async response => {
                console.log('fsdf');
            })
    }

    return <div className={"loginBox"}>
        <div className={'logo'}>
            <img className="img-logo" src={logo} alt="logo" />
        </div>
        <div className={'login-label'}>Logowanie użytkownika</div>
        <input value={login} onInput={e => setLogin(e.target.value)} className={'login-input'} type='text' placeholder={'Login'}/>
        <input type='password' value={password} onInput={e => setPassword(e.target.value)}  className={'password-input'}  placeholder={'Hasło'}/>
        <button className={'log-button'} onClick={() => logToApp()}>Zaloguj się</button>
        <div className='login-link-div'>
            <a className='login-link' href='/'>Nie pamiętam hasła</a>
            &nbsp;/&nbsp;
            <a className='login-link' href='/'>Zarejestruj się</a>
        </div>
    </div>
}

export default  Login

/*
fetch('/aswit/api/login/get-user')
    .then(response => response.json())
    .then(json => console.log(json));*/
