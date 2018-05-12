import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FavButton from './FavButton';

describe('FavButton', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const favButton = renderer.create(<FavButton favorites={0}/>).toJSON();

      expect(favButton).toMatchSnapshot();
    })
  })
})