import React from 'react'
import Comment from './Comment'

export default class Comments extends React.Component {
  submitHandler (event) {
    event.preventDefault()
    const {postId} = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render () {
    const {postComments} = this.props
    
    return (
      <div>
        {postComments.map((comment, i) => {
          return (
            <Comment 
              key={i}
              comment={comment} 
              index={i} 
              {...this.props} />
          )
        })}
        <form ref='commentForm' onSubmit={this.submitHandler.bind(this)}>
          <input 
            type='text' 
            ref='author' 
            placeholder='author' />
          <input 
            type='text' 
            ref='comment' 
            placeholder='comment' />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}
