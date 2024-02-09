export default function editCommentTemplate(props) {
    if (props.name === 'core/comment-template') {
        return <CommentTemplateEdit {...props} />;
    }

    return <BlockEdit {...props} />;

}