import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from 'lodash'
// action mist be a plain object

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    _.chain(getState().posts.data)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}


export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get('/users');
        dispatch({type: 'FETCH_USERS', payload: response})
    }
}

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceHolder.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER', payload: response.data})
    }
}
