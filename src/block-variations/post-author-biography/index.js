import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostAuthorBiography } from './edit';

export default function HPUPostAuthorBiography() {
    const withCustomEditPostAuthorBiography = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-author-biography') {
                return editPostAuthorBiography(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-author-biography',
        withCustomEditPostAuthorBiography
    );
}