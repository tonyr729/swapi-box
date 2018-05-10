import React from 'react';
import ReactDOM from 'react-dom';
import APIManager from './apiManager';
import { shallow } from 'enzyme';


describe('APIManager class', () => {

  describe('fetch Crawl', () => {
    let api;
    let responce

    beforeEach(() => {
      api = new APIManager();
      responce = {
        episode_id: 1, 
        title: "Your a wizard Anny!",
        opening_crawl: "Luke, I am your father",
        release_date: "2854"
      }

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(responce)
      }))
    })
  
    it('fetch is called with the correct params', async () => {
      const expected = "https://swapi.co/api/films/undefined/"
  
      await api.fetchCrawl()

      expect(window.fetch).toHaveBeenCalledWith(expected)
    })
  
    it('returns an object if status code is ok', async () => {
      
      await expect(api.fetchCrawl()).resolves.toEqual({
        crawl: responce.opening_crawl,
        episode: responce.episode_id,
        release: responce.release_date,
        title: responce.title
      })
    })
  
    it('throws an error if status code is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 500 }))
  
      await expect(api.fetchCrawl()).rejects.toEqual(Error('Failed to fetch data'))
    })
  })

  
})