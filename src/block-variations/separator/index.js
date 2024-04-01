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
        'blocks.getBlockAttributes',
        'hpu-blocks/HPU-separator',
        (attributes, blockType) => {
            if (blockType.name === 'core/separator') {
                return {
                    ...attributes,
                    className: `${attributes.className} ${attributes.styleClass}`,
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

    addFilter(
        'blocks.getSaveElement',
        'hpu-blocks/HPU-separator',
        (element, blockType, attributes) => {
            if (blockType.name === 'core/separator') {
                const newProps = {
                    ...element.props,
                    className: `${element.props.className} ${attributes.styleClass}`,
                };
                return cloneElement(element, newProps);
            }
            return element;
        });
}

function hpuBlocksRegisterSeparator() {
    return (settings, name) => {
        if (name === 'core/separator') {
            const isAdmin = select('core').canUser('activate_plugins');

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
                return (
                    <Fragment>
                        <StyleSelector
                            value={props.attributes.styleClass}
                            onChange={(styleClass) => props.setAttributes({ styleClass })} />
                        <BlockEdit {...props} className={`${props.attributes.className} ${props.attributes.styleClass}`} />
                    </Fragment>
                );
            }
            return <BlockEdit {...props} />;
        };
    }, 'hpu-blocks/HPU-separator');
}