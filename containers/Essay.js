import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import EssayContent from '../components/essay/EssayContent'
import EssaySilder from '../components/essay/EssaySilder'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Essay extends Component{ 
	render(){
		return(
			<section id="content">
				<div className="wrap-content">
				<div className="row block">
				<div id="main-content" className="col-2-3">
					<div className="wrap-col">
						<EssayContent/>			
					</div>
				</div>
					<EssaySilder/>
				</div>
				</div>
			</section>
	)}
}

export default Essay;