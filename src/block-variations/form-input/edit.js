export default function editFormInput(props) {
    if (props.name === 'core/form-input') {
        return <FormInputEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}