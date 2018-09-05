import  styled from 'styled-components';
import logopic from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png';

export const HeaderWrapper=styled.div`
position:relative;
height:56px;
border-bottom:solid 1px #f0f0f0;
z-index:1;
`
export const Logo=styled.div`
position:absolute;
top:0;
left:80px;
display:block;
width:100px;
height:56px;
background: url(${logopic}) 100% 100% no-repeat;
background-size:100% 100%;
`
export const Nav=styled.div`
width:960px;
height:100%;
margin:0 auto;

`
export const NavItem=styled.div`
height:100%;
width:auto;
line-height:56px;
padding:0 15px;
font-size:17px;
font-weight:500;
color:#333;
margin-right:20px;
.iconfont{
    display:inline-block;
    margin-right:5px;
    font-size:20px;
    text-algin:center;
    line-height:20px;
}
cursor:pointer;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.index{
        color:#ea6f5a;
    }

`;
export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    .other{
        position:absolute;
        font-size:20px;
        right:10px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:19px;
        line-height:30px;
        text-align:center;
        color:#000;
        &.focused{
            transition: background 1s ease;
            background:#777;
            color:#fff;
        }
        // &.icon-enter{
        //     transition:all 0.2s ease;
        // }
        // &.icon-enter-active{
        //     background:#777;
        //     color:#fff;
        // }
        // &.icon-exit{
        //     transition:all 0.2s ease;
        // }
        // &.icon-exit-active{
        //     color:#000;
        // }
        

    }
`
export const SearchInfo =styled.div`
position:absolute;
left:20px;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
cursor:pointer;
background:#fff;
`
export const SearchInfoTitle =styled.div`
margin:20px 0 15px 0 ;
cursor:pointer;
line-height:20px;
color:#969696;
font-size:13px;
`
export const SearchInfoSwitch=styled.span`
font-size:12px;
float:right;
cursor:pointer;
.spin{
    cursor:pointer;
    display:inline-block;
    font-size:12px;
    margin-right:8px;
    transition:all .2s ease-in;
    transform-origin:center center;

}
`
export const SearchList=styled.div`
overflow:hidden;
`
export const SearchListItem=styled.a`
display:block;
float:left;
line-height:20px;
padding:0 5px;
margin:0 10px 15px 0 ;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;

`


export const NavSearch =styled.input.attrs({placeholder:"搜索"})`
width:240px;
height:38px;
padding:0 40px 0 20px;
box-sizing:border-box;
margin:9px 0 0 20px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;

&::placeholder{
    color:#999;
}
&.focused{
    width:300px;
}
&.slide-enter{
    transition:all 0.2s ease;
}
&.slide-enter-active{
    width:320px;
}
&.slide-exit{
    transition:all 0.2s ease;
}
&.slide-exit-active{
    width:240px
}


`
export const Wrapper=styled.div`
position:absolute;
margin:0 0 0 10px;
top:0;
right:120px;
height:56px;
`
export const Button=styled.div`
float:right;
margin:9px 0px 0 10px;
padding:0 20px;
line-height:38px;
border-radius:19px;
font-size:14px;
border:1px solid #ec6149;
right:0;
height:38px;
cursor:pointer;
&.reg{
    color:#ec6149;
}
&.writing{
    color:#fff;
    background:#ec6149;
}
`





