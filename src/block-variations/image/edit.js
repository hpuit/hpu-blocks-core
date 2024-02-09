export default function editImage(props) {
    if (props.name === 'core/image') {
        return <ImageEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}