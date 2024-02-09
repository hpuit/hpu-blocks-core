export default function editCommentDate(props) {
    if (props.name === 'core/comment-date') {
        return <CommentDateEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}