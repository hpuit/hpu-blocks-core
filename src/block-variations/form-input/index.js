import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editFormInput } from './edit';

export default function HPUFormInput() {
    const withCustomEditFormInput = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/form-input') {
                return editFormInput(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-form-input',
        withCustomEditFormInput
    );
}