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

}

export default APIManager;