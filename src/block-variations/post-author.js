import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCorePostAuthorBlockVariations() {
    registerBlockVariation('core/post-author', {
        name: 'hpu-blocks-post-author',
        title: 'Post Author',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-author',
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
            showBio: {
                type: 'boolean',
                default: false,
            },
            textAlign: {
                type: 'string',
                default: 'left',
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
                blockAttributes.showBio === variationAttributes.showBio,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter', 'block'],
    });
}