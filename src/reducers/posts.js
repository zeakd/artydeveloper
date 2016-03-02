import { POSTS_REQUEST, POSTS_RECEIVE } from '../actions/posts';

export default function posts(state = {
    isFetching : false,
    items : []
}, action) {
    switch (action.type) {
        case POSTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case POSTS_RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.json
            })

        default: 
            return state;
    }
}