import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostDate } from './edit';

export default function HPUPostDate() {
    const withCustomEditPostDate = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-date') {
                return editPostDate(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-date',
        withCustomEditPostDate
    );
}