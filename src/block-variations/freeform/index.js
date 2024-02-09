import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editFreeform } from './edit';

export default function HPUFreeform() {
    const withCustomEditFreeform = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/freeform') {
                return editFreeform(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-freeform',
        withCustomEditFreeform
    );
}