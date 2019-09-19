
import React ,{ PureComponent } from 'react';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import List from './components/List';
import Axios from 'axios';
import { connect } from 'react-redux';


/**
PureComponent
引入这个组件是为了与 immutable.js 配合和使用
如果没有配合immutable.js  建议使用 shouldComponentUpdate
方法

*/ 
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends PureComponent {
    // shouldComponentUpdate(){

    // }
    render (){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className="banner-img" src="//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll===true?<BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>:''
                }
                
            </HomeWrapper>
        );
    }
    componentDidMount(){
        Axios.get('/api/home.json')
        .then((res)=>{
            const result = res.data.data;
            const action = {
                type:'change_home_data',
                topicList:result.topicList,
                recommendList:result.recommendList,
                articleList:result.articleList
            }
            this.props.changeHomeData(action);
        }).catch((res)=>{
            console.log(res)
        });
        this.bindEvents();
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)

    }
    handleScrollTop(){
        window.scrollTo(0,0)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
    
    
}
const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    },
    changeScrollTopShow(e){
        // console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 400){
            const action = {
                type:'toggle_top_show',
                toggleTopShow:true
            }
            dispatch(action);
        }else{
            const action = {
                type:'toggle_top_show',
                toggleTopShow:false
            }
            dispatch(action);
        }
       
    }
});
const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

export default connect(mapState,mapDispatch)(Home);