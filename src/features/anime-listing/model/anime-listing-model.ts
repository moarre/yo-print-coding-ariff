import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAnime {
    mal_id: number;
    title: string;
    images: {
        jpg: { image_url: string };
    };
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
