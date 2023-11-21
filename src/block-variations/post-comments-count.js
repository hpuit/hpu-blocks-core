import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCorePostCommentsCountBlockVariations() {
    registerBlockVariation('core/post-comments-count', {
        name: 'hpu-blocks-post-comments-count',
        title: 'Post Comments Count',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-comments-count',
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