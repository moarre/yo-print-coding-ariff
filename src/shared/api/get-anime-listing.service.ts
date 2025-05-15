import axiosInstance from '../../app/api/axiosInstance';
import { setAnimeListing } from '../../features/anime-listing/model/anime-listing-model';
import store from '../redux/store';

export const fetchAnimeByGenre = async (genreIds: number[], page = 1) => {
    try {
        const genreQuery = genreIds.length > 0 ? `genres=${genreIds.join(',')}&` : '';
        const endpoint = `/anime?${genreQuery}order_by=popularity&sort=desc&page=${page}`;

        const response = await axiosInstance.get(endpoint);
        store.dispatch(setAnimeListing(response.data.data));
    } catch (error) {
        console.error('Failed to fetch anime:', error);
    }
};
