import { registerBlockVariation } from '@wordpress/blocks';
import './styles/navigation-submenu.sass';

export default function registerCoreNavigationSubmenuBlockVariations() {
    registerBlockVariation('core/navigation-submenu', {
        name: 'hpu-blocks-navigation-submenu',
        title: 'Navigation Submenu',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-navigation-submenu',
            text: {
                type: 'string',
                default: '',
            },
            url: {
                type: 'string',
                default: '',
            },
            target: {
                type: 'string',
                default: '',
            },
            rel: {
                type: 'string',
                default: '',
            },
            size: {
                type: 'string',
                default: 'default',
            },
            align: {
                type: 'string',
                default: 'none',
            },
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
                blockAttributes.text === variationAttributes.text,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.target === variationAttributes.target,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.size === variationAttributes.size,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}