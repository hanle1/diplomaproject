import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionLabel from 'material-ui/svg-icons/action/label';
import { routeActions } from 'redux-simple-router'
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux'
import Divider from 'material-ui/divider'
import {requsetBlog} from '../actions'

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const SelectableList = makeSelectable(List);
class BlogPageSlider extends Component{ 
	constructor(props,context) {
	    super(props,context);
	    this.state = {open: true};
	}
	static contextTypes = {router: PropTypes.object.isRequired};
    clickLink(value) {
        this.context.router.push("/blog/sort" + value)
    }
	render(){
		return(
		<div>
		    <Drawer open={this.state.open} 
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
	        </SelectableList>
	        <Divider /> <br />

				<SelectableList onChange={(evt, value) => {
					window.open(value);
				}}>
					<Subheader>Links</Subheader>
					<ListItem primaryText="GitHub" value="https://github.com/hanle1" leftIcon={<ActionLabel />} />
				</SelectableList>
	        </Drawer>
	  	</div>
	)}
}

    
export default connect()(BlogPageSlider)