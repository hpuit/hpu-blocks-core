import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editFormSubmissionNotification } from './edit';

export default function HPUFormSubmissionNotification() {
    const withCustomEditFormSubmissionNotification = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/form-submission-notification') {
                return editFormSubmissionNotification(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-form-submission-notification',
        withCustomEditFormSubmissionNotification
    );
}