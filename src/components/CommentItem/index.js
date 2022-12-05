// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {comment, isCommentLiked, onDeleteComment} = props
  const {name, text, profileLetter, isLiked, id} = comment
  const time = formatDistanceToNow(new Date())

  const onDeleteButtonClick = () => {
    onDeleteComment(id)
  }
  const onLikeButtonClick = () => {
    isCommentLiked(id)
  }
  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="card-container-comment-item">
        <p className="profile">{profileLetter}</p>
        <div>
          <p>{name}</p>
          <p>{time}</p>
          <p>{text}</p>
        </div>
      </div>
      <button type="button" onClick={onLikeButtonClick}>
        <img src={url} alt="like" />
        Like
      </button>
      <button type="button" onClick={onDeleteButtonClick} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default CommentItem
