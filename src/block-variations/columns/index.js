import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUColumns() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-columns',
        (settings, name) => {
            if (name === 'core/columns') {

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
        'hpu-blocks/HPU-columns',
        (BlockEdit) => (props) => {
            if (props.name === 'core/columns') {
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