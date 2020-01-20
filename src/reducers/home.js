import * as actions from '../actions';

const initialState = {
    isLoading: false,
    homeData: {}
}

const home = ( state = initialState, action ) => {

    const { type, payload } = action;
    const { homeData } = state;

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
                homeData: payload
            }
    }

}

export default home;

