import axios from 'axios';
import {actionTypes} from './';


const doLogin=(account,passWord,dispatch)=>{
axios.get("/api/login.json?account="+account+"&passWord"+passWord).then((res)=>{
        console.log(res);
        const result=res.data.data;
        const action={
            type:actionTypes.CHANGE_LOGIN,
            value:true
        }
        if(result){
            dispatch(action)
        }else{
            alert("登录失败")
        }
    }).catch((err)=>{
        alert(err);
    })
}

export const  login=(account,passWord)=>{
    return (dispatch)=>(
        doLogin(account,passWord,dispatch)
    )
}
export const logout=()=>({
    type:actionTypes.LOGOUT
})