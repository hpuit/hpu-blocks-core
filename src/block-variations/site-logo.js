import { registerBlockVariation } from '@wordpress/blocks';
import './styles/site-logo.sass';

export default function registerCoreSiteLogoBlockVariations() {
    registerBlockVariation('core/site-logo', {
        name: 'hpu-blocks-site-logo',
        title: 'Site Logo',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-logo',
            isLink: {
                type: 'boolean',
                default: false,
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            shouldSyncIcon: {
                type: 'boolean',
                default: false,
            },
            width: {
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
                blockAttributes.shouldSyncIcon === variationAttributes.shouldSyncIcon,
                blockAttributes.width === variationAttributes.width,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}