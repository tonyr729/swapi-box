import DataFetcher from '../Fetcher/DataFetcher'
const fetcher = new DataFetcher();


class DataCleaner {
  constructor(){
    this.thing = '';
  }

  cleanPeople = async (people) => {
    const unresolvedPromises = people.map(person => {
      let name = person.name;
      console.log(person.homeworld)
      // let homeworld = fetcher.fetchHomeworld(person.homeworld);
      let species = '';
      let population = '';

      // return {name , homeworld, species, population}
    })
  }
}

export default DataCleaner;


