import fetch from 'isomorphic-fetch';

const apiUrl = 'https://swapi.co/api/';
const peoples = {
  async get(page, perPage) {
    const response = await fetch(`${apiUrl}peoples`);
    const data = await response.json();
    return data.data;
  },
  async find(id) {
    const response = await fetch(`${apiUrl}peoples/${id}`);
    const data = await response.json();
    return data;
  },

};


export default peoples;
