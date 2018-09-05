import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';


const defaultState=fromJS({
    isLogin:false,

})

export default (state=defaultState,action)=>{
    switch(action.type){    
        case actionTypes.CHANGE_LOGIN:
            return state.set("isLogin",action.value);
        default:
            return state;
        case actionTypes.LOGOUT:
            return state.set("isLogin",false)
    }
      
}
