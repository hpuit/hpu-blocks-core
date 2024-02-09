import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editButtons } from './edit';

export default function HPUButtons() {
    const withCustomEditButtons = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/buttons') {
                return editButtons(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-buttons',
        withCustomEditButtons
    );
}