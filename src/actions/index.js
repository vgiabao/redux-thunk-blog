import jsonPlaceHolder from "../apis/jsonPlaceHolder";
// action mist be a plain object
export const fetchPosts = async () => {
    return async  (dispatch) => {
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    }
}

