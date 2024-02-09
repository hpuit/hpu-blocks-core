export default function editCommentsPaginationPrevious(props) {
    if (props.name === 'core/comments-pagination-previous') {
        return <CommentsPaginationPreviousEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}