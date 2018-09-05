import React ,{PureComponent,Fragment} from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

class List extends PureComponent {
    render(){
        const {noteList,getMoreList,page}=this.props;
        
        return (
            <Fragment>
                {
                    noteList.map((item,index)=>(
                        <Link  key={item.id+index} to={"/detail/"+item.id} >
                        <ListItem >
                            <ListInfo>
                            <h3 className="title">{item.title}</h3>
                            <p className="desc">{item.desc}</p>
                            </ListInfo>              
                            <img className="pic"  alt={item.alt} src={item.imgUrl}/>
                        </ListItem>
                        </Link>
                    ))
                } 
                <LoadMore onClick={()=>{getMoreList(page)}} >
                    加载更多内容
                </LoadMore>
            </Fragment>           
        )
    }
}
const mapStateToProps=(state)=>({
    noteList:state.getIn(["Home","noteList"]).toJS(),
    page:state.getIn(['Home',"notePage"]),
})
const mapDispatch=(dispatch)=>({
   
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }

})
export default connect(mapStateToProps,mapDispatch)( List);