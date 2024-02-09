export default function editPostCommentsForm(props) {
    if (props.name === 'core/post-comments-form') {
        return <PostCommentsFormEdit {...props} />;
    }
    
    return <BlockEdit {...props} />;
    }