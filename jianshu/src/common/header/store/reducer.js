import * as constans from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
    focused:false,
    list:[]
});

export default (state = defaultState,action)=>{
    // if(action.type === constans.SEARCH_FOUCUS){
    //     return state.set('focused',true);
    //     // return {
    //     //     focused:true
    //     // };
    // }
    // if(action.type === constans.SEARCH_BLUR){
    //     return state.set('focused',false);
    //     // return {
    //     //     focused:false
    //     // };
    // }
    // if(action.type === constans.CHANGE_LIST){
    //     console.log(action.data)
    //     console.log(action.data._tail.array)
    //     const list = action.data._tail.array;
    //     return state.set('list',list);
    // }
    // return state;

    switch(action.type){
        case constans.SEARCH_FOUCUS :
            return state.set('focused',true);
        case constans.SEARCH_BLUR :
            return state.set('focused',false);
        case constans.CHANGE_LIST :
            const list = action.data._tail.array;
            return state.set('list',list);
        default:
            return state;

    }

}
