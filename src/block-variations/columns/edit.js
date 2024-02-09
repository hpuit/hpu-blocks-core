export default function editColumns(props) {
    if (props.name === 'core/columns') {
        return <ColumnsEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}