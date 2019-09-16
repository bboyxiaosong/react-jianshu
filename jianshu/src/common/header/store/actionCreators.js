
import * as constans from './constants';
import Axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data)=>({
    type:constans.CHANGE_LIST,
    data:fromJS(data)
});

export const searchFocus = ()=>({

    type:constans.SEARCH_FOUCUS

})
export const searchBlur = ()=>({
    type:constans.SEARCH_BLUR
});

export const getList =()=>{

    return (dispatch)=>{
        //console.log('1')
        Axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            console.log(data.data)
            dispatch(changeList(data.data));

        }).catch((error)=>{
            console.log('as')
        })
    }
}

