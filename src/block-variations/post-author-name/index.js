import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostAuthorName } from './edit';

export default function HPUPostAuthorName() {
    const withCustomEditPostAuthorName = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-author-name') {
                return editPostAuthorName(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-author-name',
        withCustomEditPostAuthorName
    );
}