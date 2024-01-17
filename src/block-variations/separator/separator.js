import { registerBlockVariation } from '@wordpress/blocks';
import './separator.sass';

export default function registerCoreSeparatorBlockVariations() {
    registerBlockVariation('core/separator', {
        name: 'hpu-blocks-separator',
        title: 'Separator',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-separator',
            opacity: {
                type: 'number',
                default: 100,
            },
        },
        supports: {
            align: false,
            html: false,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.opacity === variationAttributes.opacity,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}