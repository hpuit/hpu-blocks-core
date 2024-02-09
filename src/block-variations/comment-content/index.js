import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentContent } from './edit';

export default function HPUCommentContent() {
    const withCustomEditCommentContent = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comment-content') {
                return editCommentContent(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comment-content',
        withCustomEditCommentContent
    );
}