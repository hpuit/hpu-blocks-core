import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreAvatarBlockVariations() {
    registerBlockVariation('core/avatar', {
        name: 'hpu-blocks-avatar',
        title: 'Avatar',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-avatar',
            align: {
                type: 'string',
                default: 'none',
            },
            size: {
                type: 'string',
                default: 'medium',
            },
            userId: {
                type: 'number',
                default: 0,
            },
            showName: {
                type: 'boolean',
                default: true,
            },
            showRole: {
                type: 'boolean',
                default: true,
            },
            showBio: {
                type: 'boolean',
                default: true,
            },
            showWebsite: {
                type: 'boolean',
                default: true,
            },
            showPosts: {
                type: 'boolean',
                default: true,
            },
            showComments: {
                type: 'boolean',
                default: true,
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.userId === variationAttributes.userId,
                blockAttributes.showName === variationAttributes.showName,
                blockAttributes.showRole === variationAttributes.showRole,
                blockAttributes.showBio === variationAttributes.showBio,
                blockAttributes.showWebsite === variationAttributes.showWebsite,
                blockAttributes.showPosts === variationAttributes.showPosts,
                blockAttributes.showComments === variationAttributes.showComments,
            ];
        },
        scope: ['block'],
    });
}