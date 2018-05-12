import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const card = renderer.create(<Card data={{vehicleClass: "awesome"}}/>).toJSON();

      expect(card).toMatchSnapshot();
    })

    it('should not pass the favorites property in to be rendered', () => {
      const wrapper = shallow(<Card data={{favorite: true}} />)

      expect(wrapper).toMatchSnapshot();
    })

    it('should call setFavorites when clicked', () => {
      const setFavorites = jest.fn()
      const wrapper = shallow(<Card data={{name: "Tony"}} setFavorites={ setFavorites }/>)
      
      wrapper.find('button').simulate('click');

      expect(setFavorites.mock.calls.length).toEqual(1)
    })
  })
})