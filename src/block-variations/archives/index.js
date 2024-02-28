import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import HPUBlockArchivesEdit from './edit';

export default function hpuArchives() {

    // A higher-order component for modifying the edit function of the core/archives block
    const withCustomEditArchive = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            // Check if the current block is the one we want to modify
            if (props.name === 'core/archives') {
                // You can now use your custom edit function or wrap the existing one
                return <HPUBlockArchivesEdit {...props} />;
            }

            // For all other blocks, return the default edit component
            return <BlockEdit {...props} />;
        };
    }, 'withCustomEditArchive');

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/archives',
        (settings, name) => {
            if (name === 'core/archives') {
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
    
    // Adding the filter
    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-archives',
        withCustomEditArchive
    );

}