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
            isLink: {
                type: 'boolean',
                default: false,
            }, 
            linkTarget: {
                type: 'string',
                default: '',
            },
            size: {
                type: 'string',
                default: 'medium',
            }, 
            userId: {
                type: 'number',
                default: '',
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
                blockAttributes.isLink === variationAttributes.isLink,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.userId === variationAttributes.userId,
            ];
        },
        scope: ['block'],
    });
}