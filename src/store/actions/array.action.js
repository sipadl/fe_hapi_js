import { GETS, ERROR } from "../tipe";
import data from "../../data";


export const getAngka = () => async dispatch => {
    try {
        const res = data
        dispatch({
            type: GETS,
            payload: res
        })
    }
    catch(e){
        dispatch( {
            type: ERROR,
            payload: console.log(e),
        })
    }
}