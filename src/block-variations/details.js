import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreDetailsBlockVariations() {
    registerBlockVariation('core/details', {
        name: 'hpu-blocks-details',
        title: 'Details',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-details',
            align: {
                type: 'string',
                default: 'none',
            },
            summary: {
                type: 'string',
                default: '',
            },
            summaryFontSize: {
                type: 'number',
                default: 0,
            },
            summaryFontSizeUnit: {
                type: 'string',
                default: 'px',
            },
            summaryFontSizeUnitCustom: {
                type: 'string',
                default: 'px',
            },
            summaryFontFamily: {
                type: 'string',
                default: '',
            },
            summaryFontWeight: {
                type: 'string',
                default: '',
            },
            summaryTextTransform: {
                type: 'string',
                default: '',
            },
            summaryTextColor: {
                type: 'string',
                default: '',
            },
            summaryTextDecoration: {
                type: 'string',
                default: '',
            },
            summaryTextAlign: {
                type: 'string',
                default: '',
            },
            summaryLineHeight: {
                type: 'number',
                default: 0,
            },
            summaryLineHeightUnit: {
                type: 'string',
                default: 'px',
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.summary === variationAttributes.summary,
                blockAttributes.summaryFontSize === variationAttributes.summaryFontSize,
                blockAttributes.summaryFontSizeUnit === variationAttributes.summaryFontSizeUnit,
                blockAttributes.summaryFontSizeUnitCustom === variationAttributes.summaryFontSizeUnitCustom,
                blockAttributes.summaryFontFamily === variationAttributes.summaryFontFamily,
                blockAttributes.summaryFontWeight === variationAttributes.summaryFontWeight,
                blockAttributes.summaryTextTransform === variationAttributes.summaryTextTransform,
                blockAttributes.summaryTextColor === variationAttributes.summaryTextColor,
                blockAttributes.summaryTextDecoration === variationAttributes.summaryTextDecoration,
                blockAttributes.summaryTextAlign === variationAttributes.summaryTextAlign,
                blockAttributes.summaryLineHeight === variationAttributes.summaryLineHeight,
                blockAttributes.summaryLineHeightUnit === variationAttributes.summaryLineHeightUnit,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block'],
    });
}