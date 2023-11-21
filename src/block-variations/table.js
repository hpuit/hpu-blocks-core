import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreTableBlockVariations() {
    registerBlockVariation('core/table', {
        name: 'hpu-blocks-table',
        title: 'Table',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-table',
            body: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            foot: {
                type: 'string',
                default: '',
            },
            hasFixedLayout: {
                type: 'boolean',
                default: false,
            },
            head: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.body === variationAttributes.body,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.foot === variationAttributes.foot,
                blockAttributes.hasFixedLayout === variationAttributes.hasFixedLayout,
                blockAttributes.head === variationAttributes.head,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}