import '../css/work-card/workCard.css'
import {useState} from "react";
import kartaPracy from '../img/karta_pracy.png'
import logoBezTla from '../img/logo_bez_tla.png'


const WorkCard = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    return(
        <div className='card'>
            <div className='title'>
                {props.mainTitle}
            </div>
            <div className='subtitle'>
                {props.subtitle}
            </div>
            <div className='signInLabel'>
                {props.signInLabel}
            </div>
            <div className='input-graphics'>
                <div className='inputs'>
                    <input  onInput={e => setName(e.target.value)}  className='single-input' value={name}  type='text' placeholder='Imię'/>
                    <input  onInput={e => setEmail(e.target.value)}  className='single-input' value={email}  type='text' placeholder='E-mail'/>
                    <div className='agreed'>* Zgoda na otrzymywanie maili od AS w IT</div>
                    <div className="boxes">
                        <input className='custom-checkbox' type="checkbox" id="box-1"/>
                        <label htmlFor="box-1">Pobierając kartę pracy, zapisujesz się do newslettera i wyrażasz zgodę na przesyłanie Ci informacji o nowościach w AS w IT.
                            <br/>Zgodę będziesz mogła w każdej chwili wycofać a szczegóły związane z przetwarzaniem danych osobowych w polityce prywatności.</label>
                    </div>
                    <button className='download-button'>{props.buttonName}</button>


                </div>
                <img className='work-car-img' src={kartaPracy}/>
            </div>
            <div className='logo-bez-tla'>
                <img className='logo-bez-tla-img' src={logoBezTla}/>
            </div>



        </div>
    )
}

export default WorkCard