export default function editMediaText(props) {
    if (props.name === 'core/media-text') {
        return <MediaTextEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}