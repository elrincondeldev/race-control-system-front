import axios from 'axios';
import { BACKEND_URL } from '../constants';
import { getTokenFromLocalStorage } from '../helpers/localStorageLoginSession';

export const participantServices = {
  async getParticipants() {
    try {
      const token = getTokenFromLocalStorage();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Añadir el token al encabezado
        },
      };

      const response = await axios.get(
        `${BACKEND_URL}participant/get-all-participants`,
        config,
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async getCompetitions() {
    try {
      const token = getTokenFromLocalStorage();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `${BACKEND_URL}competition/get-all-competitions`,
        config,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async getActiveCompetition() {
    try {
      const response = await axios.get(
        `${BACKEND_URL}competition/competitions-active`,
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async modifyCompetition(data: any) {
    try {
      const token = getTokenFromLocalStorage();

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post(
        `${BACKEND_URL}competition/modify-competition`,
        { competition: data },
        config,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async createCompetition(data: any) {
    const token = getTokenFromLocalStorage();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.post(
        `${BACKEND_URL}competition/create-competition`,
        data,
        config,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  async registerParticipant(data: any) {
    try {
      console.log(data);
      const response = await axios.post(
        `${BACKEND_URL}participant/register-participant`,
        data,
      );

      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
