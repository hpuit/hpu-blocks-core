export default function editCommentsTitle(props) {
    if (props.name === 'core/comments-title') {
        return <CommentsTitleEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}