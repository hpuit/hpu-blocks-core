import { registerBlockVariation } from '@wordpress/blocks';
import './styles/comment-content.sass';

export default function registerCoreCommentContentBlockVariations() {
    registerBlockVariation('core/comment-content', {
        name: 'hpu-blocks-comment-content',
        title: 'Comment Content',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-content',
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