import { addFilter } from '@wordpress/hooks';
import StyleSelector from '../../style-selector';

export default function HPUCover() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-cover',
        (settings, name) => {
            if (name === 'core/cover') {
                return {
                    ...settings,
                    attributes: {
                        ...settings.attributes,
                        styleClass: {
                            type: 'string',
                            default: 'hpu-blocks-primary-style',
                        },
                    },
                };
            }
            return settings;
        }
    );
    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-cover',
        (BlockEdit) => (props) => {
            if (props.name === 'core/cover') {
                return (
                    <div>
                        <StyleSelector 
                            
                        />
                        <BlockEdit {...props} />
                    </div>
                );
            }
            return <BlockEdit {...props} />;
        },
    );

}