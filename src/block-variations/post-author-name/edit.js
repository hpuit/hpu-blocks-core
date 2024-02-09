export default function editPostAuthorName(props) {
    if (props.name === 'core/post-author-name') {
        return <PostAuthorNameEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}