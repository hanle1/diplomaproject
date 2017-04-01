import React, {Component, PropTypes} from 'react';


class BlogSection extends Component{ 
constructor(props, context) {
        super(props,context)
    }

	render() {
		const {post} = this.props;
		return (
			<article>
					<div className="heading">
						<h2><a href={"#/blogs/"+post.id}>{post.blogTitle}</a></h2>
					</div>
					<div className="content">
						<img src="https://raw.githubusercontent.com/hanle1/note/master/blog/img3.jpg" width="250px" height="100px"/>
						<p>{post.description} [...]</p>
					</div>
					<div className="info">
						<p>By Admin on {post.creationtime} </p>
					</div>
			</article>
			);
	}
}
export default BlogSection;