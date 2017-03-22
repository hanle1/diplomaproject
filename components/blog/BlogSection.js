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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus. Nulla sed nisl mauris, id tristique tortor. Sed iaculis dapibus urna nec dictum. Morbi rutrum vulputate est sed faucibus. Nulla sed nisl mauris, id tristique tortor. Sed iaculis dapibus urna nec dictum [...]</p>
					</div>
					<div className="info">
						<p>By Admin on December 01, 2012 - <a href="#">01 Commnets</a></p>
					</div>
			</article>
			);
	}
}
export default BlogSection;