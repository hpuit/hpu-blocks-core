export default function editCommentReplyLink(props) {
    if (props.name === 'core/comment-reply-link') {
        return <CommentReplyLinkEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}