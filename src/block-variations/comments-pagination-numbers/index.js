import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentsPaginationNumbers } from './edit';

export default function HPUCommentsPaginationNumbers() {
    const withCustomEditCommentsPaginationNumbers = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comments-pagination-numbers') {
                return editCommentsPaginationNumbers(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comments-pagination-numbers',
        withCustomEditCommentsPaginationNumbers
    );
}