import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUBlocksAvatarEdit from './edit';

export default function HPUAvatar() {
    const withCustomEditAvatar = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/avatar') {
                return <HPUBlocksAvatarEdit {...props} />
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter('blocks.registerBlockType', 'hpu-blocks/avatar', (settings, name) => {
        if (name === 'core/avatar') {
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
        'hpu-blocks/HPU-avatar',
        withCustomEditAvatar
    );
}