import './newsletter.css'
import Modal from "../common/Modal";
import React, { useState } from 'react';

const NewsletterTile = (props) => {
    const [modalMessage, setModalMessage] = useState('');

    function signToNewsLetter() {
        setModalMessage('Pomyślnie zarejestrowano w newsleterze !');
        const div = document.getElementById('newsletter-sing-button');
        div.classList.remove("newsletter-sign-in-hidden");
        //todo logika
        //todo dodanie klasy
    }


    return <div  className={"tile " +  (props.classname || "")}>
        <div className={'newsletter-content'}>
            <div className={'newsletter-title'}>Zapisz się do newslettera ASWIT</div>
            <hr className={"horizontal-line"}/>
            <div className={'newsletter-email'}>
                <label className={'newsletter-email-label'} for='email'>Adres e-mail: </label>
                <input className={'newsletter-email-input'} type='email' placeholder='e-mail' name='email'></input>
            </div>
            <button onClick={() => signToNewsLetter()} className='newsletter-button'>Zapisz się</button>
            <Modal message={modalMessage}/>
        </div>

    </div>
}

export default NewsletterTile