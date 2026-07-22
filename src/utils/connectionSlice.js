import { createSlice } from "@reduxjs/toolkit";

const connectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{
 addCoonections:(state,action)=>{
    return action.payload
 },
removeConnections:(state,action)=>{
    return null
}
    }
})
export const{addCoonections,removeConnections}=connectionSlice.actions
export default connectionSlice.reducer