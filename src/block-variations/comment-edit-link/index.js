import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentEditLink } from './edit';

export default function HPUCommentEditLink() {
    const withCustomEditCommentEditLink = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comment-edit-link') {
                return editCommentEditLink(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comment-edit-link',
        withCustomEditCommentEditLink
    );
}