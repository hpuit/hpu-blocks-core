import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editImage } from './edit';

export default function HPUImage() {
    const withCustomEditImage = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/image') {
                return editImage(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-image',
        withCustomEditImage
    );
}