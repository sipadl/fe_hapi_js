import { GETS } from "../tipe";

const initialState = {
    angka: [],
    loading: true,
}
function angka (state = initialState, action) {
    switch (action.type) {
        case GETS:
            return {
            ...state,
            angka:action.payload,
            loading:false
            }
        default:
            return state
    }
    
}

export default angka

