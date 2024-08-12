import axios from 'axios';
import { BACKEND_URL } from '../constants';

export const userServices = {
  async login(data: any) {
    try {
      const response = await axios.get(
        `${BACKEND_URL}auth/login?username=${data.username}&password=${data.password}`,
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
