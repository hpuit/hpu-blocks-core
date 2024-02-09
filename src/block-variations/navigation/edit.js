export default function editNavigation(props) {
    if (props.name === 'core/navigation') {
        return <NavigationEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}