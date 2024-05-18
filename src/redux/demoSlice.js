import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialMsg : "success..."
}

const demoSlice = createSlice({
  name: 'msg',
  initialState,
  reducers:{
    increment:(state)=>{
        state.msg="ddd"
    }
  }
})

export default demoSlice.reducer
export const {increment} = demoSlice.actions