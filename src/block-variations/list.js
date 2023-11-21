import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreListBlockVariations() {
    registerBlockVariation('core/list', {
        name: 'hpu-blocks-list',
        title: 'List',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-list',
            ordered: {
                type: 'boolean',
                default: false,
            },
            values: {
                type: 'array',
                default: [],
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.ordered === variationAttributes.ordered,
                blockAttributes.values === variationAttributes.values,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}