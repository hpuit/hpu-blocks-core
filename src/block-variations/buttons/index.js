import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";

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

}