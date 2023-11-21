import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreButtonsBlockVariations() {
registerBlockVariation('core/buttons', {
    name: 'hpu-blocks-buttons',
    title: 'Buttons',
    category: 'hpu-blocks',
    isDefault: true,
    attributes: {
        providerNameSlug: 'hpu-blocks',
        className: 'hpu-blocks-buttons',
        align: {
            type: 'string',
            default: 'none',
        },
        verticalAlignment: {
            type: 'string',
            default: 'none',
        },
        contentJustification: {
            type: 'string',
            default: 'left',
        },
        contentWidth: {
            type: 'string',
            default: 'full',
        },
        contentWidthCustom: {
            type: 'number',
            default: 0,
        },
        contentWidthUnit: {
            type: 'string',
            default: 'px',
        },
        contentWidthUnitCustom: {
            type: 'string',
            default: 'px',
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
            blockAttributes.align === variationAttributes.align,
            blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
            blockAttributes.contentJustification === variationAttributes.contentJustification,
            blockAttributes.contentWidth === variationAttributes.contentWidth,
            blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
            blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
            blockAttributes.contentWidthUnitCustom === variationAttributes.contentWidthUnitCustom,
        ];
    },
    scope: ['block', 'inserter'],
});
}