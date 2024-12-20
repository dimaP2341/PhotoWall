import PropTypes from 'prop-types'
import { Component } from 'react'

class Photo extends Component {
  render() {
    const post = this.props.post
    return (
      <figure>
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button" onClick={() => this.props.onRemovePhoto(this.props.post)}>
            Remove
          </button>
        </div>
      </figure>
    )
  }
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
}

export default Photo
