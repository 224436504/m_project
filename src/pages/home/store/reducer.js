import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    topicList:[],
    noteList:[],
    RecommendList:[],
    notePage:1,
    showScroll:false,
    authorList:[],
    RecommendLogo:false
})
const getHomeData=(state,action)=>(
    state.merge({
        topicList:action.topicList,
        noteList:action.noteList,
        RecommendList:action.RecommendList,
        authorList:action.authorList,
    })
)
const getMoreList=(state,action)=>(
    state.merge({
        noteList:state.get("noteList").concat(action.list),
        notePage:action.nextPage,
    }) 
)
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.GET_HOME_DATA:
            return getHomeData(state,action)
        case actionTypes.GET_MORE_LIST:
           return  getMoreList(state,action)
        case actionTypes.TOGGLE_TOP_SHOW:
           return state.set("showScroll",action.show);    
        case  actionTypes.RECOMMEND_LOGO_SHOW:
            return state.set("RecommendLogo",action.show);        
        default:
            return state;
    }
      
}
