export default function editNavigationLink(props) {
    if (props.name === 'core/navigation-link') {
        return <NavigationLinkEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}