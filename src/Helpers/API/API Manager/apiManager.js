class APIManager {

  //Cleaners

  cleanPeople = (people) => {
    const unresolvedPromises = people.map(async person => {
      const name = person.name;
      const homeworldObject = await this.fetchHomeworld(person.homeworld)
      const homeworld = homeworldObject.name
      const species = await this.fetchSpecies(person.species);
      const population = homeworldObject.population;
      
      return {name, homeworld, species, population}
    })

    return Promise.all(unresolvedPromises);
  }

  cleanVehicles = (vehicles) => {
    const unresolvedPromises = vehicles.map(async vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;

      return {name, model, vehicleClass, passengers}
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

      return {name, terrain, population, climate, residents}
    })

    return Promise.all(unresolvedPromises);
  }

  // Fetchers

  fetchCrawl = async (randomNumber) => {
    const url = `https://swapi.co/api/films/${randomNumber}/`
    const response = await fetch(url);
    const data = await response.json();
    const crawl = {episode: data.episode_id, title: data.title, crawl: data.opening_crawl, release: data.release_date}

    return crawl; 
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/'
    const response = await fetch(url);
    const data = await response.json();
    const people = await this.cleanPeople(data.results)
    
    return people;
  }

  fetchHomeworld = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const homeworld = { name: data.name, population: data.population }

    return homeworld;
  }

  fetchSpecies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const species = data.name;
    
    return species;
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/'
    const response = await fetch(url);
    const data = await response.json();
    const vehicles = await this.cleanVehicles(data.results)
    
    return vehicles;
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets/'
    const response = await fetch(url);
    const data = await response.json();
    const planets = await this.cleanPlanets(data.results)
    
    return planets;
  }

  fetchResidents = (residentURL) => {
    const unresolvedPromises = residentURL.map(async residentURL => {
      const response = await fetch(residentURL);
      const data = await response.json();
      const resident = data.name;

      return resident;
    })
    
    return Promise.all(unresolvedPromises);
  } 
}

export default APIManager;