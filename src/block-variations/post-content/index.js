import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostContent } from './edit';

export default function HPUPostContent() {
    const withCustomEditPostContent = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-content') {
                return editPostContent(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-content',
        withCustomEditPostContent
    );
}