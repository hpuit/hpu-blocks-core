import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUListItem() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-list-item',
        (settings, name) => {
            if (name === 'core/list-item') {

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