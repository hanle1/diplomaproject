import React, {Component, PropTypes} from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import config from '../../config/config.json'
import {connect} from 'react-redux'


class AddBlogContent extends Component{
	constructor(props,context) {
    super(props,context);
    this.state = {
      open: false,
      blogs:[]
	  };
	}
	static contextTypes = {router: PropTypes.object.isRequired};

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

	  handleRequestClose = () => {
	    this.setState({
	      open: false,
	    });
	  };

	componentDidMount() {

    }
    addBlog(type){
    	this.context.router.push("/admin/addblog/"+type)
    }
	clickItem(value){
	  	var arr=value.split("/")
	  	if(arr[0]=="edit"){
	  		this.context.router.push("/admin/edit/" + arr[1])
	  	}
	  	else{
	  		axios.post(config.remote_url+"/blogs/"+arr[0],{id:arr[1]},{headers : {
       		 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    		}})
			.then(function (response) {
			console.log(response.data);
			})
		}
	  }
	render(){
		const {blogs} = this.props
		return( 
	<div>
	<Table style={{"marginLeft":"23%","width":"75%"}}>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>操作</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
    {blogs.map(item => {
						return (
		<TableRow>
        <TableRowColumn>{item.id}</TableRowColumn>
        <TableRowColumn>{item.blogTitle}</TableRowColumn>
        <TableRowColumn>{item.type}</TableRowColumn>
        <TableRowColumn>
	        <RaisedButton
	          onTouchTap={this.handleTouchTap}
	          label="操作"
	        />
			<Popover
	          open={this.state.open}
	          anchorEl={this.state.anchorEl}
	          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
	          targetOrigin={{horizontal: 'left', vertical: 'top'}}
	          onRequestClose={this.handleRequestClose}
	        >
	          <Menu  onItemTouchTap={(evt, menuItem) => {
                    this.clickItem(menuItem.key)}}>
	            <MenuItem primaryText="编辑" key={"edit/"+item.id}/>
	           	<MenuItem primaryText="删除" key={"delete/"+item.id}/>
	          </Menu>
	        </Popover>
        </TableRowColumn>
      	</TableRow>
 			)})}
    </TableBody>
  </Table>
  <RaisedButton style={{"marginLeft":"25%","marginRight":"5%","width":"70%"}} label="添加博客" onTouchTap={(evt) =>{this.addBlog(blogs[0].type)}}/>
  </div>)
	}
}
function mapStateToProps(state) {
    const {replaceBlogStatus} = state
    return {
        blogs: replaceBlogStatus.blogContent
    }
}
export default connect(mapStateToProps)(AddBlogContent)