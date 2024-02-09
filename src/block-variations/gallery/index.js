import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editGallery } from './edit';

export default function HPUGallery() {
    const withCustomEditGallery = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/gallery') {
                return editGallery(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-gallery',
        withCustomEditGallery
    );
}
