import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCorePostTermsBlockVariations() {
    registerBlockVariation('core/post-terms', {
        name: 'hpu-blocks-post-terms',
        title: 'Post Terms',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-terms',
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}