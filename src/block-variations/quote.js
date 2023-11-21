import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreQuoteBlockVariations() {
    registerBlockVariation('core/quote', {
        name: 'hpu-blocks-quote',
        title: 'Quote',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-quote',
            align: {
                type: 'string',
                default: 'none',
            },
            citation: {
                type: 'string',
                default: '',
            },
            value: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.citation === variationAttributes.citation,
                blockAttributes.value === variationAttributes.value,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}