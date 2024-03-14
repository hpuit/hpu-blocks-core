import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";
import StyleSelector from "../../style-selector";

export default function HPUListItem() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-list-item',
        (settings, name) => {
            if (name === 'core/list-item') {
                const isAdmin = select('core').canUser('activate_plugins');

                if (!isAdmin) {
                    settings.supports = {
                        ...settings.supports,
                        color: false, // Disable color settings
                    };
                }
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
        'hpu-blocks/HPU-list-item',
        (BlockEdit) => (props) => {
            if (props.name === 'core/list-item') {
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

    addFilter(
        'blocks.getSaveElement',
        'hpu-blocks/HPU-list-item',
        (element, blockTypeOrName, attributes) => {
            if (blockTypeOrName.name === 'core/list-item') {
                return (
                    <span className={attributes.styleClass}>
                        {element}
                    </span>
                );
            }
            return element;
        }
    );
}