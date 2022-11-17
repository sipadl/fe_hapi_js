import axios from "axios";
import { GETS, ERROR, DELETE, ADDS } from "../tipe";
import datas from '../../assets/datas.js';

export const getProduk = () => async dispatch => {
    try{
        // const res = await axios.get(`http://localhost:3058/`)
        const res = datas;
        dispatch( {
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

export const deleteProduk = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3058/delete/${id}`)
        dispatch( {
            type: DELETE,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ERROR,
            payload: console.log(e),
        })
    }
}

export const uploadProduk = (data) => async dispatch => {
    console.log(data);
    try {
        const res = await axios.post(`http://localhost:3058/add-produk`, data)
        dispatch( {
            type: ADDS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ERROR,
            payload: console.log(e),
        })
    }
}