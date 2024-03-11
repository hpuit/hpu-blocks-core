import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUButtons() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-buttons',
        (settings, name) => {
            if (name === 'core/buttons') {

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
                return (
                    <div>
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