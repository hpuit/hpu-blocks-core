import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editForm } from './edit';

export default function HPUForm() {
    const withCustomEditForm = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/form') {
                return editForm(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-form',
        withCustomEditForm
    );
}