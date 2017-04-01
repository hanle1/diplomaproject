import React, {Component, PropTypes} from 'react';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/divider'
import Discuss from './Discuss'
import axios from 'axios';
import config from '../config/config.json'
import {connect} from 'react-redux'
import {requsetComment} from '../actions'

var commentStyle={
	
	"border": "3px solid #E0E0E0"
}
class CommentArea extends Component{ 
	constructor(props) {
        super(props);
    }
	msgClick=()=>{
		var ctx = this;
		var message = document.getElementById('message').value;
	　　if (message !== null && message !== undefined && message !== '') {
		axios.post(config.remote_url+"/comment/add",
			{blogId:this.context.id,
			content:message},
			{headers : {
       		 'Content-Type' : 'text/plain; charset=UTF-8'
    		}})
			.then(function (response) {
				const {dispatch} = ctx.props
				dispatch(requsetComment(ctx.context.id)) 
				alert(response.data);
			})	
			
			document.getElementById('message').value=""		
	　　}else{
			alert('Please enter chat content ')
		}
		
	}


	componentDidMount(){
		const {dispatch} = this.props
		dispatch(requsetComment(this.context.id))
	}
	render(){
		const {comments} = this.props 
		console.log(comments)//
		return(<div style={commentStyle}>
				<hr style={{height:1,border:0,color:"#D5D5D5"}}/>
				<Divider/><br/>
				<h1 style={{"paddingLeft":"15px","color":"#2196F3"}}>评论列表</h1>
				<hr style={{"height":"3px","border":"none","borderTop":"5px ridge green"}}/>
				{comments.map(item => {
						return (
				<Discuss replyMessages={item} key={item.comment.id}/>
					)})}
				<div className="basic-grey">
			        <h1>leave a message:
			        <span>Please fill all the texts in the fields.</span>
			        </h1>
			        <span>Message :</span>
			        <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
			        <label>
			        <span>&nbsp;</span>
			        <input type="button" className="button" onClick={this.msgClick} value="Send" />
			        </label>
			    </div>					
			</div>)
	}
}
function mapStateToProps(state) {
    const {commentAreaStatus} = state
    return {
        comments: commentAreaStatus.comments
    }
}
CommentArea.contextTypes = {
  id: React.PropTypes.string,
};
export default connect(mapStateToProps)(CommentArea)