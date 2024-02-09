export default function editPostAuthor(props) {
  if (props.name === 'core/post-author') {
    return <PostAuthorEdit {...props} />;
  }

  return <BlockEdit {...props} />;
}