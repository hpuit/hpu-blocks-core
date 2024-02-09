import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostTag } from './edit';

export default function HPUPostTag() {
    const withCustomEditPostTag = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-tag') {
                return editPostTag(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-tag',
        withCustomEditPostTag
    );
}