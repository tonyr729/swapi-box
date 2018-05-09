class DataFetcher {

  fetchCrawl = async (randomNumber) => {
    const responce = await fetch(`https://swapi.co/api/films/${randomNumber}/`);
    const data = await responce.json();
    const crawl = {episode: data.episode_id, title: data.title, crawl: data.opening_crawl, release: data.release_date}
    return crawl; 
  }
}

export default DataFetcher;