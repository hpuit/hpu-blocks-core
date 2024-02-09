import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editLastestComments } from './edit';

export default function HPULastestComments() {
    const withCustomEditLastestComments = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/latest-comments') {
                return editLastestComments(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-lastest-comments',
        withCustomEditLastestComments
    );
}