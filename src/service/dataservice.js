import data from '../data/sample.json'

class DataService {
    
    constructor(type){
        this.type = type;
    }

    getItems() {
        return data.entries.filter(item => (item.releaseYear >= 2010 && item.programType === this.type)).slice(0,20).sort((a, b) => (a.title > b.title) ? 1 : -1);
  }
}

export default DataService;