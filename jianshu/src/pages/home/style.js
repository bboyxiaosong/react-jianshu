
import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`

    width:625px;
    float:left;
    padding-left:15px;
    margin-top:35px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
   float:left;
   margin-left:18px;
   margin-bottom:18px;
   background-color:#f7f7f7;
   height:32px;
   padding-right:10px;
   line-height:32px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:4px;
   .topic-pic{
       margin-right:10px;
       display:block;
       float:left;
       width:32px;
       height:32px;
   }

`;
export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
    }
`;
export const ListInfo = styled.div`
   float:left;
   width:500px;
   .title{
       font-size:18px;
       line-height:27px;
       color:#333;
   }
   .desc{
    font-size:13px;
    line-height:24px;
    color:#999;
   }
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    margin:30px 0;
    line-height:40px;
    text-align:center;
    background-color:#5a5a5a;
    font-size:20px;
    color:#fff;
    border-radius:20px;
`;


export const RecommendWraper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`;
export const WriterWraper = styled.div`
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
`;
export const BackTop = styled.div`
    width:60px;
    border-radius:50%;
    height:60px;
    line-height:60px;
    text-align:center;
    position:fixed;
    right:100px;
    bottom:100px;
    font-size:16px;
    color:#fff;
    background:#000;
`;



