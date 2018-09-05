import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import{LoginWrapper,LoginBox,Input,Button} from './style';
import  {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
    render(){
        const {isLogin}=this.props;
        if(!isLogin){
            return (         
                <LoginWrapper>
                    <LoginBox>
                    <Input placeholder="账号" innerRef={(input)=>{this.account=input} }/>
                    <Input placeholder="密码" type="passWord" innerRef={(input)=>{this.passWord=input}} />
                    <Button onClick={()=>this.props.handleLogin(this.account,this.passWord)}>登录</Button>
                    </LoginBox>
                   
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }  
    }
}

const mapState=(state)=>({
   isLogin:state.getIn(["Login","isLogin"])
})

const mapDispatch=(dispatch)=>({
    handleLogin(accountElem,passWordElem){
        dispatch(actionCreators.login(accountElem.value,passWordElem.value))

    }
})
export default connect(mapState,mapDispatch)(Login);