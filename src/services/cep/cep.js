import {http} from './api-config';

export default{
  searchCep: (cep) => {return http.get(cep + '/json');}
}