import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostAuthor } from './edit';

export default function HPUPostAuthor() {
    const withCustomEditPostAuthor = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-author') {
                return editPostAuthor(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-author',
        withCustomEditPostAuthor
    );
}