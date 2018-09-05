import styled from 'styled-components';
export const DetailWrapper=styled.div`
    overflow:hidden;
    width:620px;
    margin:0 auto;
    padding-bottom:100px;;

`
export const Header =styled.div`
margin:50px 0 20px 0;
line-height:44px;
font-size:34px;
color:#333;
font-weight:bold;
font-family:Kai,Kaiti SC,KaiTi,BiauKai;


`
export const ImgWrapper=styled.div`
position: fixed;
top: 80px;
right: 50%;
margin-right: -560px;
width: 180px;
height: 260px;
background-image: url(https://cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png);
background-repeat: no-repeat;
background-size: contain;
background-position: 50%;
cursor:pointer;
`
export const Content=styled.div`
color:#2f2f2f;
 img{
     width:100%;

 }
 p{
     margin:20px 0;
     font-size:16px;
     line-height:34px;
 }
`