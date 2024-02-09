export default function editListItem(props) {
    if (props.name === 'core/list-item') {
        return <ListItemEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}