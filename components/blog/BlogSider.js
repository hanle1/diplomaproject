import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ActionLabel from 'material-ui/svg-icons/action/label';

const SelectableList = makeSelectable(List);

class BlogSider extends Component{ 
constructor(props, context) {
        super(props,context)
        this.state={
        	categories:[]
        }
    }
    componentDidMount(){
    	let ctx = this;
    	axios.get(config.remote_url+"/testd").then(res=>{
    		ctx.setState({categories: res.data});
    	}) 
    }
    static contextTypes = {router: PropTypes.object.isRequired};
    clickLink(value) {
        const {dispatch,categories} = this.props
        this.context.router.push("/blog/sort" + value)
    }
    render() {
    	return(
 			<div id="sidebar" className="col-1-3">
				<div className="wrap-col">
					<div className="box">
						<div className="heading"><h2>categories</h2></div>
						<div className="content">
							<SelectableList onChange={(evt, value) => {
				                    this.clickLink(value);
				                }} value={location.pathname}>
							{this.state.categories.map(item => {
								return (
									<ListItem
								primaryText={item}
								value={"/" + item} leftIcon={<ActionLabel />
							}/>
									)
							})}								
							</SelectableList>
						</div>
					</div>
					<div className="box">
						<div className="heading"><h2>Popular Post</h2></div>
						<div className="content">
							<div className="post">
								<img src={require("../../img/img4.jpg")} style={{"width":"50px"}}/>
								<h4><a href="#">Lorem ipsum dolor sit</a></h4>
								<p>November 11 ,2012</p>
							</div>
							<div className="post">
								<img src={require("../../img/img5.jpg")} style={{"width":"50px"}}/>
								<h4><a href="#">Lorem ipsum dolor sit</a></h4>
								<p>November 11 ,2012</p>
							</div>
							<div className="post">
								<img src={require("../../img/img1.jpg")} style={{"width":"50px"}}/>
								<h4><a href="#">Lorem ipsum dolor sit</a></h4>
								<p>November 11 ,2012</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
    }
}
export default BlogSider;