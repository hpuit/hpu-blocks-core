export default function editCommentContent(props) {
    if (props.name === 'core/comment-content') {
        return <CommentContentEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}