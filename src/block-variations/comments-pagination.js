import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCommentsPaginationBlockVariations() {
    registerBlockVariation('core/comments-pagination', {
        name: 'hpu-blocks-comments-pagination',
        title: 'Comments Pagination',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination',
            paginationArrow: {
                type: 'string',
                default: 'default',
            }
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
                blockAttributes.paginationArrow === variationAttributes.paginationArrow,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}