import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../home';
import { shallow } from 'enzyme';
import Header from "../../../components/header/header";
import Search from "../../../components/search/search";
import NewsItem from "../../../components/newsItem/newsItem";

let wrapped = shallow(<Home />);
describe('Testing the Home Component', () => {
  /**test contains the header  */
  test('Home component contains the header comp', () => {
    expect(wrapped.find(Header).length).toEqual(1);
  })

  /** test contains the search box */
  test('Home component contains the Search comp', () => {
    expect(wrapped.find(Search).length).toEqual(1);
  })
  /**test contains the list of news */
  test('Home component contains the list of news', () => {
    expect(wrapped.find(NewsItem).length).toEqual(1);
  }
  )

})

