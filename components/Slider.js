import React, {Component, PropTypes} from 'react'
import {clickTitleBtn} from '../actions'
import { routeActions } from 'redux-simple-router'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Subheader from 'material-ui/Subheader';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/divider'
import ActionLabel from 'material-ui/svg-icons/action/label';
import { createHashHistory } from 'history'
const history = createHashHistory()

var drawStyle={ 
             "height":"100%",
            }
const SelectableList = makeSelectable(List);

class Slider extends Component {
    constructor(props) {
        super(props)
        this.close = this.close.bind(this)
    }
    close(){
        const {dispatch} = this.props
        dispatch(clickTitleBtn(false))
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
     clickLink(url) {
        console.log(history)
        const {dispatch} = this.props
        dispatch(clickTitleBtn(false))
        history.push(url)
    }
      render() {
        return (
            <Drawer containerStyle={drawStyle} open={this.props.isopen} docked={false} onRequestChange={this.close} >
            <SelectableList onChange={(evt, value) => {
                    this.clickLink(value);
                }} value={location.pathname}>
            <Subheader>Categories</Subheader>
            <ListItem
                primaryText="主页"
                value="" leftIcon={<ActionLabel />}/>
            <ListItem
                primaryText="博文"
                value="/blog" leftIcon={<ActionLabel />}/>    
            <ListItem
                primaryText="联系我"
                value="/contact" leftIcon={<ActionLabel />}/>
            </SelectableList>
            <Divider /> <br />
            <SelectableList onChange={(evt, value) => {
                    window.open(value);
                }}>
                    <Subheader>Links</Subheader>
                    <ListItem primaryText="GitHub" value="https://github.com/RoyTimes" leftIcon={<ActionLabel />} />
                    <ListItem primaryText="聚力星系BBS" value="http://stzone.org" leftIcon={<ActionLabel />} />
                </SelectableList>
            </Drawer>
        )
}}
 Slider.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };

export default connect()(Slider)