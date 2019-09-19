import { fromJS } from 'immutable';
import * as constans from './constants';

const defaultState = fromJS({
    topicList:[
       
    ],
    articleList:[
       
    ],
    recommendList:[],
    articlePage:1,
    showScroll:false
});
const changeHomeData = (state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
    })
}
export default (state = defaultState , action)=>{
    switch(action.type){
        case 'change_home_data':
        return changeHomeData(state,action);
        case constans.ADD_HOME_LIST:
            // return state.set('articleList',state.get('articleList').concat(action.list))
            // console.log(state.nextPage)
            return state.merge({
                articleList:state.get('articleList').concat(action.list),
                articlePage:action.nextPage
            });
        case 'toggle_top_show':
            return state.merge({
                showScroll:action.toggleTopShow
            });
            
        default :
            return state;
    }
}