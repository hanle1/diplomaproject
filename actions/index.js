import fetch from 'isomorphic-fetch'
import marked from 'marked'
import highlight from 'highlight.js'
import axios from 'axios';
import config from '../config/config.json';
export const CLICK_TITLEBTN = 'CLICK_TITLEBTN'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export const REQUEST_BLOG = 'REQUEST_BLOG'
export const SET_DIALOG_STATUS="SET_DIALOG_STATUS"
export const REQUEST_COMMENT="REQUEST_COMMENT"
export const REQUEST_MESSAGE = "REQUEST_MESSAGE"
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
function requestCommentMsg(comments){
    return{
        type: REQUEST_COMMENT,
        comments
    }
}
export function requsetComment(blogId){
    return (dispatch) => {
        return axios.get(config.remote_url+'/comment/'+blogId+'/comments')
        .then(res=>dispatch(requestCommentMsg(res.data))) 
    }
}

function requsetMessageMsg(messages){
    return{
        type: REQUEST_MESSAGE,
        messages
    }
}
export function requsetMessages(){
    return (dispatch) => {
         return axios.get(config.remote_url+"/message/all")
        .then(res=>dispatch(requsetMessageMsg(res.data))) 
    }
}

