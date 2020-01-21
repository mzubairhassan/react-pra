export const SENDING_REQUEST = 'SENDING_REQUEST'
export const REQUEST_COMPLETE = 'REQUEST_COMPLETE'
export const REQUEST_ERROR = 'REQUEST_ERROR'

export const getHomeData = (cityname) => dispatch => {

    let apiKey = '6463dd8e077e37251fa23a3f0fcae9a5';
    dispatch({type: SENDING_REQUEST});

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => dispatch({type: REQUEST_COMPLETE, payload: json}))
    .catch(err => dispatch({type: REQUEST_ERROR, payload: err}))


    

}
