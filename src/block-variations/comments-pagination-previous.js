import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCommentsPaginationNextBlockVariations() {
    registerBlockVariation('core/comments-pagination-previous', {
        name: 'hpu-blocks-comments-pagination-previous',
        title: 'Comments Pagination Previous',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination-previous',
            label: {
                type: 'string',
                default: '',
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
                blockAttributes.label === variationAttributes.label,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}