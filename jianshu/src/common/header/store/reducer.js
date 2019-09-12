import * as constans from './constants';

const defaultState = {
    focused:false
};

export default (state = defaultState,action)=>{
    if(action.type === constans.SEARCH_FOUCUS){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        return newState;
    }
    if(action.type === constans.SEARCH_BLUR){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        return newState;
    }
    return state
}
