
import * as constans from './constants';
import Axios from 'axios';
import { fromJS } from 'immutable';

const addHomeList = (list)=>({
    type:constans.ADD_HOME_LIST,
    list:fromJS(list)

})

export const getMoreList = ()=>{
    return (dispatch)=>{
        Axios.get('/api/homeList.json')
        .then((res)=>{
            const result = res.data.data;
            console.log(result)
            dispatch.addHomeList(result);
        }).catch((res)=>{
            console.log(res)
        })
    }
    
}