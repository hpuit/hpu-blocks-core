import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import HPUCoverEdit from './edit';

export default function HPUCover() {   
    const withCustomEditCover = createHigherOrderComponent((OriginalBlockEdit) => {
        return (props) => {
            if (props.name === 'core/cover') {
                return <HPUCoverEdit {...props} />;
            }
            return <OriginalBlockEdit {...props} />;
        };

    });

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/cover',
        (settings, name) => {
            if (name === 'core/cover') {
                settings.attributes = {
                    ...settings.attributes,
                    styleClass: {
                        type: 'string',
                        default: 'hpu-blocks-primary-style',
                    },
                };
            }
            return settings;
        }
    );

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-cover',
        withCustomEditCover
    );
}