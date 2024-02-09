import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentReplyLink } from './edit';

export default function HPUCommentReplyLink() {
    const withCustomEditCommentReplyLink = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comment-reply-link') {
                return editCommentReplyLink(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comment-reply-link',
        withCustomEditCommentReplyLink
    );
}