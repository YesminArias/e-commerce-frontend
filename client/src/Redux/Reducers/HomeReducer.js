import { ACTION } from "../Action types/types"

//Reducer de prueba, no hace nada

const initialState = null
export const HomeReducer = (state = initialState,action) => {
    console.log(ACTION,action)
    return state
}