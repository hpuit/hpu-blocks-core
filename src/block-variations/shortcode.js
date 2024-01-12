import { registerBlockVariation } from '@wordpress/blocks';
import './styles/shortcode.sass';

export default function registerCoreShortcodeBlockVariations() {
    registerBlockVariation('core/shortcode', {
        name: 'hpu-blocks-shortcode',
        title: 'Shortcode',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-shortcode',
            text: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: false,
            html: true,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.text === variationAttributes.text,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}