// import { combineReducers } from 'redux';
/**
 * 安装的redux-immutable 里边也有一个combineReducers
 * 上面的可以注释掉
 * import { combineReducers } from 'redux-immutable';
 *  */ 
import { combineReducers } from 'redux-immutable';


import { reducer as  headerReducer} from '../common/header/store';

import {reducer as homeReducer}   from '../pages/home/store';

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
});

export default reducer;