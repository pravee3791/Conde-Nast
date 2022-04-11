import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import Search from "../../components/search/search";
import NewsItem from "../../components/newsItem/newsItem";
import Loader from "../../components/loader/loader";
import "./home.css";
import { INews } from "../../models/news";
import { getNews, setCurrentNews } from "../../store/slices/news";
import { news } from "../../store/selectors";

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const newsData = useSelector(news);
    //load news on page load
    useEffect(() => {
        dispatch(getNews());
    }, []);



    const redirectToDetailsPage = useCallback((item: INews) => {
        dispatch(setCurrentNews(item));
        navigate('/newsDetails')
    }, [])

    return (
        <>
            <Header></Header>
            <Search></Search>
            <div className="home">
                {newsData.isError && <div className="error">{newsData.error}</div>}
                {newsData.isNewssLoading ? <Loader></Loader> : ''}
                <div className="container">
                    {newsData.Newss.map((item: INews, index: number) => {
                        return (
                            <NewsItem key={index} item={item} onClick={redirectToDetailsPage}></NewsItem>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;