import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUAudio() {

    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-audio',
        (settings, name) => {
            if (name === 'core/audio') {

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
        'hpu-blocks/HPU-audio',
        (BlockEdit) => (props) => {
            if (props.name === 'core/audio') {
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