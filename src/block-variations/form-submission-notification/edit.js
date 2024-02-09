export default function editFormSubmissionNotification(props) {
    if (props.name === 'core/form-submission-notification') {
        return <FormSubmissionNotificationEdit {...props} />;
    }

    return <BlockEdit {...props} />;
}