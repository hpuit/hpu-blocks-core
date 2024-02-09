import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentDate } from './edit';

export default function HPUCommentDate() {
    const withCustomEditCommentDate = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comment-date') {
                return editCommentDate(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comment-date',
        withCustomEditCommentDate
    );
}