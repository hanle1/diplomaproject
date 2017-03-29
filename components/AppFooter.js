import React, {Component, PropTypes} from 'react';
import Section from './section';
import IconButton from 'material-ui/IconButton';
import * as Colors from './colors';
const footer={
			marginTop: "6%",
			marginRight: "0%", marginBottom: "3%",
			textAlign: 'center',
			backgroundColor: Colors.grey900,
		}
const a={
			color: "darkWhite"
		}
const p={
			margin: '0 auto',
			padding: 0,
			color: Colors.lightWhite,
			maxWidth: 335
		}
class AppFooter extends Component{

	render() {



		return (
			<Section style={footer}>
				<p style={p}>Code Crafted by Song Zhou &copy; 2016</p>
				<a href="https://github.com/hanle1">github link</a>
			</Section>
		);
	}
}

export default AppFooter;
