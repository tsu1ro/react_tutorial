import React from 'react'

class CommentBox extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className='commentBox'>
				<h2>Comments</h2>
				<CommentList />
				<CommentForm />
				hello world
			</div>
		);
	}
}

React.render(
	<CommentBox />,
	document.getElementById('container')
);

