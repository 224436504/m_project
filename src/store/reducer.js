// import  {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer}  from '../common/Header/store';
import {reducer as homeReducer} from '../pages/home/store';
 import {reducer as detailReducer} from '../pages/detail/store';
 import {reducer as loginReducer} from '../pages/login/store';
//redux-immutable 第三方模块 将原始的state数据转化成immutable数据存储
//达到获取数据时能够统一的标准

export default combineReducers({
    Header:headerReducer,
    Home:homeReducer,
    Detail:detailReducer,
    Login:loginReducer
})

