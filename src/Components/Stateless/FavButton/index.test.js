import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import FavButton from './index';

describe('FavButton', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const favButton = renderer.create(<FavButton favorites={0}/>).toJSON();

      expect(favButton).toMatchSnapshot();
    })

    it('should call setDisplayedData when clicked', () => {
      const setDisplayedData = jest.fn()
      const wrapper = shallow(<FavButton setDisplayedData={setDisplayedData}/>)
    
      wrapper.simulate('click');

      expect(setDisplayedData.mock.calls.length).toEqual(1)
    })
  })
})