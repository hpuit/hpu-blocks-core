export default function editBlockVariation(props) {
    if (props.name === 'core/block-variation') {
        return <BlockVariationEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}