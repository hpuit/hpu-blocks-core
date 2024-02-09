export default function editCommentEditLink(props) {
    if (props.name === 'core/comment-edit-link') {
        return <CommentEditLinkEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}