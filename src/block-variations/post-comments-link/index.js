import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostCommentsLink } from './edit';

export default function HPUPostCommentsLink() {
    const withCustomEditPostCommentsLink = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-comments-link') {
                return editPostCommentsLink(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-comments-link',
        withCustomEditPostCommentsLink
    );
}