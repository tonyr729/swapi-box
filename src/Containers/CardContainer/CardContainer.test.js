import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CardContainer from './CardContainer'

describe('CardContainer', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const cardContainer = renderer.create(<CardContainer data={{displayed: ["tony"]}} setFavorites={ jest.fn() }/>).toJSON();

      expect(cardContainer).toMatchSnapshot();
    })
  })
})