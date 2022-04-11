
import NewsDetail from '../newsDetails';
import { shallow, mount } from 'enzyme';
import store from "../../../store/store";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
} from "react-router-dom";

let wrapped = mount(<Provider store={store}> <Router><NewsDetail /></Router></Provider>);
describe('Testing the  Component', () => {
    test('Details component contains the heading', () => {
        expect(wrapped.find('h1').length).toEqual(1);
    })

    test('Details component contains the Search comp', () => {
        expect(wrapped.find(`img`).length).toEqual(1);
    })

    test('Details component contains the list of news', () => {
        expect(wrapped.find('section').length).toEqual(1);
    })

    test('Details component shall match the snapshot', () => {
        expect(wrapped).toMatchSnapshot();
    })

})

