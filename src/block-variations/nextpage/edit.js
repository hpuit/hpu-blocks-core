export default function editNextPage(props) {
    if (props.name === 'core/nextpage') {
        return <NextPageEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}