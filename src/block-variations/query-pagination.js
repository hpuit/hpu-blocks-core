import { registerBlockVariation } from '@wordpress/blocks';
import './styles/query-pagination.sass';

export default function registerCoreQueryPaginationBlockVariations() {
    registerBlockVariation('core/query-pagination', {
        name: 'hpu-blocks-query-pagination',
        title: 'Query Loop Pagination',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-query-pagination',
            paginationArrow: {
                type: 'string',
                default: 'default',
            },
            showLabel: {
                type: 'boolean',
                default: false,
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
                blockAttributes.paginationArrow === variationAttributes.paginationArrow,
                blockAttributes.showLabel === variationAttributes.showLabel,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });
}