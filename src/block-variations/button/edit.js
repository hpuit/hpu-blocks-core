export default function editButton(props) {
    if (props.name === 'core/button') {
        return <ButtonEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}