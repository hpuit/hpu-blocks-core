import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreQueryTitleBlockVariations() {
    registerBlockVariation('core/query-title', {
        name: 'hpu-blocks-query-title',
        title: 'Query Loop Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-title',
            level: {
                type: 'number',
                default: 2,
            },
            showPrefix: {
                type: 'boolean',
                default: false,
            },
            showSearchTerm: {
                type: 'boolean',
                default: false,
            },
            textAlign: {
                type: 'string',
                default: 'left',
            },
            type: {
                type: 'string',
                default: 'default',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.level === variationAttributes.level,
                blockAttributes.showPrefix === variationAttributes.showPrefix,
                blockAttributes.showSearchTerm === variationAttributes.showSearchTerm,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.type === variationAttributes.type,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });
}