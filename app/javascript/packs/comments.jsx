import React from 'react'
import ReactDOM from 'react-dom'

class Comments extends React.Component {
  componentDidMount() {
    if (!this.props.postId) {
      throw new Error('No `postId` has been provided');
    }

    $.get(`/posts/${this.props.postId}/comments`, (comments) => {
      // NOTE(vesln): `comments` are the comments for the current post
    });
  }

  render() {
    return (
      <section>
        <h2>Comments</h2>
        <p>Find me in <code>app/javascript/packs/comments.jsx</code></p>
      </section>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const { postId } = (window.state || {});

  ReactDOM.render(
    <Comments postId={postId} />,
    document.getElementById('comments'),
  )
})
