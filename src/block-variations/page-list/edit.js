export default function editPageList(props) {
    if (props.name === 'core/page-list') {
        return <PageListEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}