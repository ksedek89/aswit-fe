import '../../css/about-as/about-as.css';
import dziendobry from '../../img/dzien_dobry.png'
import szlaczek from '../../img/szlaczek.png'


const AboutAsDetails = (props) => {
    return(<div>
        <img className='img-about-as' src={dziendobry}/>
        <div className='grid-about-as'>
            <div className='text-about-as'>
                Jak myślałam o tej zakładce to zadawałam sobie pytania:<br/><br/>
                <div className='header-about-as'>Co powinnaś / powinieneś o mnie wiedzieć? </div><br/><br/>
                Mam na imię Ania i od ponad 9 lat zajmuje się ogólnopojętą analizą rzeczy. <br/><br/>
                Moje stanowiska nazywały się baaaardzo różnie, ale wszystkie złączone były wspólnym mianownikiem: Analizowaniem.<br/><br/>
                Do tego przez długi czas udzielałam korepetycji z matmy, fizy i chemii przez co wyrobiłam w sobie ogromną cierpliwość i umiejętność przekazywania trudnych informacji w prosty i przystępny sposób. Natomiast teraz jestem członkinią zespołu projektowego, w którym budujemy rozwiązania IT w obszarze Ubezpieczeniowym.<br/><br/>
                Na co dzień współpracuje z zespołem architektów, project managerów, testerów, developerów, technical project managerów etc -ogólnie wydawałoby się "trudne rzeczy"<br/><br/>
                Niemniej to co sprawia mi największą radochę to współpraca z moją junior analityczką Aśką (Asiu pozdrawiam Cię serdecznie, to właściwie Aśka mocno mnie zainspirowała do tego, żeby wreszcie ruszyć z czymś tak na poważnie, choć ona o tym nie wie), której mogę sprzedawać wszystkie swoje Myczki, których zdążyłam się nauczyć w trakcie swojej drogi zawodowej. Tę samą wiedzę chciałabym przekazać Tobie.<br/><br/>
                Prywatnie bardzo lubię czytać, jogować, muzykować i biegać po musicalach. Ostatnio odkryłam też ogromny fun z robienia bardzo prostych grafik, bardzo mnie to uspokaja.<br/><br/>
                Jeśli masz czas i chęć to zapraszam do słuchania, czytania, subskrybowania - ogólnie zostania na dłużej! :)
            </div>
            <img className='img-about-as-szl' src={szlaczek}/>
        </div>
    </div>
    )
}

export default AboutAsDetails