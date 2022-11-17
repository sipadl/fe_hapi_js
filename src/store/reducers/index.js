import { combineReducers } from "redux";
import angka from "./angka.reducer";
import produk from './produk.reducer'
export default combineReducers({
    produk:produk,
    angka:angka
});