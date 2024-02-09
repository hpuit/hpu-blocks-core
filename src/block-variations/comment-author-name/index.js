import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentAuthorName } from './edit';

export default function HPUCommentAuthorName() {
    const withCustomEditCommentAuthorName = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comment-author-name') {
                return editCommentAuthorName(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comment-author-name',
        withCustomEditCommentAuthorName
    );
}