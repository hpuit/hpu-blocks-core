import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUBlocksSeparatorEdit from './edit';

export default function HPUSeparator() {
    const withCustomEditSeparator = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/separator') {
                return <HPUBlocksSeparatorEdit {...props} />;
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter('blocks.registerBlockType', 'hpu-blocks/separator', (settings, name) => {
        if (name === 'core/separator') {
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
        'hpu-blocks/HPU-separator',
        withCustomEditSeparator
    );
}