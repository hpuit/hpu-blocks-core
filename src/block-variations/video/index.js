import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editVideo } from './edit';

export default function HPUVideo() {
    const withCustomEditVideo = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/video') {
                return editVideo(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-video',
        withCustomEditVideo
    );
}