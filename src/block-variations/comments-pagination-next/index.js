import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentsPaginationNext } from './edit';

export default function HPUCommentsPaginationNext() {
    const withCustomEditCommentsPaginationNext = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comments-pagination-next') {
                return editCommentsPaginationNext(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comments-pagination-next',
        withCustomEditCommentsPaginationNext
    );
}