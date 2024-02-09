export default function editComments(props) {
    if (props.name === 'core/comments') {
        return <CommentsEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}