import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUBlocksAudioEdit from './edit';

export default function HPUAudio() {
    const withCustomEditAudio = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/audio') {
                return <HPUBlocksAudioEdit {...props} />;
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter('blocks.registerBlockType', 'hpu-blocks/audio', (settings, name) => {
        if (name === 'core/audio') {
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
        'hpu-blocks/HPU-audio',
        withCustomEditAudio
    );
}