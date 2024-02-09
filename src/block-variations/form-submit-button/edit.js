export default function editFormSubmitButton(props) {
    if (props.name === 'core/form-submit-button') {
        return <FormSubmitButtonEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}