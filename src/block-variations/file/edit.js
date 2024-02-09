export default function editFile(props) {
    if (props.name === 'core/file') {
        return <FileEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}