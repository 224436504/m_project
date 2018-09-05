import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    title:"",
    content:""
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.GET_DETAIL_LIST :
            return state.merge({
                title:action.title,
                content:action.content
            });
        default:
            return state;
    }
      
}