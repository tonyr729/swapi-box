import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from './index'

describe('Header', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const header = renderer.create(<Header />).toJSON();

      expect(header).toMatchSnapshot();
    })
  })
})