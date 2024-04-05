import { addFilter } from "@wordpress/hooks";
import StyleSelector from "../../style-selector";
import { Fragment, cloneElement } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";
import { createBlock } from "@wordpress/blocks";
import { useState } from 'react';

let selectedStyleClass = 'hpu-blocks-primary-style';

export default function HPUSeparator() {
    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-separator',
        hpuBlocksRegisterSeparator
    );

    addFilter(
        'blocks.cloneBlock',
        'hpu-blocks/HPU-separator',
        (block, originalBlock) => {
            if (originalBlock.name === 'core/separator') {
                console.log('clone block: HPU-separator');
                return createBlock(block.name, {
                    ...originalBlock.attributes,
                    styleClass: `${selectedStyleClass}`,
                    className: `${originalBlock.attributes.styleClass}`,
                });
            }
            return block;
        }
    );

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-separator',
        hpuBlocksEditSeparator
    );

    addFilter(
        'blocks.getSaveElement',
        'hpu-blocks/HPU-separator',
        (element, blockType, attributes) => {
            if (blockType.name === 'core/separator') {
                console.log('save element: HPU-separator');
                const newProps = {
                    ...element.props,
                    className: `${element.props.className} ${attributes.styleClass}`,
                };
                return cloneElement(element, newProps);
            }
            return element;
        }
    );
}

function hpuBlocksRegisterSeparator() {
    return (settings, name) => {
        if (name === 'core/separator') {
            return {
                ...settings,
                attributes: {
                    ...settings.attributes,
                    styleClass: {
                        type: 'string',
                        default: 'hpu-blocks-primary-style',
                    },
                    className: {
                        type: 'string',
                    },
                },
            };
        }
        return settings;
    };
}

function hpuBlocksEditSeparator() {
    return createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            const [styleClass, setStyleClass] = useState(null); // Initialize state using useState hook

            if (props.name === 'core/separator') {
                console.log(`${props.attributes.styleClass}`);
                return (
                    <Fragment>
                        <BlockEdit {...props} className={`${props.attributes.styleClass}`} />
                        <StyleSelector
                            value={styleClass} // Use styleClass state variable
                            onChange={(newStyleClass) => {
                                setStyleClass(newStyleClass) // Use setStyleClass to update state
                                selectedStyleClass = { newStyleClass };
                            }}
                        />
                    </Fragment>
                );
            }
            return <BlockEdit {...props} />;
        };
    });
}