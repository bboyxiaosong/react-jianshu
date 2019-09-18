
import React ,{ Component } from 'react';
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import List from './components/List';
import Axios from 'axios';
import { connect } from 'react-redux';


import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
import { from } from 'rxjs';

class Home extends Component {
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
            })
        
    }
    
    
}
const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
});

export default connect(null,mapDispatch)(Home);