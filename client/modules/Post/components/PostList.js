import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            votePostUp={(event) => {event.preventDefault(); props.handleVoteUpPost(post.cuid, post.voteCounter)}}
            votePostDown={(event) => {event.preventDefault(); props.handleVoteDownPost(post.cuid, post.voteCounter)}}
            onDelete={(event) => {event.preventDefault(); props.handleDeletePost(post.cuid)}}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    voteCounter: PropTypes.number.isRequired,
  })).isRequired,
  handleVoteUpPost: PropTypes.func.isRequired,
  handleVoteDownPost: PropTypes.func.isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
