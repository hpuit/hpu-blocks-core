import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreCoverBlockVariations() {
    registerBlockVariation('core/cover', {
        name: 'hpu-blocks-cover',
        title: 'Cover',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-cover',
            allowedBlocks: {
                type: 'array',
            },
            backgroundColor: {
                type: 'string',
                default: '',
            },
            backgroundImage: {
                type: 'string',
                default: '',
            },
            backgroundOpacity: {
                type: 'number',
                default: 0,
            },
            dimRatio: {
                type: 'number',
                default: 0,
            },
            fixedBackground: {
                type: 'boolean',
                default: false,
            },
            minHeight: {
                type: 'number',
                default: 0,
            },
            overlayColor: {
                type: 'string',
                default: '',
            },
            overlayOpacity: {
                type: 'number',
                default: 0,
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
                blockAttributes.allowedBlocks === variationAttributes.allowedBlocks,
                blockAttributes.backgroundColor === variationAttributes.backgroundColor,
                blockAttributes.backgroundImage === variationAttributes.backgroundImage,
                blockAttributes.backgroundOpacity === variationAttributes.backgroundOpacity,
                blockAttributes.dimRatio === variationAttributes.dimRatio,
                blockAttributes.fixedBackground === variationAttributes.fixedBackground,
                blockAttributes.minHeight === variationAttributes.minHeight,
                blockAttributes.overlayColor === variationAttributes.overlayColor,
                blockAttributes.overlayOpacity === variationAttributes.overlayOpacity,
                blockAttributes.verticalAlignment === variationAttributes.verticalAlignment,
                blockAttributes.contentJustification === variationAttributes.contentJustification,
                blockAttributes.contentWidth === variationAttributes.contentWidth,
                blockAttributes.contentWidthCustom === variationAttributes.contentWidthCustom,
                blockAttributes.contentWidthUnit === variationAttributes.contentWidthUnit,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['block', 'inserter'],
    });
}