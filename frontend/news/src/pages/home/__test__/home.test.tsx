
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Home from '../home';
import { shallow, mount } from 'enzyme';
import Header from "../../../components/header/header";
import Search from "../../../components/search/search";
import NewsItem from "../../../components/newsItem/newsItem";
import store from "../../../store/store";



let wrapped = mount(<Provider store={store}> <Router><Home /></Router></Provider>);
describe('Testing the Home Component', () => {
  test('Home component contains the header comp', () => {
    expect(wrapped.find(Header).length).toEqual(1);
  })

  test('Home component contains the Search comp', () => {
    expect(wrapped.find(Search).length).toEqual(1);
  })

  test('Home component contains the list of news', () => {
    expect(wrapped.find('.home').length).toEqual(1);
  })


  test('Home component shall match the snapshot', () => {
    expect(wrapped).toMatchSnapshot();
  })

})

