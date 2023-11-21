import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCommentsBlockVariations() {
    registerBlockVariation('core/comments', {
        name: 'hpu-blocks-comments',
        title: 'Comments',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-comments',
            tagName: {
                type: 'string',
                default: '',
            }
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}