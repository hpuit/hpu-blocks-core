import { registerBlockVariation } from '@wordpress/blocks';
import './styles/comment-edit-link.sass';

export default function registerCoreCommentEditLinkBlockVariations() {
    registerBlockVariation('core/comment-edit-link', {
        name: 'hpu-blocks-comment-edit-link',
        title: 'Comment Edit Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comment-edit-link',
            linkTarget: {
                type: 'string',
                default: '',
            },
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
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}