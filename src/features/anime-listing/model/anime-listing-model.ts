import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAnime {
    mal_id: number;
    title: string;
    synopsis: string;
    score: number;
    scored_by: number;
    images: {
        jpg: { image_url: string };
    };
    rating: string;
    episodes: number;
    season?: string;
    year?: number;
    genres: { name: string }[];
}

interface IAnimeListing {
    data: IAnime[];
}

const initialState: IAnimeListing = {
    data: [],
};

export const animeListingSlice = createSlice({
    name: 'animeListing',
    initialState,
    reducers: {
        setAnimeListing(state, action: PayloadAction<IAnime[]>) {
            state.data = action.payload;
        },
        resetAnimeListing: () => initialState,
    },
});

export const { setAnimeListing, resetAnimeListing } = animeListingSlice.actions;

export default animeListingSlice.reducer;
