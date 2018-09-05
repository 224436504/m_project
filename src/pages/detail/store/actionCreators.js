import axios from 'axios';
// import * as actionTypes from './actionTypes';
import {actionTypes} from "./";

export const getDetailList=(id)=>{
    return (dispatch)=>{
        axios.get("/api/detail.json?id="+id).then((res)=>{
            const result=res.data.data;
            const action={
                type:actionTypes.GET_DETAIL_LIST,
                title:result.title,
                content:result.content,
            }
            dispatch(action);
        }).catch((err)=>{
            console.log(err);
        })
    }
}

