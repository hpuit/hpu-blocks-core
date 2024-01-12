import { registerBlockVariation } from '@wordpress/blocks';
import './styles/list-item.sass';

export default function registerCoreListItemBlockVariations() {
    registerBlockVariation('core/list-item', {
        name: 'hpu-blocks-list-item',
        title: 'List Item',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-list-item',
            value: {
                type: 'string',
                default: '',
            },
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
            fontSize: {
                type: 'number',
                default: 0,
            },
            fontSizeUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: true,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.value === variationAttributes.value,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.fontSize === variationAttributes.fontSize,
                blockAttributes.fontSizeUnit === variationAttributes.fontSizeUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}