import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreHeadingBlockVariations() {
    registerBlockVariation('core/heading', {
        name: 'hpu-blocks-heading',
        title: 'Heading',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-heading',
            align: {
                type: 'string',
                default: 'none',
            },
            level: {
                type: 'number',
                default: 2,
            },
            text: {
                type: 'string',
                default: '',
            },
            fontSize: {
                type: 'number',
                default: 0,
            },
            fontSizeUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.level === variationAttributes.level,
                blockAttributes.text === variationAttributes.text,
                blockAttributes.fontSize === variationAttributes.fontSize,
                blockAttributes.fontSizeUnit === variationAttributes.fontSizeUnit,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}