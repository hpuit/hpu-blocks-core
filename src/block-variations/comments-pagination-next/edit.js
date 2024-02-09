export default function editCommentsPaginationNext(props) {
    if (props.name === 'core/comments-pagination-next') {
        return <CommentsPaginationNextEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}