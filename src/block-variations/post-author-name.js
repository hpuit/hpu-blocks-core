import { registerBlockVariation } from '@wordpress/blocks';
import './styles/post-author-name.sass';

export default function registerCorePostAuthorNameBlockVariations() {
    registerBlockVariation('core/post-author-name', {
        name: 'hpu-blocks-post-author-name',
        title: 'Post Author Name',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-author-name',
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
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}