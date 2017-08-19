import fetch from 'isomorphic-fetch';

const apiUrl = 'https://swapi.co/api/';
const peoples = {
  async get(page, perPage) {
    const response = await fetch(`${apiUrl}people`);
    const data = await response.json();

    return data.results;
  },
  async find(id) {
    const response = await fetch(`${apiUrl}people/${id}`);
    const data = await response.json();
    console.log("data");
    
    console.log(data);
    return data;
  },

};


export default peoples;
