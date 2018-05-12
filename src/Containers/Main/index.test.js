import React from 'react';
import ReactDOM from 'react-dom';
import APIManager from '../../Helpers/API/API Manager/apiManager';
import Main from './index'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
jest.mock('../../Helpers/API/API Manager/apiManager', () => {
  return jest.fn().mockImplementation(() => {
    return {
      fetchPeople: jest.fn().mockImplementation(() => Promise.resolve(['card1', 'card2'])),
      fetchVehicles: jest.fn().mockImplementation(() => Promise.resolve(['card1', 'card2'])),
      fetchPlanets: jest.fn().mockImplementation(() => Promise.resolve(['card1', 'card2']))
    };
  });
});

describe('Main', () => {

  describe('Component', () => {
    it('should match snapshot', () => {
      const main = renderer.create(<Main />).toJSON();

      expect(main).toMatchSnapshot();
    })
  })

  describe('setPeopleData method', () => {
    it('should call fetchPeople method of the class instance', async () => {
      const main = shallow(<Main />);
      
      main.instance().setPeopleData()

      expect(main.instance().api.fetchPeople).toHaveBeenCalled();     
      
    })

    it('should set state to the evaluation of the fetchPeople method', async () => {
      const main = shallow(<Main />);
      const expected = ['card1', 'card2']
      
      expect(main.state('displayed')).toEqual([])

      Promise.resolve(main.instance().setPeopleData())
        .then(() => main.update())
        .then(() => expect(main.state('displayed')).toEqual(expected))
    })

    it('should not call fetchPeople if state is already populated with people', async () => {
      const main = shallow(<Main />);

      main.setState({
        people: [{name: "Tony"}]
      })

      Promise.resolve(main.instance().setPeopleData())
        .then(() => main.update())
        .then(() => expect(main.instance().api.fetchPeople).not.toHaveBeenCalled())
    })
  })

  describe('setVehicleData method', () => {
    it('should call fetchVehicle method of the class instance', async () => {
      const main = shallow(<Main />);
      
      main.instance().setVehicleData()

      expect(main.instance().api.fetchVehicles).toHaveBeenCalled();     
      
    })

    it('should set state to the evaluation of the fetchVehicles method', async () => {
      const main = shallow(<Main />);
      const expected = ['card1', 'card2']
      
      expect(main.state('displayed')).toEqual([])

      Promise.resolve(main.instance().setVehicleData())
        .then(() => main.update())
        .then(() => expect(main.state('displayed')).toEqual(expected))
    })

    it('should not call fetchVehicle if state is already populated with vehicles', async () => {
      const main = shallow(<Main />);

      main.setState({
        vehicles: [{name: "Tony"}]
      })

      Promise.resolve(main.instance().setVehicleData())
        .then(() => main.update())
        .then(() => expect(main.instance().api.fetchVehicles).not.toHaveBeenCalled())
    })
  })

  describe('setPlanetData method', () => {
    it('should call fetchPlanet method of the class instance', async () => {
      const main = shallow(<Main />);
      
      main.instance().setPlanetData()

      expect(main.instance().api.fetchPlanets).toHaveBeenCalled();     
      
    })

    it('should set state to the evaluation of the fetchPlanets method', async () => {
      const main = shallow(<Main />);
      const expected = ['card1', 'card2']
      
      expect(main.state('displayed')).toEqual([])

      Promise.resolve(main.instance().setPlanetData())
        .then(() => main.update())
        .then(() => expect(main.state('displayed')).toEqual(expected))
    })

    it('should not call fetchPlanets if state is already populated with Planet', async () => {
      const main = shallow(<Main />);

      main.setState({
        planets: [{name: "Tony"}]
      })

      Promise.resolve(main.instance().setPlanetData())
        .then(() => main.update())
        .then(() => expect(main.instance().api.fetchPlanets).not.toHaveBeenCalled())
    })
  })

  describe('setFavorites method', () => {
    
    it('should set state of favorites to include incoming object', async () => {
      const main = shallow(<Main />);
      const expected = {name: "tony"}
      
      expect(main.state('favorites')).toEqual([])

      Promise.resolve(main.instance().setFavorites(expected))
        .then(() => main.update())
        .then(() => expect(main.state('favorites')).toEqual([expected]))
    })

    it('should remove the object passed from state if already a favorite', async () => {
      const main = shallow(<Main />);
      const expected = {name: "tony"}

      main.setState({
        favorites: [expected]
      })
      
      expect(main.state('favorites')).toEqual([expected])

      Promise.resolve(main.instance().setFavorites(expected))
        .then(() => main.update())
        .then(() => expect(main.state('favorites')).toEqual([]))
    })
  })
})