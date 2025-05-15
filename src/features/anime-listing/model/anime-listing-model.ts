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
    selectedGenres: number[];
}

const initialState: IAnimeListing = {
    data: [],
    selectedGenres: [],
};

export const animeListingSlice = createSlice({
    name: 'animeListing',
    initialState,
    reducers: {
        setAnimeListing(state, action: PayloadAction<IAnime[]>) {
            state.data = action.payload;
        },
        resetAnimeListing: (state) => {
            state.data = [];
            state.selectedGenres = [];
        },
        setSelectedGenres(state, action: PayloadAction<number[]>) {
            state.selectedGenres = action.payload;
        },
    },
});

export const { setAnimeListing, resetAnimeListing, setSelectedGenres } = animeListingSlice.actions;

export default animeListingSlice.reducer;
