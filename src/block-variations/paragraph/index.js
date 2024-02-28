import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUEditParagraph from './edit';

export default function HPUBlocksParagraph() {
    const withCustomEditParagraph = createHigherOrderComponent((OriginalBlockEdit) => {
        return (props) => {
            if (props.name === 'core/paragraph') {
                console.log(props);
                return <HPUEditParagraph {...props} />;
            }
            return <OriginalBlockEdit {...props} />;
        };
    }, 'withCustomEditParagraph');

    // Add a new attribute to the paragraph block.
    addFilter('blocks.registerBlockType', 'hpu-blocks/paragraph', (settings, name) => {
        if (name === 'core/paragraph') {
            settings.attributes = {
                ...settings.attributes,
                styleClass: {
                    type: 'string',
                    default: 'hpu-blocks-primary-style',
                },
                alignment: {
                    type: 'string',
                },
            };
        }

        return settings;
    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-paragraph',
        withCustomEditParagraph
    );
}