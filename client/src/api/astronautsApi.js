import axios from 'axios';

const astronautsApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

export const getAstronauts = async () => {
  const response = await astronautsApi.get('/api/astronauts');
  return response;
};

export const addAstronaut = async astronaut => {
  const response = await astronautsApi.post('/api/astronauts', astronaut);
  return response;
};

export const updateAstronaut = async astronaut => {
  const response = await astronautsApi.put(`/api/astronauts/${astronaut.id}`, astronaut);
  return response;
};

export const deleteAstronauts = async ({ id }) => {
  const response = astronautsApi.delete(`/api/astronauts/${id}`, id);
  return response;
};
