import { registerBlockVariation } from '@wordpress/blocks';
import './query-pagination-numbers.sass';

export default function registerCoreQueryPaginationNumbersBlockVariations() {
    registerBlockVariation('core/query-pagination-numbers', {
        name: 'hpu-blocks-query-pagination-numbers',
        title: 'Query Loop Pagination Numbers',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-numbers',
            midSize: {
                type: 'number',
                default: 2,
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
                blockAttributes.midSize === variationAttributes.midSize,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}