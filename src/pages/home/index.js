import React ,{PureComponent} from 'react';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Write from './components/Write';
import List from './components/List';
import {connect} from 'react-redux';
import {actionCreators} from './store';

import {HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {
    handleBackTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"  alt="error" src="https://upload.jianshu.io/admin_banners/web_images/4424/28fa64c724d3d67bc47994c5b9e43b43474069d9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540 "/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Write></Write>
                    </HomeRight>
                    {this.props.showScroll?<BackTop onClick={this.handleBackTop}><i className="iconfont">&#xe605;</i></BackTop>:null}                
            </HomeWrapper>
        )
    }

    componentDidMount(){
        this.props.getHomeData();
        this.bindEvents();   
    }
    componentWillUnMount(){
        window.removeEventListener("scroll",this.props.changeScrollShow)
    }
    bindEvents(){
        window.addEventListener("scroll",this.props.changeScrollShow)
    }
}

const mapState=(state)=>({
    showScroll:state.getIn(["Home","showScroll"])
})
const  mapDispatchToProps=(dispatch)=>({
    getHomeData(){
        dispatch(actionCreators.getHomeData());
    },
    changeScrollShow(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})
export default connect(mapState,mapDispatchToProps)(Home);