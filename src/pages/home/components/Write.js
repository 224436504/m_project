import React ,{PureComponent} from 'react';
import {WriteWrapper,AuthorUl,AuthorItem,LookForAll} from '../style';
import {connect} from 'react-redux';
class Write extends PureComponent {

    render(){
        return (
            <WriteWrapper>
                <div className="title">
                    <span className="author">
                        推荐作者
                    </span>
                    <span className="changeAuthor" >
                        <i className='iconfont spin'>&#xe615;</i>
                        换一批
                    </span>
                </div>
                <AuthorUl>
                        {this.props.authorList.map((item,index)=>{
                            return  <AuthorItem key={ item.id}>
                                        <img alt="" className="authorImg" src={item.authorImg} />
                                        <span className="authorName"> {item.authorName} </span>
                                        <span className="follow">+关注</span>
                                        <span className="authorDesc">{item.authorDesc}</span>
                                    </AuthorItem>
                        })}

                </AuthorUl>
                <LookForAll>
                    查看全部 >
                </LookForAll>
            </WriteWrapper>
        )
    }
}

const  mapToState=(state)=>({
    authorList:state.getIn(["Home","authorList"])&&state.getIn(["Home","authorList"]).toJS(),
})
export default connect(mapToState,null)(Write);