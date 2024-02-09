import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostCommentsForm } from './edit';

export default function HPUPostCommentsForm() {
    const withCustomEditPostCommentsForm = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-comments-form') {
                return editPostCommentsForm(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-comments-form',
        withCustomEditPostCommentsForm
    );
}