import React, {PropTypes} from 'react'
import ReactGravatar from 'react-gravatar'
import PageClick from 'react-page-click'
import moment from 'moment'
import { push } from 'react-router-redux'

import Actions from '../../actions/current_card'
import BoardActions from '../../actions/current_board'
import MembersSelector from './members_selector'
import TagsSelector from './tags_selector'

export default class CardModal extends React.Component {
  componentDidUpdate() {
    const { edit } = this.props

    if (edit) this.refs.name.focus()
  }

  _closeModal(e) {
    e.preventDefault()

    const { dispatch, boardId } = this.props

    dispatch(push(`/boards/${boardId}`))
  }

  _renderCommentForm() {
    const { currentUser } = this.props

    return (
      <div className="form-wrapper">
        <form onSubmit={::this._handleCommentFormSubmit}>
          <header>
            <h4>Add comment</h4>
          </header>
          <div className="gravatar-wrapper">
            <ReactGravatar className="react-gravatar" email={currentUser.email} https />
          </div>
          <div className="form-controls">
            <textarea
              ref="commentText"
              rows="5"
              placeholder="Write a comment…"
              required="true"/>
            <button type="submit">Save comment</button>
          </div>
        </form>
      </div>
    )
  }

  _handleCommentFormSubmit(e) {
    e.preventDefault()

    const { id } = this.props.card
    const { channel, dispatch } = this.props
    const { commentText } = this.refs

    const comment = {
      card_id: id,
      text: commentText.value.trim(),
    }

    dispatch(Actions.createCardComment(channel, comment))

    commentText.value = ''
  }

  _renderComments(card) {
    if (card.comments.length == 0) return false

    const comments = card.comments.map((comment) => {
      const { user } = comment

      return (
        <div key={comment.id} className="comment">
          <div className="gravatar-wrapper">
            <ReactGravatar className="react-gravatar" email={user.email} https />
          </div>
          <div className="info-wrapper">
            <h5>{user.first_name}</h5>
            <div className="text">
              {comment.text}
            </div>
            <small>{moment(comment.inserted_at).fromNow()}</small>
          </div>
        </div>
      )
    })

    return (
      <div className="comments-wrapper">
        <h4>Activity</h4>
        {comments}
      </div>
    )
  }

  _handleHeaderClick(e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(Actions.editCard(true))
  }

  _handleCancelClick(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(Actions.editCard(false))
  }

  _handleFormSubmit(e) {
    e.preventDefault()

    const { name, description } = this.refs

    const { card } = this.props

    card.name = name.value.trim()
    card.description = description.value.trim()

    const { channel, dispatch } = this.props

    dispatch(BoardActions.updateCard(channel, card))
  }

  _renderHeader() {
    const { card, edit } = this.props
  }
}
