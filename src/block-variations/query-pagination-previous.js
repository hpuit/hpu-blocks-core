import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreQueryPaginationPreviousBlockVariations() {
    registerBlockVariation('core/query-pagination-previous', {
        name: 'hpu-blocks-query-pagination-previous',
        title: 'Query Loop Pagination Previous',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-previous',
            label: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}