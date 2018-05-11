import React from 'react';
import ReactDOM from 'react-dom';
import APIManager from '../../Helpers/API/API Manager/apiManager';
import Main from './index'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('Main', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const main = renderer.create(<Main />).toJSON();

      expect(main).toMatchSnapshot();
    })
  })

  describe('setPeopleData method', () => {
    let api;
    let main;

    beforeEach(() => {
      main = shallow(<Main />);
      api = new APIManager();
      api.fetchPeople = jest.fn();


    })

    it('should call fetchPeople method', async () => {
      main.instance().setPeopleData()
  
      
      expect(api.fetchPeople.toHaveBeenCalled())
    
    })

  })

  // describe('APIManager class', () => {

  // })

  // describe('APIManager class', () => {

  // })

})