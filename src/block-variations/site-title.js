import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreSiteTitleBlockVariations() {
    registerBlockVariation('core/site-title', {
        name: 'hpu-blocks-site-title',
        title: 'Site Title',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-title',
            isLink: {
                type: 'boolean',
                default: false,
            },
            level: {
                type: 'number',
                default: 1,
            },
            linkTarget: {
                type: 'string',
                default: '',
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
                blockAttributes.level === variationAttributes.level,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}