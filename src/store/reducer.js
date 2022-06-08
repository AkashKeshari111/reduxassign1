import { DECREMENT, DIVISION, INCREMENT, MULTIPLE } from "./action.type"


export const reducer=(state,action)=>{

    console.log(state,action)

    switch(action.type){
        case INCREMENT:{
            state.count=state.count+Number(action.payload)
            return {...state}
        }
        case DECREMENT:{
            state.count=state.count-Number(action.payload)
            return {...state}
        }

        case MULTIPLE:{
            state.count=state.count*Number(action.payload)
            return {...state}
        }

        case DIVISION:{
            state.count=state.count/Number(action.payload)
            return {...state}
        }

        default:{
            return state
        }
    }
}