import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INews } from "../../models/news";
import { Thunk } from '../../store/types';
import NewsServiceI from "../../services/api";
import { HEADLINEENDPOINT, newsKey } from '../../constants/constant';

export interface NewsS {
    Newss: Array<INews>,
    NewsCount: number,
    isNewssLoaded: boolean,
    isNewssLoading: boolean,
    isError: boolean,
    error: string,
    currenNews: INews,
}
const initialState: NewsS = {
    Newss: [],
    NewsCount: 0,
    isNewssLoaded: false,
    isNewssLoading:false,
    isError: false,
    error: '',
    currenNews: {
        source: {
            id: '',
            name: ''
        },
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
        content: '',
        author: ''
    }
}


export const Newss = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchingNewss: (state ) => {
            state.isNewssLoading = true;
            state.isNewssLoaded = false;
        },
        loadNewss(state, action: PayloadAction<INews[]>) {
            state.Newss = action.payload;
            state.NewsCount = action.payload.length;
            state.isNewssLoaded = true;
            state.isNewssLoading = false;
            state.isError = false;
        },
        failure(state, action: PayloadAction<string>) {
            state.isNewssLoading = false;
            state.isNewssLoaded = false;
            state.isError = true;
            state.error = action.payload; 
        },
        currentNews(state, action: PayloadAction<INews>) {
            state.currenNews = action.payload;
        }, 
        clearNews(state) {
            state.Newss = [];
            state.NewsCount = 0;
        }, 
    

    },
})

export const { fetchingNewss,loadNewss, failure, currentNews , clearNews} = Newss.actions

export default Newss.reducer

export const getNews = (): Thunk => {
    return async (dispatch) => {
        dispatch(fetchingNewss());
        try {
            const { data } = await NewsServiceI.getHeadline(`${HEADLINEENDPOINT}?country=in&apiKey=${newsKey}`);
            dispatch(loadNewss(data.articles))
        } catch (e:any) {
            dispatch(failure(e.message))
        }
    }
}
export const searchNews = (search:string): Thunk => {
    return async (dispatch) => {
        dispatch(clearNews())
        dispatch(fetchingNewss());
        try {
            const { data } = await NewsServiceI.getHeadline(`${HEADLINEENDPOINT}?q=${search}&apiKey=${newsKey}`);
            dispatch(loadNewss(data.articles))
        } catch (e:any) {
            dispatch(failure(e.message))
        }
    }
}
export const setCurrentNews = (news: INews): Thunk => {
    return async (dispatch) => {
        dispatch(currentNews(news))

    }
}

