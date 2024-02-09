export default function editForm(props) {
    if (props.name === 'core/form') {
        return <FormEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}