import React from 'react';
import ReactDOM from 'react-dom';
import APIManager from '../../../Helpers/API/API Manager/apiManager';
import Crawl from './index'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
jest.mock('../../../Helpers/API/API Manager/apiManager.js', () => {
  return jest.fn().mockImplementation(() => {
    return {
      fetchCrawl: jest.fn().mockImplementation(() => Promise.resolve("Kitten")),
    };
  });
});

describe('Main', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const crawl = renderer.create(<Crawl />).toJSON();

      expect(crawl).toMatchSnapshot();
    })
  })
})
