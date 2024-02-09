import { createHgherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editFormSubmitButton } from './edit';

export default function HPUFormSubmitButton() {
    const withCustomEditFormSubmitButton = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/form-submit-button') {
                return editFormSubmitButton(props);
            }
            return <BlockEdit {...props} />;
        };
    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-form-submit-button',
        withCustomEditFormSubmitButton
    );
}