export default function editNavigationSubmenu(props) {
    if (props.name === 'core/navigation-submenu') {
        return <NavigationSubmenuEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}