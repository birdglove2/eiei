import React from 'react';

function CommentList({ comments }) {
  // Object.values === return array of that object
  const renderedComments = Object.values(comments).map((comment, index) => {
    let content;
    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'This comment is awaiting moderation';
        break;
      case 'rejected':
        content = 'This comment has been rejected';
        break;
      default:
        content = comment.content;
    }

    // if (comment.status === "approved") {
    //   content = comment.content;
    // }

    // if (comment.status === "pending") {
    //   content = "This comment is awaiting moderation";
    // }

    // if (comment.status === "rejected") {
    //   content = "This comment has been rejected";
    // }

    return (
      <li key={index}>
        {index + 1}: {'content'}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
