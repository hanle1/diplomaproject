import fetch from 'isomorphic-fetch'
import marked from 'marked'
import highlight from 'highlight.js'
import axios from 'axios';
export const CLICK_TITLEBTN = 'CLICK_TITLEBTN'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export const REQUEST_BlOG_ITEMS = 'REQUEST_BlOG_ITEMS'
export const REQUEST_BLOG = 'REQUEST_BLOG'
export const SET_DIALOG_STATUS="SET_DIALOG_STATUS"
marked.setOptions({
    highlight: code => highlight.highlightAuto(code).value
})

export function clickTitleBtn(isopen) {
    return {
        type: CLICK_TITLEBTN,
        isopen
    }
}
export function setAddDialogStatus(isopen){
    return{
        type:SET_DIALOG_STATUS,
        isopen
    }
}

export function receiveArticle(articleName, articleContent) {
    return {
        type: RECEIVE_ARTICLE,
        articleName,
        articleContent: marked(articleContent)
    }
}
export function replacePageContent(blogType,blogContent){
    return{
        type: REQUEST_BLOG,
        blogType,
        blogContent
    }
}
export function requsetBlog(blogType){
    return (dispatch) => {
        return axios.get("http://localhost:8080/blogapp/blog/sort"+blogType)
        .then(res=>dispatch(replacePageContent(blogType,res.data))) 
    }
}
function fetchArticle(articleName) {
    return dispatch => {
        dispatch(requestArticle(articleName))
        return fetch(`https://raw.githubusercontent.com/fwon/fwon.github.io/master/app/articles/${articleName}.md`)
            .then(response => response.text())
            .then(content => dispatch(receiveArticle(articleName, content)))
    }
}
 
function shouldFetchArticle(state, articleName) {
    const article = state.article
    if (!article || !article[articleName]) {
        console.log(true);
        return true
    }
    return false
}

export function fetchArticleIfNeeded(articleName) {
    return (dispatch, getState) => {
        if (shouldFetchArticle(getState(), articleName)) {
            return dispatch(fetchArticle(articleName))
        }
    }
}