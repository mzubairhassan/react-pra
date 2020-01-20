export const SENDING_REQUEST = 'SENDING_REQUEST'
export const REQUEST_COMPLETE = 'REQUEST_COMPLETE'

export const getCategories = () => dispatch => {

    dispatch({type: SENDING_REQUEST});

    let myData = {
        name: "m Zubair ul hassan"
    }

    dispatch({type: REQUEST_COMPLETE, payload: myData});

}
