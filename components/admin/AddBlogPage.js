import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import config from '../../config/config.json'
var blogContentStyle ={
	"paddingLeft":"24%",
	"paddingRight":"4%"
}
class AddBlogPage extends Component{
	constructor(props) {
		super(props)
	}

	save(){
		axios.post(config.remote_url+"/blogs/add",
			{blogTitle:"arr[1]",blogDescroption:"dw",blogContent:"",type:""},
			{headers : {
       		 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    		}})
			.then(function (response) {
			console.log(response.data);
			})
	}
	render(){
		return(
			<div style={blogContentStyle}>
			<TextField
		      hintText="博客名称"
		    ></TextField><br />
		    <TextField
		      hintText="博客描述"
		    ></TextField><br />
			<TextField
		      hintText="博客内容"
		      multiLine={true}
		      fullWidth={true}
		      rows={10}
		      rowsMax={100}
		    ></TextField><br />
		    <RaisedButton style={{"width":"100%"}} label="保存添加" onTouchTap={(evt) =>{this.save()}}/>
			</div>
			)
	}
}
export default AddBlogPage