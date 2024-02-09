import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentsPaginationPrevious } from './edit';

export default function HPUCommentsPaginationPrevious() {
    const withCustomEditCommentsPaginationPrevious = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comments-pagination-previous') {
                return editCommentsPaginationPrevious(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comments-pagination-previous',
        withCustomEditCommentsPaginationPrevious
    );
}