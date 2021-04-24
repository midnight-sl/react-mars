import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export const loadPhotos = async ({ roverName, camName, page, sol }) => {
  const loadedPhotosResult = await api.post('/load-photos', { roverName, camName, page, sol });

  return loadedPhotosResult?.data;
}