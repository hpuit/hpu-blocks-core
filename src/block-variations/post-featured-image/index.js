import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostFeaturedImage } from './edit';

export default function HPUPostFeaturedImage() {
    const withCustomEditPostFeaturedImage = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-featured-image') {
                return editPostFeaturedImage(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-featured-image',
        withCustomEditPostFeaturedImage
    );
}