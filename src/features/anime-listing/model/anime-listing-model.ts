import { createSlice } from '@reduxjs/toolkit';

interface IAnimeListing {
  data: string[];
}

const initialState: IAnimeListing = {
    data: [],
};

export const animeListingSlice = createSlice({
    name: 'animeListing',
    initialState,
    reducers: {
        resetAnimeListing() {
            return initialState;
        },
    },
});

export const { resetAnimeListing } = animeListingSlice.actions;

export default animeListingSlice.reducer;
