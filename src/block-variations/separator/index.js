import { addFilter } from "@wordpress/hooks";
import { useSelect } from "@wordpress/data";
import StyleSelector from "../../style-selector";
import { Fragment, cloneElement } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

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
                    styleClass: 'hpu-blocks-primary-style',
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
            console.log('hpuBlocksRegisterSeparator');
            const isAdmin = useSelect((select) => select('core').canUser('create', 'users'));

            if (!isAdmin) {
                settings.supports = {
                    ...settings.supports,
                    color: false, // Disable color settings
                };
            }

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
                        <BlockEdit {...props} className={`${props.attributes.styleClass}`} />
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