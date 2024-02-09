export default function editCommentAuthorName(props) {
    if (props.name === 'core/comment-author-name') {
        return <CommentAuthorNameEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}