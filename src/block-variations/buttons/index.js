import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";
import StyleSelector from "../../style-selector";
import { Fragment } from "@wordpress/element";

export default function HPUButtons() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-buttons',
        (settings, name) => {
            if (name === 'core/buttons') {
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
        'hpu-blocks/HPU-buttons',
        (BlockEdit) => (props) => {
            if (props.name === 'core/buttons') {
                console.log(props);
                return <BlockEdit {...props} />;
            }
            return <BlockEdit {...props} />;
        },
    );

    addFilter(
        'blocks.getSaveElement',
        'hpu-blocks/HPU-buttons',
        (element, blockType) => {
            if (blockType.name === 'core/buttons') {
                return element;
            }
            return element;
        },
    );
}