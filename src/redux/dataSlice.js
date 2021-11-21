import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  value: 1,
  page:undefined,
  contentItems:[],

}


export const fetchDataByPage= createAsyncThunk(
    'users/fetchByPage',
    async (pageNum) => {
        const response= await axios.get(`./API/CONTENTLISTINGPAGE-PAGE${pageNum}.json`)
        .then(({ data })=> data)
        .catch((err)=> {})
      return response.page
    
    }
  )

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    incrementByAmount:  (state) => {
        state.value+=1
    },
  },
  extraReducers: {
    [fetchDataByPage.fulfilled]: (state, action) => {
        state.page=action.payload
        state.contentItems.push(...action.payload['content-items'].content)
        
        
      },
  },

})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = dataSlice.actions

export default dataSlice.reducer