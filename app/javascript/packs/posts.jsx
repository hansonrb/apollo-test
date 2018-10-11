import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, Query, Mutation } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const csrfToken = document
  .querySelector('meta[name=csrf-token]')
  .getAttribute('content');

const client = new ApolloClient({
  link: createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});

const QUERY = gql`
  query PostsPage {
    viewer {
      id
    }
    postsAll {
      id
      title
      tagline
      url
      commentsCount
      votesCount
    }
  }
`;

const MUTATION = gql`
  mutation HandleUpvote($postId: ID!) {
    createVote(postId: $postId) {
      postId
    }
  }
`

class Posts extends React.Component {
  handleVote = (mutation, post_id, evt) => {
    mutation({ variables: { postId: post_id }});
  }

  render() {
    return (
      <Query query={QUERY} >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <React.Fragment>
              {data.postsAll.map(post => (
                <article className="post" key={post.id}>
                  <h2>
                    <a href={`/posts/${post.id}`}>{post.title}</a>
                  </h2>
                  <div className="url">
                    <a href={post.url}>{post.url}</a>
                  </div>
                  <div className="tagline">{post.tagline}</div>
                  <footer>
                    <Mutation mutation={MUTATION}>
                      {(mutation) => (
                        <button onClick={this.handleVote.bind(this, mutation, post.id)}>🔼 {post.votesCount} </button>
                      )}
                    </Mutation>
                    <button>💬 {post.commentsCount}</button>
                  </footer>
                </article>
              ))}
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>,
    document.getElementById('posts'),
  );
});
