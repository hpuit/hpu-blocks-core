import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostCommentsCount } from './edit';

export default function HPUPostCommentsCount() {
    const withCustomEditPostCommentsCount = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-comments-count') {
                return editPostCommentsCount(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-comments-count',
        withCustomEditPostCommentsCount
    );
}