import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUBlocksVideoEdit from './edit';

export default function HPUVideo() {
    const withCustomEditVideo = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/video') {
                return <HPUBlocksVideoEdit {...props} />;
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter('blocks.registerBlockType', 'hpu-blocks/video', (settings, name) => {
        if (name === 'core/video') {
            settings.attributes = {
                ...settings.attributes,
                styleClass: {
                    type: 'string',
                    default: 'hpu-blocks-primary-style',
                },
            };
        }

        return settings;
    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-video',
        withCustomEditVideo
    );
}