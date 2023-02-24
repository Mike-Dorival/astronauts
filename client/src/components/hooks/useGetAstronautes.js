import { useQuery } from 'react-query';
import { getAstronauts } from '../../api/astronautsApi';

export const useGetAstronautes = (filter, id) =>
  useQuery('astronauts', getAstronauts, {
    select: astronauts =>
      filter === 'get_astronaute'
        ? astronauts.data.find(astronaut => astronaut.id === id)
        : astronauts.data.filter(
            ({ firstname, lastname }) =>
              firstname.toLowerCase().includes(filter.toLowerCase()) ||
              lastname.toLowerCase().includes(filter.toLowerCase())
          )
  });
