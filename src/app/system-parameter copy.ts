import { environment } from '../environments/environment';

// rest api
export const REST_SERVER_URL = environment.travelAPIUrl;

export const REST_API = REST_SERVER_URL + '/api';

// request & response option
export const HTTP_OPTION = {
  headers: { 'Content-Type': 'application/json', },
};

