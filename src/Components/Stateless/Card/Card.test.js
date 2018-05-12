import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const card = renderer.create(<Card data={{vehicleClass: "awesome"}}/>).toJSON();

      expect(card).toMatchSnapshot();
    })
  })
})