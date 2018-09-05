import React ,{PureComponent} from 'react';
import {DetailWrapper,Header,Content,ImgWrapper} from './style';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';
import  {actionCreators} from './store';
class Detail extends PureComponent {
    render(){
        const {title,content}=this.props;
        //console.log(this.props.match.params);
        return (         
            <DetailWrapper>
                <Header>
                    {title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>                   
                </Content>
                <ImgWrapper/>
            </DetailWrapper>
        )
    }

    componentDidMount(){
       this.props.getDetailList(this.props.match.params.id)
    }
}

const mapState=(state)=>({
    title:state.getIn(["Detail","title"]),
    content:state.getIn(["Detail","content"])
})

const mapDispatch=(dispatch)=>({
    getDetailList(id){
        dispatch(actionCreators.getDetailList(id));
    },
})
export default connect(mapState,mapDispatch)(withRouter(Detail));