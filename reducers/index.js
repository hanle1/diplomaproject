import {combineReducers} from 'redux'
import {routeReducer, UPDATE_LOCATION} from 'redux-simple-router'
import {
    CLICK_TITLEBTN,
    RECEIVE_ARTICLE,
    REQUEST_ARTICLE,
    REQUEST_BLOG,
    SET_DIALOG_STATUS,
    REQUEST_COMMENT,
    REQUEST_MESSAGE
} from '../actions'

function replaceMessageStatus(state={
    messages:[]
},action){
    switch(action.type){
        case REQUEST_MESSAGE:
            return Object.assign({}, state, {
                messages: action.messages,
            })
        default:
            return state;
}}

function replaceBlogStatus(state={
    blogType:"none",
    blogContent:[]
},action){
    switch(action.type){
        case REQUEST_BLOG:
            return Object.assign({}, state, {
                blogType: action.blogType,
                blogContent: action.blogContent,
            })
        default:
            return state;
}}

function commentAreaStatus(state={
    comments:[]
},action){
    switch(action.type){
        case REQUEST_COMMENT:
            return Object.assign({}, state, {
                comments: action.comments,
            })
        default:
            return state;
    }
}
function titleBtnStatus(state={
    isopen: false
}, action) {
    switch(action.type) {
        case CLICK_TITLEBTN:
            return Object.assign({}, state, {
                isopen: action.isopen,
            })
        default:
            return state
    }
}
function dialogBtnStatus(state={
    isopen:false
},action){
    switch(action.type){
        case SET_DIALOG_STATUS:
            return Object.assign({},state,{
                isopen:action.isopen,
            })
        default:
            return state
    }
}
function article(state={
    isFetching: false
}, action) {
    switch(action.type) {
        case REQUEST_ARTICLE:
            return Object.assign({}, state, {
                isFetching: true,
                [action.articleName]: ''
            })
        case RECEIVE_ARTICLE:
            return Object.assign({}, state, {
                isFetching: false,
                [action.articleName]: action.articleContent
            })
        default:
            return state
    }
}

function update(state="update", action) {
    switch(action.type) {
        case UPDATE_LOCATION:
            return 'update'
        default:
            return state
    }
}

// export default function todoApp(state, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }

const rootReducer = combineReducers({
    titleBtnStatus,
    update,
    article,
    replaceBlogStatus,
    commentAreaStatus,
    dialogBtnStatus,
    replaceMessageStatus,
    routing: routeReducer
})

export default rootReducer