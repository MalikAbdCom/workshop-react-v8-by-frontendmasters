import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './fetchBreedList';

const localCache = {};

export default function useBreedList(animal) {
    const result = useQuery(['breeds', animal], fetchBreedList);
    return [result?.data?.breeds ?? [], result.status];
}
