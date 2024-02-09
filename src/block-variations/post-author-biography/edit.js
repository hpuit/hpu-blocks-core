export default function editPostAuthorBiography(props) {
    if (props.name === 'core/post-author-biography') {
        return <PostAuthorBiographyEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}