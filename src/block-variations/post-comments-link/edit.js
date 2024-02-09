export default function editPostCommentsLink(props) {
  if (props.name === 'core/post-comments-link') {
    return <PostCommentsLinkEdit {...props} />;
  }

  return <BlockEdit {...props} />;
}