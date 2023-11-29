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
            allowedBlocks:  {
                type: 'array',
                default: ['core/heading', 'core/paragraph', 'core/list', 'core/button'],
            }, 
            alt: {
                type: 'string',
                default: '',
            },
            backgroundType: {
                type: 'string',
                default: 'color',
            },
            contentPosition: {
                type: 'string',
                default: 'center center',
            },
            customGradient: {
                type: 'string',
                default: '',
            },
            customOverlayColor: {
                type: 'string',
                default: '',
            },
            dimRatio: {
                type: 'number',
                default: 50,
            },
            focalPoint: {
                type: 'object',
                default: { x: 0.5, y: 0.5 },
            },
            gradient: {
                type: 'string',
                default: '',
            },
            hasParallax: {
                type: 'boolean',
                default: false,
            },
            id: {
                type: 'string',
                default: '',
            },
            isDark: {
                type: 'boolean',
                default: false,
            },
            isRepeated: {
                type: 'boolean',
                default: false,
            },
            isUserOverlayColor: {
                type: 'boolean',
                default: false,
            }, 
            minHeight: {
                type: 'number',
                default: 0,
            },
            minHeightUnit: {
                type: 'string',
                default: 'px',
            },
            overlayColor: {
                type: 'string',
                default: '',
            },
            tagName: {
                type: 'string',
                default: 'div',
            },
            templateLock: {
                type: 'string',
                default: 'all',
            }, 
            url: {
                type: 'string',
                default: '',
            },
            useFeaturedImage:{
                type: 'boolean',
                default: true,
            },
        },
        supports: {
            align: false,
            color: false,
            html: false,
            spacing: false,
            anchor: true,
            typography: false,
            layout: false,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className,
                blockAttributes.allowedBlocks === variationAttributes.allowedBlocks,
                blockAttributes.alt === variationAttributes.alt,
                blockAttributes.backgroundType === variationAttributes.backgroundType,
                blockAttributes.contentPosition === variationAttributes.contentPosition,
                blockAttributes.customGradient === variationAttributes.customGradient,
                blockAttributes.customOverlayColor === variationAttributes.customOverlayColor,
                blockAttributes.dimRatio === variationAttributes.dimRatio,
                blockAttributes.focalPoint === variationAttributes.focalPoint,
                blockAttributes.gradient === variationAttributes.gradient,
                blockAttributes.hasParallax === variationAttributes.hasParallax,
                blockAttributes.id === variationAttributes.id,
                blockAttributes.isDark === variationAttributes.isDark,
                blockAttributes.isRepeated === variationAttributes.isRepeated,
                blockAttributes.isUserOverlayColor === variationAttributes.isUserOverlayColor,
                blockAttributes.minHeight === variationAttributes.minHeight,
                blockAttributes.minHeightUnit === variationAttributes.minHeightUnit,
                blockAttributes.overlayColor === variationAttributes.overlayColor,
                blockAttributes.tagName === variationAttributes.tagName,
                blockAttributes.templateLock === variationAttributes.templateLock,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.useFeaturedImage === variationAttributes.useFeaturedImage,
            ];
        },
        scope: ['block', 'inserter'],
    });
}