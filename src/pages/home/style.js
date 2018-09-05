import styled from 'styled-components';

export  const  HomeWrapper =styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`;

export  const  HomeLeft =styled.div`
width:625px;
margin-left:15px;
padding-top:30px;
float :left;

.banner-img{
    width:625px;
    height:270px
}
`;
export  const  HomeRight =styled.div`
width:280px;
float:right;
margin:0px auto;
padding-top:20px;
`;
export const TopicWrapper=styled.div`
    overflow:hidden;
    padding:20px 0 10px 0 ;
    border-bottom:1px solid #f0f0f0;

`;
export const TopicItem=styled.div`
    float:left;
    padding:0px 10px 0px 0 ;
    margin:0 20px 20px 0;
    background:#f7f7f7;
    height:34px;
    line-height:32px;
    border:1px solid #dcdcdc;
    font-size:14px
    color:#000;
    border-radius:4px;
    .top-pic{
        display:block;
        background:#f7f7f7;
        margin-right:10px
        width:34px;
        height:34px;
        float:left;
    }
`;

export  const  ListItem=styled.div`
overflow:hidden;
padding:20px 0;
border-top:1px solid #dcdcdc;
border-bottom:1px solid #dcdcdc;
.pic{
    width:120px;
    height:100px;
    float:right;
    display:block;
    border-radius:10px;
}
`
export const ListInfo=styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.desc{
    line-height:24px;
    color:#999;
    font-size:13px;
}
`




//recommend
export const ImgWrapper=styled.div`
height:auto;
width:280px;
z-index:20;
.img-right{
    display:block;
    width:100%;
    height:50px;
    padding:5px;

}

`

export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    cursor:pointer;
    border-radius:20px;
`

//返回顶部
export const BackTop= styled.div`
position:fixed;
right:50px;
bottom:20px;
width:60px;
height:60px;
font-size:12px;
line-height:60px;
text-align:center;
background:#f7f7f7;
color: #333;
cursor:pointer;
`
//二维码logo

export const DownLoadLogo=styled.div`
width:280px;
height:50px;
//overflow:hidden;
position:relative;
margin-top:15px;
`
export const LogoBig=styled.div`
width:200px;
height:200px;
position:absolute;
bottom:65px;
border-radius:5px;
border: 1px solid #564646;
left:50%;
margin-left:-100px;
background:#fff url(//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png) no-repeat center center;
background-size:80% 80%;
display:block;

`

export const Logo=styled.a`
display:block;
width:60px;
float:left;
margin-left:20px;
margin-right:10px;
height:60px;
border: 1px solid #f0f0f0;
border-radius: 6px;
    background:url(//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png) no-repeat;
    background-size:100% 100%;
`
export const TextInfo=styled.div`
    float:right;
    width:170px;
    margin-top:10px;
    .title{
        font-size: 15px;
        color: #333;
    }
    .desc{
        margin-top: 10px;
        font-size: 13px;
        color: #999;
    }
`

//作者列
export const WriteWrapper=styled.div`
width:280px;
height:auto;
margin-top:50px;
margin-left:10px;
.title{
width:270px;
height:20px;
overflow:hidden;
font-size: 14px;
color: #969696;
line-height:20px;
    .author{
        float:left;
    }
    .changeAuthor{
        float:right;

    }      
}
`

export const AuthorUl=styled.ul`
width:270px;
margin-top:10px;

`

export const AuthorItem= styled.li`
width:100%;
height:50px;
margin-top:15px;
text-algin:center;
overflow:hidden;
    .authorImg{
        float:left;
        border-radius:50%;
        width:50px;
        height:50px;
        
    }
    .follow{
        float: right;
        top:0
        margin-top:-10px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .authorName{
        text-indent:10px;
        padding-top: 5px;
        margin-right: 50px;
        width:200px;
        font-size: 14px;
        display: block;
    }
    .authorDesc{
        text-indent:10px;
        margin-top:10px;
        display:block;
        font-size: 12px;
        color: #969696;
    }
    
`
export  const LookForAll=styled.div`
margin-top:20px;
    width:270px;
    padding: 7px 7px 7px 12px;
    text-align:center;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
cursor:pointer;

`