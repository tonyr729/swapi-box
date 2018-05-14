import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import renderer from 'react-test-renderer';
import APIManager from '../../Helpers/API/API Manager/';
jest.mock('../../Helpers/API/API Manager/', () => {
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
