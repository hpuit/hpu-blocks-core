export default function editBlockVariation(props) {
    if (props.name === 'core/block') {
        return <BlockEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}