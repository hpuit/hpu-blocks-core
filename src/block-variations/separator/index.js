import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";
import StyleSelector from "../../style-selector";
import { Fragment, cloneElement } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

export default function HPUSeparator() {
    addFilter(
        'blocks.registerBlockType',
        'hpu-blocks/HPU-separator',
        hpuBlocksRegisterSeparator()
    );

    addFilter(
        'blocks.cloneBlock',
        'hpu-blocks/HPU-separator',
        (cloneBlock, block) => {
            if (block.name === 'core/separator') {
                console.log('clone block: HPU-separator');
                return cloneBlock(block, {
                    attributes: {
                        ...block.attributes,
                        styleClass: 'hpu-blocks-primary-style',
                    },
                });
            }
            return cloneBlock;
        }
    );



    addFilter(
        'blocks.getBlockAttributes',
        'hpu-blocks/HPU-separator',
        (attributes, blockType) => {
            if (blockType.name === 'core/separator') {
                console.log('Get block attributes: HPU-separator');
                return {
                    ...attributes,
                    className: `${attributes.styleClass}`,
                };
            }
            return attributes;
        }
    );

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-separator',
        hpuBlocksEditSeparator()
    );

    // addFilter(
    //     'blocks.getSaveElement',
    //     'hpu-blocks/HPU-separator',
    //     (element, blockType, attributes) => {
    //         if (blockType.name === 'core/separator') {
    //             console.log('save element: HPU-separator');
    //             const newProps = {
    //                 ...element.props,
    //                 className: `${element.props.className}`,
    //             };
    //             return cloneElement(element, newProps);
    //         }
    //         return element;
    //     });
}

function hpuBlocksRegisterSeparator() {
    return (settings, name) => {
        if (name === 'core/separator') {
            console.log('hpuBlocksRegisterSeparator');
            // const isAdmin = select('core').canUser('activate_plugins');

            // if (!isAdmin) {
            //     settings.supports = {
            //         ...settings.supports,
            //         color: false, // Disable color settings
            //     };
            // }

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
            if (props.name === 'core/separator') {
                console.log(props.attributes);
                return cloneElement(
                    <Fragment>
                        <BlockEdit {...props} />
                        <StyleSelector
                            value={props.attributes.styleClass}
                            onChange={(styleClass) => props.setAttributes({ styleClass })} />
                    </Fragment>
                );
            }
            return <BlockEdit {...props} />;
        };
    }, 'hpu-blocks/HPU-separator');
}