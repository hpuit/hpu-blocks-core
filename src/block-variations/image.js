import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreImageBlockVariations() {
    registerBlockVariation('core/image', {
        name: 'hpu-blocks-image',
        title: 'Image',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-image',
            align: {
                type: 'string',
                default: 'none',
            },
            url: {
                type: 'string',
                default: '',
            },
            alt: {
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
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.url === variationAttributes.url,
                blockAttributes.alt === variationAttributes.alt,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.captionFontSize === variationAttributes.captionFontSize,
                blockAttributes.captionFontSizeUnit === variationAttributes.captionFontSizeUnit,
                blockAttributes.align === variationAttributes.align,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}