import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUBlocksBlockEdit from './edit';

export default function HPUBlock() {
    const withCustomEditBlock = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/block') {
                return <HPUBlocksBlockEdit {...props} />;
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter('blocks.registerBlockType', 'hpu-blocks/block', (settings, name) => {
        if (name === 'core/block') {
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
        'hpu-blocks/HPU-block',
        withCustomEditBlock
    );
}