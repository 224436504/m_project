import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';
const homeAction=(result)=>({     
        type:actionTypes.GET_HOME_DATA,
        topicList:result.topicList,
        noteList:result.noteList,
        RecommendList:result.RecommendList,
        authorList:result.authorList,
        RecommendLogo:result.RecommendLogo,
    })
export const getHomeData=()=>{
    return (dispatch)=>{
        axios.get("./api/home.json").then((res)=>{
            const result=res.data.data;            
            dispatch(homeAction(result));
        })
    }
}
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get("/api/MoreList.json?page="+page).then((res=>{
            const list=res.data.data;
            const action={
                type:actionTypes.GET_MORE_LIST,
                list:fromJS(list),
                nextPage:page+1,
            }
           dispatch(action);
        })).catch((err)=>{
            console.log(err);
        })
    }
}

export const toggleTopShow=(show)=>({
    type:actionTypes.TOGGLE_TOP_SHOW,
    show
})

export const showRecommendLogo=(show)=>({
    type:actionTypes.RECOMMEND_LOGO_SHOW,
    show
})