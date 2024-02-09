import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCommentTemplate } from './edit';

export default function HPUCommentTemplate() {
    const withCustomEditCommentTemplate = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/comment-template') {
                return editCommentTemplate(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-comment-template',
        withCustomEditCommentTemplate
    );
}