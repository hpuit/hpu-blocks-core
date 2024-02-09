export default function editPageListItem(props) {
    if (props.name === 'core/page-list-item') {
        return <PageListItemEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}
