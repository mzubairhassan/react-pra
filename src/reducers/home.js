import * as actions from '../actions/home';

const initialState = {
    isLoading: false,
    jsonAPI: []
    
}

const home = ( state = initialState, action ) => {

    const { type, payload } = action;
    
    

    switch(type){
        case actions.SENDING_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case actions.REQUEST_COMPLETE:
            return {
                ...state,
                isLoading: false,
                jsonAPI: payload
            }
        default:
            return state
    }

}

export default home;

