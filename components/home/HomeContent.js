import React, {
	Component,
	PropTypes
} from 'react';
import axios from 'axios';
import config from '../../config/config.json'
import BlogSection from '../blog/BlogSection'
// import Player from '../music/Player'
import ReactAudioPlayer from 'react-audio-player';

class HomeContent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			blogs: []
		}
	}
	componentDidMount() {
		let ctx = this;
		axios.get(config.remote_url + "/blog/sort/react").then(res => {
			ctx.setState({
				blogs: res.data
			});
		})
	}
	render() {
		return(
			<div>
				{
				this.state.blogs.map(item => {
					return ( < BlogSection key = {
							Math.random()
						}
						post = {
							item
						}
						/> 
					)
				})
				}
			</div>)
		}
	}
	export default HomeContent;