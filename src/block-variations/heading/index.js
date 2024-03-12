import { addFilter } from '@wordpress/hooks';
import StyleSelector from '../../style-selector';

export default function HPUHeading() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-heading',
        (settings, name) => {
            if (name === 'core/heading') {

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
        'hpu-blocks/HPU-heading',
        (BlockEdit) => (props) => {
            if (props.name === 'core/heading') {
                return (
                    <div className={props.attributes.styleClass}>
                        <StyleSelector
                            value={props.attributes.styleClass}
                            onChange={(styleClass) => props.setAttributes({ styleClass })}
                        />
                        <BlockEdit {...props} />
                    </div>
                );
            }
            return <BlockEdit {...props} />;
        },
    );

}