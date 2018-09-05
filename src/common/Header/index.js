import React ,{Component}from 'react';
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux';
import {actionCreators} from "./store";
import {actionCreators as loginActionTypes} from '../../pages/login/store'
import {Link} from 'react-router-dom';
import { SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchList,
    SearchListItem,
    Button,NavSearch,HeaderWrapper ,
    Logo,Nav,NavItem,Wrapper} from './head_style';
    
    class Header extends Component {
        
        getInputInfo () {
            const {inputInfoList,focused,mouseEnter,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage,page}=this.props;
            const newList=inputInfoList.toJS();
            const activePage=[];
            if(newList.length){
                for(let i=(page-1)*10;i<page*10;i++){
                    activePage.push(<SearchListItem key={newList[i]}>{newList[i]}</SearchListItem>)
                }
            }            
            if(focused||mouseEnter){
                const show=(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>(handleChangePage(page,totalPage,this.spinIcon))}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe615;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchList>
                        {activePage}     
                    </SearchList>
                </SearchInfo>)
                return show;
            }else{
                return null
            }

        }

       
        render(){
            const {focused,handleInputFocused,handleInputBlur,inputInfoList,isLogin,logout}= this.props;
            return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>          
                <Nav>               
                    <NavItem className="left index">
                        <i className='iconfont'>&#xe604;</i>
                        首页
                    </NavItem>               
                    <NavItem className="left">
                        <i className='iconfont'>&#xe600;
                        </i>下载App
                    </NavItem>
                <SearchWrapper>
                    < CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch
                        className={focused?"focused":""}
                        onFocus={()=>{handleInputFocused(inputInfoList)}}
                        onBlur={handleInputBlur}
                        />
                    </CSSTransition>
                    <i  className={focused?"focused iconfont other":"iconfont other"} >&#xe62d;</i>
                    {this.getInputInfo()}
                </SearchWrapper>        
                {console.log(isLogin)}
                {isLogin?(<NavItem onClick={logout} className="right">退出</NavItem>):(<Link to="/login"><NavItem className="right">登录</NavItem></Link>)}
                
                <NavItem className="right"><i className='iconfont'>&#xe636;</i></NavItem>
            </Nav>
            <Wrapper>
               <Link to="/write"> <Button className="writing"><i className='iconfont'>&#xe62b;</i>写文章</Button></Link>
                <Button className="reg">注册</Button>
            </Wrapper>
            
        </HeaderWrapper>
            )
        }
    }





const mapStateToProps=(state)=>{
    return {
        //focused:state.get("Header").get("focused")
        focused:state.getIn(["Header","focused"]),
        inputInfoList:state.getIn(["Header","inputInfoList"]),
        page:state.getIn(["Header","page"]),
        totalPage:state.getIn(["Header","totalPage"]),
        mouseEnter:state.getIn(['Header',"mouseEnter"]),
        isLogin:state.getIn(["Login","isLogin"]),

    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocused(list){
            list.size===0&&dispatch(actionCreators.getInputInfo());            
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let angle=spin.style.transform.replace(/\D/ig,"");
            console.log(spin.style.transform);
           if(angle){
                angle=parseInt(angle,10);
            }else{
                angle=0
            }
            spin.style.transform ="rotate("+(360+angle)+"deg)";

            if(page===totalPage){
                dispatch(actionCreators.changePage(1))
            }else{
                dispatch(actionCreators.changePage(page))
            }
        },
        logout(){
            dispatch(loginActionTypes.logout())
        }
           
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);