export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_RECEIVE = 'POSTS_RECEIVE';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export function requestPosts () {
    return {
        type: POSTS_REQUEST
    }
}

export function receivePosts (json) {
    return {
        type: POSTS_RECEIVE,
        json: json
    }
}

export function fetchPosts () {
    return function (dispatch) {
        dispatch(requestPosts());

        return fetch('/posts.json')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
            .catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }
}