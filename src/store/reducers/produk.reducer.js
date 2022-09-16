import { ADDS, DELETE, DETAILS, GETS, UPDATES } from "../tipe";

const initialState = {
    produk: [],
    loading: true,
}
function produk (state = initialState, action) {
    switch (action.type) {
        case GETS:
            return {
            ...state,
            produk:action.payload,
            loading:false
            }
        case ADDS:
            return {
            ...state,
            produk:action.payload,
            loading:false
            }
        case UPDATES:
            return {
            ...state,
            produk:action.payload,
            loading:false
            }
        case DETAILS:
            return {
            ...state,
            produk:action.payload.detail,
            loading:false
            }
        case DELETE:
            return {
            ...state,
            msg:action.payload,
            loading:false
        }
        default:
            return state
    }
    
}

export default produk

