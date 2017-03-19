import React, {Component, PropTypes} from 'react'
import BlogCard from '../../components/BlogCard'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AdminHome from '../../components/admin/AdminHome'
import axios from 'axios';
import config from '../../config/config.json'

const style = {
  "width": "100%",
  margin: 20,
  display: 'inline-block',
};
class AdminPage extends Component {
	onClickController() {
		let ctx = this;
    	// axios.post(config.remote_url+"/login",{
    	// 	userCode:document.getElementById("userCode").value,
    	// 	adminPassword:document.getElementById("adminPassword").value}).then(res=>{
    	// 	ctx.setState({categories: res.data});
    	// }) 
    }
    constructor(props,context) {
	    super(props);
	    this.state={
	    	ready: true,
	    	categories:[]
	    }
	}

    componentDidMount() {
    	let ctx = this;
    	axios.get(config.remote_url+"/testd").then(res=>{
    		ctx.setState({categories: res.data});
    	}) 	

	}
	render(){
		if (this.state.ready)
		return(
			<div>
				<AdminHome categories ={this.state.categories}/>
				{this.props.children}
			</div>
			);
		else{
			return(
				<div>
			<Paper style={style} zDepth={1} >
			<TextField hintText="userCode"
			id ="userCode"
		    /><br />
		    <br />
		    <TextField
		      id="adminPassword"
		      hintText="password"
		      type="password"
		    /><br />
    		<RaisedButton label="登录" fullWidth={true} onClick={e => this.onClickController()} />
			</Paper>
			</div>)
		}
	}
}
export default AdminPage