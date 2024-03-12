import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUButton() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-button',
        (settings, name) => {
            if (name === 'core/button') {

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
        'hpu-blocks/HPU-button',
        (BlockEdit) => (props) => {
            if (props.name === 'core/button') {
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
