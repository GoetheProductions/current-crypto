import axios from 'axios';
import 'moment/locale/da';
import { BASE_URL } from '../constants';
import tokenHandler from '../app/utils/tokenHandler';

module.exports = function () {
  const request = axios.create({
    baseURL: BASE_URL,
    validateStatus: status => status >= 200 && status < 500,
    headers: {
      Authorization: tokenHandler().getAuthorizationValue('token')
    }
  });

  const commands = {
    getEvents: () => request.get('/some/request'),
  };

  return commands;
};
