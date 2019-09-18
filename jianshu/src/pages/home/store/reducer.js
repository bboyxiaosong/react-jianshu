import { fromJS } from 'immutable';
import * as constans from './constants';

const defaultState = fromJS({
    topicList:[
       
    ],
    articleList:[
       
    ],
    recommendList:[
       

    ]
});

export default (state = defaultState , action)=>{
    switch(action.type){
        case 'change_home_data':
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
        case constans.ADD_HOME_LIST:
            return state.set('articleList',state.get('articleList').concat(action.list))
        default :
            return state;
    }
}