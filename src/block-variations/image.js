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
            alt: {
                type: 'string',
                default: '',
            },
            aspectRatio: {
                type: 'string',
                default: '',
            },
            caption: {
                type: 'string',
                default: '',
            },
            height: {
                type: 'number',
                default: 0,
            },
            href: {
                type: 'string',
                default: '',
            },
            id: {
                type: 'number',
                default: 0,
            },
            lightbox: {
                type: 'boolean',
                default: false,
            },
            linkClass: {
                type: 'string',
                default: '',
            },
            linkDestination: {
                type: 'string',
                default: '',
            },
            linkTarget: {
                type: 'string',
                default: '',
            },
            rel: {
                type: 'string',
                default: '',
            },
            scale: {
                type: 'number',
                default: 100,
            },
            sizeSlug: {
                type: 'string',
                default: '',
            },
            title: {
                type: 'string',
                default: '',
            },
            url: {
                type: 'string',
                default: '',
            },
            width: {
                type: 'number',
                default: 0,
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
                blockAttributes.alt === variationAttributes.alt,
                blockAttributes.aspectRatio === variationAttributes.aspectRatio,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.height === variationAttributes.height,
                blockAttributes.href === variationAttributes.href,
                blockAttributes.id === variationAttributes.id,
                blockAttributes.lightbox === variationAttributes.lightbox,
                blockAttributes.linkClass === variationAttributes.linkClass,
                blockAttributes.linkDestination === variationAttributes.linkDestination,
                blockAttributes.linkTarget === variationAttributes.linkTarget,
                blockAttributes.rel === variationAttributes.rel,
                blockAttributes.scale === variationAttributes.scale,
                blockAttributes.sizeSlug === variationAttributes.sizeSlug,
                blockAttributes.title === variationAttributes.title,
                blockAttributes.url === variationAttributes.url,
                blockAttributes.width === variationAttributes.width,
            ];
        },
        scope: ['block', 'inserter'],
    });
}