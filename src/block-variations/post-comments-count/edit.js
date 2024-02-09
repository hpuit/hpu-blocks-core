export default function editPostCommentsCount(props) {
    if (props.name === 'core/post-comments-count') {
        return <PostCommentsCountEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}