import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUEditHeading from './edit';


export default function hpuBlocksHeading() {
    const withCustomEditHeading = createHigherOrderComponent((OriginalBlockEdit) => {
        return (props) => {
            if (props.name === 'core/heading') {
                console.log(props);
                return <HPUEditHeading {...props} />;
            }
            return <OriginalBlockEdit {...props} />;
        };
    }, 'withCustomEditHeading');

    // Add a new attribute to the paragraph block.
    addFilter('blocks.registerBlockType', 'hpu-blocks/heading', (settings, name) => {
        if (name === 'core/heading') {
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
        'hpu-blocks/HPU-heading',
        withCustomEditHeading
    );
} 