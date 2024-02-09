export default function editHomeLink(props) {
    if (props.name === 'core/home-link') {
        return <HomeLinkEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}