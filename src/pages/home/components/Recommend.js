import React ,{PureComponent,Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
    ImgWrapper,
    DownLoadLogo,
    Logo,
    TextInfo,
    LogoBig
} from "../style";
import {connect} from 'react-redux';
import {actionCreators} from '../store';
class Recommend extends PureComponent {   
    render(){
        const {RecommendList,RecommendLogo,showRecommendLogo,closeRecommendLogo}=this.props;
        return (
            <Fragment>
               
            <ImgWrapper>
              
               {
                   RecommendList&&RecommendList.map((item,index)=>(
                    <img key={index} className="img-right" alt="" src={item} />
                   ))
                  
               }
            </ImgWrapper>
            <DownLoadLogo onMouseEnter={showRecommendLogo} onMouseLeave={closeRecommendLogo} >
                <Logo></Logo>
                <TextInfo>
                    <p className="title">下载简书手机APP > </p>
                    <p className="desc">随时随地地发现和创作内容</p>
                </TextInfo>
                {RecommendLogo&&
                <CSSTransition 
                    in={RecommendLogo}
                    classNames="fade"
                    timeout={500}
                    >
                    <LogoBig  className={RecommendLogo?"RecommendLogo":""}/> 
                </CSSTransition>}                              
            </DownLoadLogo>          
            </Fragment>
            
        )
    }
}
const mapState=(state)=>({
    RecommendList:state.getIn(["Home","RecommendList"])&&state.getIn(["Home","RecommendList"]).toJS(),
    RecommendLogo:state.getIn(["Home","RecommendLogo"])
})
const mapDispatch=(dispatch)=>({
    showRecommendLogo(){
        dispatch(actionCreators.showRecommendLogo(true))
    },
    closeRecommendLogo(){
        dispatch(actionCreators.showRecommendLogo(false))
    }
})
export default connect(mapState,mapDispatch)(Recommend);