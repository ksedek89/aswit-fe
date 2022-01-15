import './blog.css'
import {useNavigate} from 'react-router-dom';
import blog from '../img/blog.png'

const BlogTile = (props) => {
    const navigate = useNavigate();

    function goToBlog() {
        //todo idz do bloga
        navigate('/blog')
    }


    return  (
        <div  className={"tile " +  (props.classname || "")}>
            <div className='blog-content'>
                <h2 className='blog'>Blog</h2>
                <hr className={"horizontal-line"}/>
                <img className={'blog-img'} src={blog}></img>
                <div className={'blog-category'}>Lifestyle</div>
                <div className={'blog-title'}>Friyay #3 - Sprzątanie, dieta i ulubiona blogerka</div>
                <div className={'blog-text'}>Należy pomyśleć m.in. o wyglądzie bloga, rodzaju treści i tym, jak zaangażować czytelników.
                    Aby wspomóc Cię w tym procesie, zebraliśmy przykłady blogów, które nie tylko Cię zainspirują, ale również podpowiedzą, w jaki sposób spieniężyć swoją pracę. Nasza lista niezwykle popularnych blogów liczy aż 21 pozycji.
                    Przedstawimy rozwiązania stosowane w każdym z tych blogów, zidentyfikujemy najważniejsze [...]</div>
                <div className='blog-date'>Luty 15, 2021 By AS</div>
                <button>Czytaj więcej</button>
            </div>

        </div>
    )
}


export default BlogTile