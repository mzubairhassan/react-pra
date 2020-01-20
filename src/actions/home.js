export const SENDING_REQUEST = 'SENDING_REQUEST'
export const REQUEST_COMPLETE = 'REQUEST_COMPLETE'

export const getHomeData = () => dispatch => {

    dispatch({type: SENDING_REQUEST});

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => dispatch({type: REQUEST_COMPLETE, payload: json}))


    

}
