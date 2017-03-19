import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
	Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

class BlogCard extends Component{ 
constructor(props, context) {
        super(props,context)
    }
    static contextTypes = {router: PropTypes.object.isRequired};

	render() {
		const {post} = this.props;
		return (
			<div style={{
							marginLeft: 20,
							marginRight: 20,
							marginTop: "2%" }}>
			<Card>
				<CardActions style={{
									float:"right",
									marginRight: 20,
									marginTop: "2%" }}>
					<RaisedButton label="read" primary={true}
						onClick={() => {
							this.context.router.push("/blogs/" + post.id)
						}}/> <br/>
				</CardActions>
				<CardHeader
					style={{ width:"50%" }}
					title={post.blogTitle}
					subtitle={post.blogTitle}
					avatar={post.blogTitle} />
				<CardTitle title={post.blogTitle} style={{ fontSize: "16px", padding: "24px"}} />
				<CardText style={{ fontSize: "16px", padding: "24px"}}>{post.blogTitle}</CardText>
			</Card></div>);
	}
}
export default BlogCard;