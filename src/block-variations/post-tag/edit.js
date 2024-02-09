export default function editPostTag(props) {
  if (props.name === 'core/post-tag') {
    return <PostTagEdit {...props} />;
  }

  return <BlockEdit {...props} />;
}