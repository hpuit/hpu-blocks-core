import { addFilter } from '@wordpress/hooks';
import StyleSelector from '../../style-selector';

export default function HPUArchives() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-Archives',
        (settings, name) => {
            if (name === 'core/archives') {
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
        'hpu-blocks/HPU-Archives',
        (BlockEdit) => (props) => {
            if (props.name === 'core/archives') {
                return <div>
                    <StyleSelector
                        value={props.attributes.styleClass}
                        onChange={(newValue) => props.setAttributes({ styleClass: newValue })}
                    />
                    <BlockEdit {...props} />
                </div>;
            }
            return <BlockEdit {...props} />;
        },
    );

}