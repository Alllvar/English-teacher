import { createReducer } from '@reduxjs/toolkit';

const initialVerbsState = {
    verbs: [],
};

const verbsReducer = createReducer(initialVerbsState, (builder) => {
    // builder.addCase()
})

export default verbsReducer;
