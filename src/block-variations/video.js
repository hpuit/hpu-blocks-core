import { registerBlockVariation } from '@wordpress/blocks';

export default function registerCoreVideoBlockVariations() {
    registerBlockVariation('core/video', {
        name: 'hpu-blocks-video',
        title: 'Video',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-video',
            autoplay: {
                type: 'boolean',
                default: false,
            },
            caption: {
                type: 'string',
                default: '',
            },
            controls: {
                type: 'boolean',
                default: true,
            },
            id: {
                type: 'string',
                default: '',
            },
            loop: {
                type: 'boolean',
                default: false,
            },
            muted: {
                type: 'boolean',
                default: false,
            },
            playsInline: {
                type: 'boolean',
                default: false,
            },
            poster: {
                type: 'string',
                default: '',
            },
            preload: {
                type: 'string',
                default: 'metadata',
            },
            src: {
                type: 'string',
                default: '',
            },
            tracks: {
                type: 'array',
                default: [],
            },
        },
        supports: {
            align: true,
            html: false,
            spacing: false,
            anchor: true,
            inserter: true,
        },
        isActive: (blockAttributes, variationAttributes) => {
            return [
                blockAttributes.autoplay === variationAttributes.autoplay,
                blockAttributes.caption === variationAttributes.caption,
                blockAttributes.controls === variationAttributes.controls,
                blockAttributes.id === variationAttributes.id,
                blockAttributes.loop === variationAttributes.loop,
                blockAttributes.muted === variationAttributes.muted,
                blockAttributes.playsInline === variationAttributes.playsInline,
                blockAttributes.poster === variationAttributes.poster,
                blockAttributes.preload === variationAttributes.preload,
                blockAttributes.src === variationAttributes.src,
                blockAttributes.tracks === variationAttributes.tracks,
                blockAttributes.providerNameSlug === variationAttributes.providerNameSlug,
                blockAttributes.className === variationAttributes.className
            ];
        },
        scope: ['inserter'],
    });
}