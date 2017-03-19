import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
export default class TitleBar extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const {title} = this.props
        return (
            <h1 className="c-page-title">{title}</h1>
        )
    }
}