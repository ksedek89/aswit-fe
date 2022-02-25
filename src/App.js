import Dashboard from "./dashboard/dashboard";
import WorkCard from "./work-card/WorkCard";
import AboutAs from "./about-as/about-as";
import Podcast from "./podcast/podcast";
import PodcastDetails from "./podcast/podcast-details";
import {Routes, Route} from "react-router-dom";
import AboutAsDetails from "./about-as/about-as-details";

const App = () =>
<div className='wrapper'>
    <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/about-as" element={<AboutAs/>}/>
        <Route exact path="/podcasts" element={<Podcast/>}/>
    </Routes>
{/*<WorkCard mainTitle="Prezenty" subtitle="Pobierz Case Study projektu AS w IT" signInLabel="Zapisz się i odbierz swój prezent" buttonName="Pobierz Kartę"></WorkCard>*/}


{/*
        <PodcastDetails description="Cześć, Dzień dobry.
Chciałabym zaprosić Cię do odsłuchania pierwszego odcinka podcastu o jeszcze nic nie mówiącej nikomu nazwie „AS w IT, czyli o tym jak nauczyć się świata IT a później próbować do niego wejść”.
Przed sobą mam notatki i mapę myśli, którą utworzyłam zanim zaczęłam nagrywać, żeby o niczym nie zapomnieć, ponieważ mam Ci dość sporo do przekazania 😊.
Po pierwsze o co chodzi z tymi podcastami.
ZAWSZE CHCIAŁAM NAGRYWAĆ PODCASTY! Ale jakoś nigdy nie miałam odwagi, żeby z tym ruszyć (nie to, że teraz mam odwagę, ale uznałam, że jestem już grubo po trzydziestce i bardziej zaczęłam obawiać się tego, że kiedyś będę żałować te"
                        title="Podcast # 10 - zamknięcie pierwszego sezonu"
                        url="https://widget.spreaker.com/player?episode_id=47923138&theme=light&playlist=false&playlist-continuous=false&chapters-image=true&episode_image_position=right&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false&hide-download=true"/>
*/}


</div>
export default App;