import { registerBlockVariation } from '@wordpress/blocks';
import './styles/post-comments-link.sass';

export default function registerCorePostCommentsLinkBlockVariations() {
    registerBlockVariation('core/post-comments-link', {
        name: 'hpu-blocks-post-comments-link',
        title: 'Post Comments Link',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-comments-link',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            showAvatar: {
                type: 'boolean',
                default: false,
            },
            avatarSize: {
                type: 'number',
                default: 0,
            },
            showCount: {
                type: 'boolean',
                default: false,
            },
            showText: {
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showCount === variationAttributes.showCount,
                blockAttributes.showText === variationAttributes.showText,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}