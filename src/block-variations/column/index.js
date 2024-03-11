import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUColumn() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-column',
        (settings, name) => {
            if (name === 'core/column') {

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
        'hpu-blocks/HPU-column',
        (BlockEdit) => (props) => {
            if (props.name === 'core/column') {
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