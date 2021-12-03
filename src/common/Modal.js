import './modal.css'
import React, {useRef } from "react";

const Modal = (props) => {
    var nazwa = 'Zamknij';
    const myRef = useRef(null);

    if(props.message){
        nazwa  = props.message
    }


        function closeButton() {
        const div = document.getElementById('newsletter-sing-button');
        div.classList.add("newsletter-sign-in-hidden");
    }

    return <div id='newsletter-sing-button' className='newsletter-sign-in newsletter-sign-in-hidden'>
        <div >{nazwa}</div>
        <button ref={myRef} onClick={() => closeButton()}>Zamknij</button>
    </div>
}

export default Modal