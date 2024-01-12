import { registerBlockVariation } from '@wordpress/blocks';
import './styles/post-time-to-read.sass';

export default function registerCorePostTimeToReadBlockVariations() {
    registerBlockVariation('core/post-time-to-read', {
        name: 'hpu-blocks-post-time-to-read',
        title: 'Post Time To Read',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-post-time-to-read',
            align: {
                type: 'string',
                default: 'none',
            },
        },
        supports: {
            align: true,
            html: false,
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