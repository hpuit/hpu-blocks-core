import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreColumnsBlockVariations() {
    registerBlockVariation('core/columns', {
        name: 'hpu-blocks-columns',
        title: 'Columns',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-columns',
            isStackedOnMobile: {
                type: 'boolean',
                default: false,
            },
            templateLock: {
                type: 'string',
                default: '',
            },
            verticalAlignment: {
                type: 'string',
                default: '',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.isStackedOnMobile === variationAttributes.isStackedOnMobile,
                blockAttributes.templateLock === variationAttributes.templateLock,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
            ];
        },
        scope: ['block', 'inserter'],
    });
}