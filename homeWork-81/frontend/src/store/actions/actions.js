import {axiosApi} from "../../axiosApi";

export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_END = 'REQUEST_END';
export const CHANGE_HANDLER = 'CHANGE_HANDLER ';
export const postSuccess = (data) => {
    return {type: REQUEST_SUCCESS, data}
};
export const request = () => {
    return {type: REQUEST_START}
};
export const requestEnd = () => {
    return {type: REQUEST_END}
};

export const errorRequest = (err) => {
    return {type: REQUEST_ERROR, err}
};

export const postLink = (data) => {
    return async (dispatch) => {
        try {
            dispatch(request());
            const response = await axiosApi.post('/links', data);
            dispatch(postSuccess(response.data))
        } catch (e) {

        }

    }
};
export const changeHandler = (e) => {
    return {type: CHANGE_HANDLER, e}
};
export const getLink = (id) => {
    return async (dispatch) => {
        try {
            dispatch(request());
            await axiosApi.get('/links/' + id);
            dispatch(requestEnd());
        } catch (e) {
            dispatch(errorRequest(e))
        }

    }
};