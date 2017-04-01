import React, {Component, PropTypes} from 'react'
import axios from 'axios';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionLabel from 'material-ui/svg-icons/action/label';
import Divider from 'material-ui/divider'
import AddBlogDialog from './AddBlogDialog'
import {setAddDialogStatus,requsetBlog} from '../../actions'
import {connect} from 'react-redux';

const SelectableList = makeSelectable(List);

class AdminHome extends Component {
	constructor(props,context) {
	    super(props,context);
	    this.state={
	    	ready: false,
	    }
	}
	static contextTypes = {router: PropTypes.object.isRequired};
    componentDidMount() {
    	let ctx = this;
    	// axios.post(config.remote_url+"/login",{
    	// 	userCode:document.getElementById("userCode").value,
    	// 	adminPassword:document.getElementById("adminPassword").value}).then(res=>{
    	// 	ctx.setState({ready: res.data});
    	// }) 	

	}
	clickLink(value){
		const {dispatch} = this.props
		if(value==="/addBlogType")
			dispatch(setAddDialogStatus(true))
		else
			{
			this.context.router.push("/admin/manage" + value)
			dispatch(requsetBlog(value))
		}
	}
	render(){
		return(<div>
			<Drawer open={true} 
			containerStyle={{ 
		     "width":"20%",
		     "height":"100%",
		     zIndex: 1,
		     paddingTop:64
		    }}>
		    <SelectableList onChange={(evt, value) => {
                    this.clickLink(value);
                }} value={location.pathname}>
	            <Subheader>Categories</Subheader>
	            {this.props.categories.map(item => {
						return (
							<ListItem
								primaryText={item}
								value={"/" + item} leftIcon={<ActionLabel />
							}/> );
					})}
			<Divider style={{paddingLeft:4}}/>
			<ListItem primaryText={"添加新类型"} value={"/addBlogType"} leftIcon={<ActionLabel />}/>	
	        </SelectableList>
	        </Drawer>
	        <AddBlogDialog/>
			</div>)
	}
}
export default connect()(AdminHome)
