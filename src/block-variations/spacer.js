import { registerBlockVariation } from '@wordpress/blocks';
import './styles/spacer.sass';

export default function registerCoreSpacerBlockVariations() {
    registerBlockVariation('core/spacer', {
        name: 'hpu-blocks-spacer',
        title: 'Spacer',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-spacer',
            height: {
                type: 'number',
                default: 100,
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
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.height === variationAttributes.height,
                blockAttributes.width === variationAttributes.width,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}