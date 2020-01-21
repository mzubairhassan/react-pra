import * as actions from '../actions/home';

const initialState = {
    isLoading: false,
    weatherData: {
        name: 'Nill',
        weatherDesc: 'Nill',
        feels_like: 0,
        temp: 0,
        windSpeed: 1

    },
    error: 'Nill'
    
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
                name: payload.name,
                weatherDesc: payload.weather[0].description,
                feels_like:  (payload.main.feels_like - 32) * 5 / 9,
                temp: (payload.main.temp  - 32) * 5 / 9,
                windSpeed: payload.wind.speed

            }
        case actions.REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            return state
    }

}

export default home;

