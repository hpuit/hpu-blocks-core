export default function editButtons(props) {
    if (props.name === 'core/buttons') {
        return <ButtonsEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}