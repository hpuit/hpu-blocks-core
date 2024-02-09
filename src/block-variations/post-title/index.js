import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostTitle } from './edit';

export default function HPUPostTitle() {
    const withCustomEditPostTitle = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-title') {
                return editPostTitle(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-title',
        withCustomEditPostTitle
    );
}