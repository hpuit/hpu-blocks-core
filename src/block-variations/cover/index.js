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
                            value={props.attributes.styleClass}
                            onChange={(styleClass) => props.setAttributes({ styleClass })}
                        />
                        <BlockEdit {...props} className={`${props.attributes.className} ${props.attributes.styleClass}`} />
                    </div>
                );
            }
            return <BlockEdit {...props} />;
        },
    );

    addFilter(
        'blocks.getSaveElement',
        'hpu-blocks/HPU-cover',
        (element, blockTypeOrName, attributes) => {
            if (blockTypeOrName.name === 'core/cover') {
                const newProps = {
                    ...attributes,
                    className: `${attributes.className} ${attributes.styleClass}`,
                };
                
                return {
                    ...element,
                    props: newProps,
                };
            }
            return element;
        },
    );

}