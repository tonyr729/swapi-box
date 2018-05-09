import DataCleaner from '../Cleaner/DataCleaner'
const cleaner = new DataCleaner();

class DataFetcher {
  constructor(){}

  fetchCrawl = async (randomNumber) => {
    // const url = `https://swapi.co/api/films/${randomNumber}/`
    const response = await fetch(url);
    const data = await response.json();
    const crawl = {episode: data.episode_id, title: data.title, crawl: data.opening_crawl, release: data.release_date}
    return crawl; 
  }

  fetchPeople = async () => {
    // const url = 'https://swapi.co/api/people/'
    const response = await fetch(url);
    const data = await response.json();
    const people = await cleaner.cleanPeople(data.results)
    return people;
  }

  fetchHomeworld = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const homeworld = { name: data.name, population: data.population }
  }
}


export default DataFetcher;
