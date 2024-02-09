import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSeparator } from './edit';

export default function HPUSeparator() {
    const withCustomEditSeparator = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/separator') {
                return editSeparator(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-separator',
        withCustomEditSeparator
    );
}