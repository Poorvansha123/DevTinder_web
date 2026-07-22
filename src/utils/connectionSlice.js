import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{
 addCoonections:(state,action)=>{
    return action.payload
 },
removeConnections:(state,action)=>{
   const newFeed=state.filter((r)=>r._id!==action.payload)
   return newFeed
}
    }
})
export const{addCoonections,removeConnections}=connectionSlice.actions
export default connectionSlice.reducer