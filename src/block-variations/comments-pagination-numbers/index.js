import { registerBlockVariation } from '@wordpress/blocks';
import './comments-pagination-numbers.sass';

export default function registerCoreCommentsPaginationNumbersBlockVariations() {
    registerBlockVariation('core/comments-pagination-numbers', {
        name: 'hpu-blocks-comments-pagination-numbers',
        title: 'Comments Pagination Numbers',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination-numbers',
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}