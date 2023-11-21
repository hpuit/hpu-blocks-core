import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreGalleryBlockVariations() {
    registerBlockVariation('core/gallery', {
        name: 'hpu-blocks-gallery',
        title: 'Gallery',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-gallery',
            align: {
                type: 'string',
                default: 'none',
            },
            ids: {
                type: 'array',
                default: [],
            },
            columns: {
                type: 'number',
                default: 3,
            },
            sizeSlug: {
                type: 'string',
                default: 'large',
            },
            linkTo: {
                type: 'string',
                default: 'none',
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            captionFontSize: {
                type: 'number',
                default: 0,
            },
            captionFontSizeUnit: {
                type: 'string',
                default: 'px',
            },
            captionFontSizeUnitCustom: {
                type: 'string',
                default: 'px',
            },
            captionFontFamily: {
                type: 'string',
                default: '',
            },
            captionFontWeight: {
                type: 'string',
                default: '',
            },
            captionTextTransform: {
                type: 'string',
                default: '',
            },
            captionTextColor: {
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
                blockAttributes.ids === variationAttributes.ids,
                blockAttributes.columns === variationAttributes.columns,
                blockAttributes.sizeSlug === variationAttributes.sizeSlug,
                blockAttributes.linkTo === variationAttributes.linkTo,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.captionFontSize === variationAttributes.captionFontSize,
                blockAttributes.captionFontSizeUnit === variationAttributes.captionFontSizeUnit,
                blockAttributes.captionFontSizeUnitCustom === variationAttributes.captionFontSizeUnitCustom,
                blockAttributes.captionFontFamily === variationAttributes.captionFontFamily,
                blockAttributes.captionFontWeight === variationAttributes.captionFontWeight,
                blockAttributes.captionTextTransform === variationAttributes.captionTextTransform,
                blockAttributes.captionTextColor === variationAttributes.captionTextColor,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}