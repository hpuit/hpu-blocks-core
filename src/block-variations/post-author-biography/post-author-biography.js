import { registerBlockVariation } from '@wordpress/blocks';
import './post-author-biography.sass';

export default function registerCorePostAuthorBiographyBlockVariations() {
    registerBlockVariation('core/post-author-biography', {
        name: 'hpu-blocks-post-author-biography',
        title: 'Post Author Biography',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-author-biography',
            align: {
                type: 'string',
                default: 'none',
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
            showName: {
                type: 'boolean',
                default: false,
            },
            showRole: {
                type: 'boolean',
                default: false,
            },
            showSocialIcons: {
                type: 'boolean',
                default: false,
            },
            showWebsite: {
                type: 'boolean',
                default: false,
            },
            showWebsiteText: {
                type: 'string',
                default: '',
            },
            showWebsiteTarget: {
                type: 'string',
                default: '',
            },
            showWebsiteRel: {
                type: 'string',
                default: '',
            },
            showWebsiteClassName: {
                type: 'string',
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
                blockAttributes.showAvatar === variationAttributes.showAvatar,
                blockAttributes.avatarSize === variationAttributes.avatarSize,
                blockAttributes.showBio === variationAttributes.showBio,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.showName === variationAttributes.showName,
                blockAttributes.showRole === variationAttributes.showRole,
                blockAttributes.showSocialIcons === variationAttributes.showSocialIcons,
                blockAttributes.showWebsite === variationAttributes.showWebsite,
                blockAttributes.showWebsiteText === variationAttributes.showWebsiteText,
                blockAttributes.showWebsiteTarget === variationAttributes.showWebsiteTarget,
                blockAttributes.showWebsiteRel === variationAttributes.showWebsiteRel,
                blockAttributes.showWebsiteClassName === variationAttributes.showWebsiteClassName,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}