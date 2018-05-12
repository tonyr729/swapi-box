class APIManager {
 
  // Fetchers
  
  fetchCrawl = async (randomNumber) => {
    try {
      const url = `https://swapi.co/api/films/${randomNumber}/`
      const response = await fetch(url);
      const data = await response.json();
      const crawl = {episode: data.episode_id, title: data.title, crawl: data.opening_crawl, release: data.release_date}
      
      return crawl; 
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  
  fetchPeople = async () => {
    try {
      const url = 'https://swapi.co/api/people/'
      const response = await fetch(url);
      const data = await response.json();
      const people = await this.cleanPeople(data.results)
      
      return people;
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  
  fetchHomeworld = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const homeworld = { name: data.name, population: data.population }
      
      return homeworld;
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }

  fetchSpecies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const species = data.name;
      
      return species;
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  
  fetchVehicles = async () => {
    try {
      const url = 'https://swapi.co/api/vehicles/'
      const response = await fetch(url);
      const data = await response.json();
      const vehicles = await this.cleanVehicles(data.results)
      
      return vehicles;
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  
  fetchPlanets = async () => {
    try {
      const url = 'https://swapi.co/api/planets/'
      const response = await fetch(url);
      const data = await response.json();
      const planets = await this.cleanPlanets(data.results)
      
      return planets;
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
  
  fetchResidents = (residentURLs) => {
    try {
      const unresolvedPromises = residentURLs.map(async residentURL => {
        const response = await fetch(residentURL);
        const data = await response.json();
        const resident = data.name;
        
        return resident;
      })

      return Promise.all(unresolvedPromises);
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  } 

  //Cleaners
  
  cleanPeople = (people) => {
    const unresolvedPromises = people.map(async person => {
      const name = person.name;
      const homeworldObject = await this.fetchHomeworld(person.homeworld)
      const homeworld = homeworldObject.name
      const species = await this.fetchSpecies(person.species);
      const population = homeworldObject.population;
      
      return {name, homeworld, species, population, favorite: false}
    })
  
    return Promise.all(unresolvedPromises);
  }
  
  cleanVehicles = (vehicles) => {
    const unresolvedPromises = vehicles.map(async vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;
  
      return {name, model, vehicleClass, passengers, favorite: false}
    })
  
    return Promise.all(unresolvedPromises);
  }
  
  cleanPlanets = (planets) => {
    const unresolvedPromises = planets.map(async planet => {
      const name = planet.name;
      const terrain = planet.terrain;
      const population = planet.population;
      const climate = planet.climate;
      const residentNames = await this.fetchResidents(planet.residents)
      const residents = residentNames.join(", ");
  
      return {name, terrain, population, climate, residents, favorite: false}
    })
  
    return Promise.all(unresolvedPromises);
  }
}

export default APIManager;