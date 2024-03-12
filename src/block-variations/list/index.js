import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";

export default function HPUList() {


    //where the bullet points at? on top, move em to the side bar
    //remove colors option
    //reduce typography options to S, M, L
    //additional unorderd list options '>'
    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-list',
        (settings, name) => {
            if (name === 'core/list') {

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
        'hpu-blocks/HPU-list',
        (BlockEdit) => (props) => {
            if (props.name === 'core/list') {
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