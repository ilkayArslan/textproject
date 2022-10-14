import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTexts = createAsyncThunk("getTexts", async ({ paragNumber, texttype }) => {

    const res = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragNumber ? paragNumber : 4}&start-with-lorem=1&format=${texttype}`)
    return res.text()


})
const textSlicer = createSlice({
    name: "texts",
    initialState: {
        items: [],
        isLoad: false
    },
    reducers: {

    },
    extraReducers: {
        [fetchTexts.pending]: (state, action) => {
            state.isLoad = true
        },
        [fetchTexts.fulfilled]: (state, action) => {

            state.items = action.payload;
            state.isLoad = false
        }
    }


})

export default textSlicer.reducer;
