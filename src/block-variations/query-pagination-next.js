import { registerBlockVariation } from '@wordpress/blocks';
import './styles/query-pagination-next.sass';

export default function registerCoreQueryPaginationNextBlockVariations() {
    registerBlockVariation('core/query-pagination-next', {
        name: 'hpu-blocks-query-pagination-next',
        title: 'Query Loop Pagination Next',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination-next',
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