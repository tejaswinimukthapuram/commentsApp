import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const initialCommentsList = []

// Write your code here
class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    name: '',
    text: '',
    count: 0,
  }

  onAddComment = event => {
    event.preventDefault()

    const {name, text} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      text,
      profileLetter: name[0],
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      text: '',
    }))
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onTextChange = event => {
    this.setState({text: event.target.value})
  }

  isCommentLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filteredList})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    console.log(initialContainerBackgroundClassNames)
    const {commentsList, count, name, text} = this.state

    return (
      <div className="app-container">
        <h1>Comments</h1>
        <div className="card-container">
          <div>
            <p>Say Something about 4.0 Technologies</p>
            <form className="form-container">
              <input
                type="text"
                className="input-element"
                placeholder="your name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                rows="4"
                cols="30"
                className="textarea"
                placeholder="Your Comment"
                onChange={this.onTextChange}
                value={text}
              >
                {text}
              </textarea>
              <button
                type="submit"
                className="button"
                onClick={this.onAddComment}
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>

        <hr />

        <p className="comments-count">{count}</p>
        <ul className="comments-container">
          {commentsList.map(each => (
            <CommentItem
              comment={each}
              key={each.id}
              isCommentLiked={this.isCommentLiked}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
