import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCommentsTitleBlockVariations() {
    registerBlockVariation('core/comments-title', {
        name: 'hpu-blocks-comments-title',
        title: 'Comments Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments-title',
            level: {
                type: 'number',
                default: 2,
            },
            textAlign: {
                type: 'string',
                default: 'none',
            },
            showPostTitle: {
                type: 'boolean',
                default: false,
            },
            showCommentsCount: {
                type: 'boolean',
                default: false,
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
                blockAttributes.level === variationAttributes.level,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.showPostTitle === variationAttributes.showPostTitle,
                blockAttributes.showCommentsCount === variationAttributes.showCommentsCount,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}