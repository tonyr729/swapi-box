import React from 'react';
import ReactDOM from 'react-dom';
import APIManager from './apiManager';


describe('APIManager class', () => {

  describe('fetch Crawl', () => {
    let api;
    let response

    beforeEach(() => {
      api = new APIManager();
      response = {
        episode_id: 1, 
        title: "Your a wizard Anny!",
        opening_crawl: "Luke, I am your father",
        release_date: "2854"
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "https://swapi.co/api/films/undefined/"
  
      await api.fetchCrawl()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  
    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchCrawl()).resolves.toEqual({
        crawl: response.opening_crawl,
        episode: response.episode_id,
        release: response.release_date,
        title: response.title
      })
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchCrawl()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  describe('fetch People', () => {
    let api;
    let response;

    beforeEach(() => {
      api = new APIManager();
      response = {
        results: [
          {
            name: "Luke Skywalker", 
            homeworld: "url", 
            species: [ "url" ]
          }
        ]
      }
      api.cleanPeople = jest.fn().mockImplementation(() => response)
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "https://swapi.co/api/people/"
  
      await api.fetchPeople()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('calls cleanPeople function with the correct perams', async () => {

      await api.fetchPeople()
      
      expect(api.cleanPeople).toHaveBeenCalledWith(response.results)
    })
  
    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchPeople()).resolves.toEqual(response)
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchPeople()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  describe('fetch Homeworld', () => {
    let api;
    let response 

    beforeEach(() => {
      api = new APIManager();
      response = {
        name: "Earth",
        population: "6000000000"
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "url"
  
      await api.fetchHomeworld(expected)

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  
    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchHomeworld()).resolves.toEqual(response)
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchHomeworld()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  describe('fetch Species', () => {
    let api;
    let response 

    beforeEach(() => {
      api = new APIManager();
      response = {
        name: "Human"
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "url"
  
      await api.fetchSpecies(expected)

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  
    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchSpecies()).resolves.toEqual(response.name)
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchSpecies()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  describe('fetch Vehicles', () => {
    let api;
    let response;

    beforeEach(() => {
      api = new APIManager();
      response = {
        results: [
          {
            name: "Sand Crawler", 
            model: "Digger Crawler", 
            passengers: "30", 
            vehicle_class: "wheeed"
          }
        ]
      }
      api.cleanVehicles = jest.fn().mockImplementation(() => response)
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "https://swapi.co/api/vehicles/"
  
      await api.fetchVehicles()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
    
    it('calls cleanVehicles function with the correct perams', async () => {

      await api.fetchVehicles()
      
      expect(api.cleanVehicles).toHaveBeenCalledWith(response.results)
    })

    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchVehicles()).resolves.toEqual(response)
    })
    

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchVehicles()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  describe('fetch Planets', () => {
    let api;
    let response;

    beforeEach(() => {
      api = new APIManager();
      response = {
        results: [
          {
            name: "Alderaan", 
            climate: "temperate", 
            terrain: "grasslands, mountains", 
            population: "2000000000", 
            residents: ["url", "url", "url"] 
          }
        ]
      }
      api.cleanPlanets = jest.fn().mockImplementation(() => response)
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "https://swapi.co/api/planets/"
  
      await api.fetchPlanets()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
    
    it('calls cleanVehicles function with the correct perams', async () => {

      await api.fetchPlanets()
      
      expect(api.cleanPlanets).toHaveBeenCalledWith(response.results)
    })

    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchPlanets()).resolves.toEqual(response)
    })
    

    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchPlanets()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  describe('fetch Residents', () => {
    let api;
    let response 

    beforeEach(() => {
      api = new APIManager();
      response = {
        name: "Tony"
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(response)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = ["url"]
  
      await api.fetchResidents(expected)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    })
  
    it('returns an object if status code is ok', async () => {
      const urls = ["url"]

      await expect(api.fetchResidents(urls)).resolves.toEqual([response.name])
    })
  
    it('throws an error if status code is not ok', async () => {
      const urls = ["url"]
      let expected = new Error('Fetch resident failed with status 500')
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))
                        
  
      await expect(api.fetchResidents(urls)).rejects.toEqual(expected)
    })


  })

  describe('clean People', () => {
    let newApi;
    let people;
    let person;
    let homeworldResponse;
    let speciesResponse;
    let cleanResponse;
    
    
    beforeEach(() => {
      newApi = new APIManager();
      people = [
        {
          name: "Luke Skywalker", 
          homeworld: "url", 
          species: [ "url" ]
        },
        {
          name: "Han Solo", 
          homeworld: "url", 
          species: [ "url" ]
        }
      ]

      person = {
        name: "Han Solo", 
        homeworld: "url", 
        species: [ "url" ]
      }

      homeworldResponse = {
        name: "earth", 
        population: 4000
      }

      speciesResponse = "human"

      cleanResponse = [
        {
          name: people[0].name, 
          homeworld: homeworldResponse.name,
          population: homeworldResponse.population,
          species: speciesResponse,
          favorite: false
        },
        {
          name: people[1].name, 
          homeworld: homeworldResponse.name, 
          population: homeworldResponse.population,
          species: speciesResponse,
          favorite: false
        }
      ]

      newApi.fetchHomeworld = jest.fn().mockImplementation(() => homeworldResponse);

      newApi.fetchSpecies = jest.fn().mockImplementation(() => speciesResponse);

    })
  
    it('calls fetch Homeworld with the correct params', async () => {
      const expected = person.homeworld
  
      newApi.fetchHomeworld(expected)

      expect(newApi.fetchHomeworld).toHaveBeenCalledWith(expected)
    })

    it('calls fetch Species with the correct params', async () => {
      const expected = person.species

      newApi.fetchSpecies(expected)

      expect(newApi.fetchSpecies).toHaveBeenCalledWith(expected)
    })
  
    it('returns the desired object if passed correct perams', async () => {
      const result = await newApi.cleanPeople(people)

      await expect(result).toEqual(cleanResponse)
    })


  })

  describe('clean Vehicle', () => {
    let newApi;
    let vehicles;
    let vehicle
    let cleanResponse;
    
    
    beforeEach(() => {
      newApi = new APIManager();
      vehicles = [
        {
          name: "Sand Crawler", 
          model: "Digger Crawler", 
          passengers: "30", 
          vehicle_class: "wheeed"
        },
        {
          name: "T-16 skyhopper", 
          model: "T-16 skyhopper", 
          passengers: "1", 
          vehicle_class: "repulsorcraft"
        }
      ]

      vehicle = {
        name: "Sand Crawler", 
        model: "Digger Crawler", 
        passengers: "30", 
        vehicle_class: "wheeed"
      }

      cleanResponse = [
        {
          name: vehicles[0].name, 
          model: vehicles[0].model,
          passengers: vehicles[0].passengers,
          vehicleClass: vehicles[0].vehicle_class,
          favorite: false
        },
        {
          name: vehicles[1].name, 
          model: vehicles[1].model,
          passengers: vehicles[1].passengers,
          vehicleClass: vehicles[1].vehicle_class,
          favorite: false
        }
      ]
    })
    
    it('returns the desired object if passed correct perams', async () => {
      const result = await newApi.cleanVehicles(vehicles)

      await expect(result).toEqual(cleanResponse)
    })
  })

  describe('clean Planets', () => {
    let newApi;
    let planets;
    let planet;
    let residentsResponse;
    let cleanResponse

    
    beforeEach(() => {
      newApi = new APIManager();
      planets = [
        {
          name: "Alderaan", 
          climate: "temperate", 
          terrain: "grasslands, mountains", 
          population: "2000000000", 
          residents: ["url", "url", "url"] 
        },
        {
          name: "Death Star", 
          climate: "AC", 
          terrain: "metal", 
          population: "200000", 
          residents: ["url", "url", "url"] 
        }
      ]
      
      planet = {
        name: "Alderaan", 
        climate: "temperate", 
        terrain: "grasslands, mountains", 
        population: "2000000000", 
        residents: ["url", "url", "url"] 
      }
      
      residentsResponse = ["Lando", "Solo", "Ray"]

      newApi.fetchResidents = jest.fn().mockImplementation(() => residentsResponse)
      
      cleanResponse = [
        {
          climate: "temperate", 
          name: "Alderaan", 
          population: "2000000000", 
          residents: "Lando, Solo, Ray",
          terrain: "grasslands, mountains",
          favorite: false
        },
        {
          climate: "AC", 
          name: "Death Star", 
          population: "200000", 
          residents: "Lando, Solo, Ray",
          terrain: "metal",
          favorite: false
        }
      ]

    })
    
    it('calls fetch Residents with the correct params', async () => {
      const expected = planet.residents;
  
      newApi.cleanPlanets(planets);

      expect(newApi.fetchResidents).toHaveBeenCalledWith(expected)
    })
  
    it('returns the desired object if passed correct perams', async () => {
      const result = await newApi.cleanPlanets(planets)

      await expect(result).toEqual(cleanResponse)
    })
  })
})