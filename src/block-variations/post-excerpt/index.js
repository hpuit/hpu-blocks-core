import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostExcerpt } from './edit';

export default function HPUPostExcerpt() {
    const withCustomEditPostExcerpt = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-excerpt') {
                return editPostExcerpt(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-excerpt',
        withCustomEditPostExcerpt
    );
}