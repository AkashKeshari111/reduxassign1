import { DECREMENT, DIVISION, INCREMENT, MULTIPLE } from "./action.type"



export const add=(value)=>({type:INCREMENT,payload:value})
export const subs=(value)=>({type:DECREMENT,payload:value})
export const mul=(value)=>({type:MULTIPLE,payload:value})
export const div=(value)=>({type:DIVISION,payload:value})


