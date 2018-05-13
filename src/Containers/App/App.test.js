import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import APIManager from '../../Helpers/API/API Manager/apiManager';
jest.mock('../../Helpers/API/API Manager/apiManager', () => {
  return jest.fn().mockImplementation(() => {
    return {
      fetchCrawl: jest.fn().mockImplementation(() => Promise.resolve({name: 'tony'})),
    };
  });
});

it('should match snapshot', () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchSnapshot();
});
