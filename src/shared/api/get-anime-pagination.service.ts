import axiosInstance from '../../app/api/axiosInstance';
import { setAnimeListing } from '../../features/anime-listing/model/anime-listing-model';
import store from '../redux/store';

export const fetchAnimeWithPagination = async (page = 1, limit = 20) => {
    try {
        const response = await axiosInstance.get(`/anime?page=${page}&limit=${limit}&order_by=popularity&sort=desc`);

        if (response.data?.data) {
            store.dispatch(setAnimeListing(response.data.data));
        }

        return {
            data: response.data?.data || [],
            pagination: response.data?.pagination || { last_visible_page: 1 },
        };
    } catch (error) {
        console.error('Error fetching paginated anime:', error);
        return { data: [], pagination: { last_visible_page: 1 } };
    }
};
