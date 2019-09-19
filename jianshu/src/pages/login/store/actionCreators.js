
import * as constans from './constants';
import Axios from 'axios';
// import { fromJS } from 'immutable';

const changeLogin = ()=>({
    type:constans.CHANGE_LOGIN,
    value:true
})

export const login = (account,  password)=>{
    return (dispatch)=>{
        Axios.get('/api/login.json?account='+account+'&password='+password)
        .then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                console.log(res,'登录失败')
            }
        }).catch((error)=>{
            console.log(error)
        });
    }
}
export const logout = ()=>({
    type:constans.CHANGE_LOGOUT,
    value:false
})