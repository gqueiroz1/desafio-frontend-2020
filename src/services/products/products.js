import {http} from './api-config';

export default {
  product: (url) => {return http.get(url)}
}