import Dashboard from "./compontents/dashboard/dashboard";
import AboutAs from "./compontents/about-as/about-as";
import Podcast from "./compontents/podcast/podcast";
import {Routes, Route} from "react-router-dom";
import PodcastDetails from "./compontents/podcast/podcast-details";

const App = () =>
    <div className='wrapper'>
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/about-as" element={<AboutAs/>}/>
            <Route exact path="/podcasts" element={<Podcast/>}/>
            <Route exact path="/podcast-details/:podcastId" element={<PodcastDetails/>}/>
        </Routes>
    </div>
export default App;