import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editComments } from './edit';

export default function HPUComments() {
    const withCustomEditComments = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comments') {
                return editComments(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comments',
        withCustomEditComments
    );
}