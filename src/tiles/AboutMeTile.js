import './about-me.css'
import photo from '../img/about-me.png'
import {useNavigate} from 'react-router-dom';

const AboutMeTile = (props) => {
    const navigate = useNavigate();

    function goToAboutMe() {
        navigate('/o-mnie')
    }




    return <div  className={"tile about-me " +  (props.classname || "")}>

        <div>
            <h2 className='about-me-title'>Cześć, hej!</h2>
            <hr className={"horizontal-line"}/>
            <div className='abount-me-header1'>Nazywam się Ania i zamieniam trudne w fajne</div>

            <div className='abount-me-header2'>Uczę podstaw fotografii i zachęcam do prowadzenie pięknego, kreatywnego życia. Miesięcznie czyta mnie 100 tysięcy osób. </div>
            <button onClick={() => goToAboutMe()}>Dowiedz się więcej o mnie</button>
        </div>
        <img className='about-me-photo' alt="logo"  src={photo}></img>

    </div>
}

export default AboutMeTile