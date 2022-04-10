import { useSelector } from 'react-redux';
import Header from '../../components/header/header';
import { news } from "../../store/selectors";
import './newsDetails.css';

function NewsDetails() {
    const {currenNews} = useSelector(news);
    return (
        <>
        <Header></Header>
        <div className='newspage'>
            <h1 className='title centerpage'>{currenNews.title}</h1>
            <img src={currenNews.urlToImage} alt="sample88" />
            <section>
                <p>{currenNews.content}</p>
            </section>
            <div>
                <a target="_blank" href={currenNews.url}>Read More</a>
            </div>
        </div>
        </>
    );
}

export default NewsDetails;