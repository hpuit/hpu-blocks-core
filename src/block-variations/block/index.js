import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUBlock() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-block',
        (settings, name) => {
            if (name === 'core/block') {

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
        'hpu-blocks/HPU-block',
        (BlockEdit) => (props) => {
            if (props.name === 'core/block') {
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