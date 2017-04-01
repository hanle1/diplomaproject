import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ActionLabel from 'material-ui/svg-icons/action/label';
import {requsetBlog} from '../../actions'
import {connect} from 'react-redux';
import PopularBlogsArea from '../common/PopularBlogsArea'

const SelectableList = makeSelectable(List);

class BlogSider extends Component{ 
constructor(props, context) {
        super(props,context)
        this.state={
        	categories:[]
        }
    }
    static contextTypes = {router: PropTypes.object.isRequired};

    componentDidMount(){
    	let ctx = this;
    	axios.get(config.remote_url+"/blogs/types").then(res=>{
    		ctx.setState({categories: res.data});
    	}) 
    }
    clickLink(value) {
		const {dispatch} = this.props
		dispatch(requsetBlog(value))
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
								value={"/" + item} key={Math.random()}leftIcon={<ActionLabel />
							}/>
									)
							})}								
							</SelectableList>
						</div>
					</div>
					<div className="box">
						<div className="heading"><h2>Popular Post</h2></div>
						<PopularBlogsArea/>
					</div>
				</div>
			</div>
		)
    }
}
export default connect()(BlogSider)

