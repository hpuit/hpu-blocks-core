import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostTimeToRead } from './edit';

export default function HPUPostTimeToRead() {
    const withCustomEditPostTimeToRead = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-time-to-read') {
                return editPostTimeToRead(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-time-to-read',
        withCustomEditPostTimeToRead
    );
}