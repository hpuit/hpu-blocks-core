import { registerBlockVariation } from '@wordpress/blocks';
import './term-description.sass';

export default function registerCoreTermDescriptionBlockVariations() {
    registerBlockVariation('core/term-description', {
        name: 'hpu-blocks-term-description',
        title: 'Term Description',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-term-description',
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
                blockAttributes.textAlign === variationAttributes.textAlign,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}