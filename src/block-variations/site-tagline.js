import { registerBlockVariation } from '@wordpress/blocks';
import './styles/site-tagline.sass';

export default function registerCoreSiteTaglineBlockVariations() {
    registerBlockVariation('core/site-tagline', {
        name: 'hpu-blocks-site-tagline',
        title: 'Site Tagline',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-site-tagline',
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