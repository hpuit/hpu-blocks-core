import { registerBlockVariation } from '@wordpress/blocks';
import './styles/loginout.sass';
export default function registerCoreLoginoutBlockVariations() {
    registerBlockVariation('core/loginout', {
        name: 'hpu-blocks-loginout',
        title: 'Login/Logout',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-loginout',
            align: {
                type: 'string',
                default: 'none',
            },
            text: {
                type: 'string',
                default: '',
            },
            showIfLoggedIn: {
                type: 'boolean',
                default: false,
            },
            showIfUserCan: {
                type: 'string',
                default: '',
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
                blockAttributes.showIfLoggedIn === variationAttributes.showIfLoggedIn,
                blockAttributes.showIfUserCan === variationAttributes.showIfUserCan,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}