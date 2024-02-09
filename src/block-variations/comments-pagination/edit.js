export default function editCommentsPagination(props) {
    if (props.name === 'core/comments-pagination') {
        return <CommentsPaginationEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}