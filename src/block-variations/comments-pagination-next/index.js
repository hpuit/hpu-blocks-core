import { registerBlockVariation } from '@wordpress/blocks';
import './comments-pagination-next.sass';

export default function registerCoreCommentsPaginationNextBlockVariations() {
    registerBlockVariation('core/comments-pagination-next', {
        name: 'hpu-blocks-comments-pagination-next',
        title: 'Comments Pagination Next',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-pagination-next',
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