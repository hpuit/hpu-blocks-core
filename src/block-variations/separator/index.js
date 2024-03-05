import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUBlocksSeparatorEdit from './edit';

export default function HPUSeparator() {
    const withCustomEditSeparator = createHigherOrderComponent((OriginalBlockEdit) => {
        return (props) => {
            if (props.name === 'core/separator') {
                return <HPUBlocksSeparatorEdit {...props} />;
            }
            return <OriginalBlockEdit {...props} />;
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