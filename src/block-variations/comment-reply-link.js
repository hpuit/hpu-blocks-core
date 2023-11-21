import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCommentReplyLinkBlockVariations() {
    registerBlockVariation('core/comment-reply-link', {
        name: 'hpu-blocks-comment-reply-link',
        title: 'Comment Reply Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-reply-link',
            textAlign: {
                type: 'string',
                default: 'none',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}