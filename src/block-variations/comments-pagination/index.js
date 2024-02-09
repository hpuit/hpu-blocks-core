import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentsPagination } from './edit';

export default function HPUCommentsPagination() {
    const withCustomEditCommentsPagination = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comments-pagination') {
                return editCommentsPagination(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comments-pagination',
        withCustomEditCommentsPagination
    );
}