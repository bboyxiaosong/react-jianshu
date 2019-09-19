
import * as constans from './constants';
import Axios from 'axios';
import { fromJS } from 'immutable';

const addHomeList = (list,nextPage)=>({
    type:constans.ADD_HOME_LIST,
    list:fromJS(list),
    nextPage:fromJS(nextPage)

})

export const getMoreList = (page)=>{
    return (dispatch)=>{
        Axios.get('/api/homeList.json?page='+page)
        .then((res)=>{
            const result = res.data.data.articleList;
            // console.log(result,page+1)
            dispatch(addHomeList(result,page+1));
        }).catch((res)=>{console.log(res)});
    }
    
}