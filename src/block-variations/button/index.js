import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";
import { Fragment } from "@wordpress/element";
import StyleSelector from "../../style-selector";

export default function HPUButton() {

    function HPURegisterButton(settings, name) {
        if (name === 'core/button') {
            // Check if the user is an admin
            const isAdmin = select('core').canUser('activate_plugins');

            // If the user is not an admin, disable some editor options
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
    addFilter('blocks.registerBlockType', 'hpu-blocks/HPU-button', HPURegisterButton);

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-button',
        (BlockEdit) => (props) => {
            if (props.name === 'core/button') {
                return (
                    <Fragment>
                        <StyleSelector
                            value={props.attributes.styleClass}
                            onChange={(styleClass) => props.setAttributes({ styleClass })}
                        />
                        <BlockEdit {...props} className={`${props.attributes.className} ${props.attributes.styleClass}`} />
                    </Fragment>
                );
            }
            return <BlockEdit {...props} />;
        },
    );

    addFilter(
        'blocks.getSaveElement',
        'hpu-blocks/HPU-button',
        (element, blockTypeOrName, attributes) => {
            if (blockTypeOrName.name === 'core/button') {
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
