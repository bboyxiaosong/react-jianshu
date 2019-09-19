
import Axios from 'axios';

import * as constants from './constants';

const changeDetail = (title,content)=>({
    type:constants.CHANGE_DETAIL,
    title,
    content

});

export const getDetail = (id)=>{
    return (dispatch)=>{
        Axios.get('/api/detail.json?id='+id).then((res)=>{
            console.log(res.data)
            const data = res.data.data;
            dispatch(changeDetail(data.title,data.content))
        })
    }
}