export default function editCommentsPaginationNumbers(props) {
    if (props.name === 'core/comments-pagination-numbers') {
        return <CommentsPaginationNumbersEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}