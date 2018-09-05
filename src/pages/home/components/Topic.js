import React ,{PureComponent} from 'react';
import {TopicWrapper,TopicItem} from '../style';
import {connect} from 'react-redux';
class Topic extends PureComponent {
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item,index)=>{
                        return (<TopicItem key={item.id}>
                        <img className="top-pic" src={item.imgUrl} alt={item.alt}/>
                        {item.title}
                        </TopicItem>)
                    })
                }
                <TopicItem>
                   更多热门专题 >
                </TopicItem>

            </TopicWrapper>
        )
    
}
}

const mapStateToProps=(state)=>({
    topicList:state.getIn(["Home","topicList"]).toJS()
})
export default connect(mapStateToProps,null)(Topic);

