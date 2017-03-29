import React, {Component, PropTypes} from 'react';


class BlogSection extends Component{ 
constructor(props, context) {
        super(props,context)
    }
    static contextTypes = {router: PropTypes.object.isRequired};

	render() {
		const {post} = this.props;
		return (
			<article>
					<div className="heading">
						<h2><a href={"#/blogs/"+post.id}>{post.blogTitle}</a></h2>
					</div>
					<div className="content">
						<img src="images/img1.jpg" width="250px" height="100px"/>
						<p>{post.description} [...]</p>
					</div>
					<div className="info">
						<p>By Admin on {post.creationtime} - <a href="#">01 Commnets</a></p>
					</div>
			</article>
			);
	}
}
export default BlogSection;